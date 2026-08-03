'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const styles = fs.readFileSync(path.join(root, 'style.css'), 'utf8');
const cities = JSON.parse(fs.readFileSync(path.join(root, 'cities.json'), 'utf8'));

assert(
  /\.mode-btn-primary \.mode-title\s*\{[^}]*white-space:\s*nowrap;/s.test(styles),
  '全国版で遊ぶの見出しは1行表示を維持する必要があります',
);

const categoryMatch = source.match(/const TAG_GAME_CATEGORY = (\{[\s\S]*?\n\});/);
assert(categoryMatch, 'TAG_GAME_CATEGORYを読み取れません');
const categories = vm.runInNewContext(`(${categoryMatch[1]})`);

const startMarker = '// ==================== ご当地度の全自治体共通評価 ====================';
const endMarker = '// ==================== /ご当地度の全自治体共通評価 ====================';
const start = source.indexOf(startMarker);
const end = source.indexOf(endMarker);
assert(start >= 0 && end > start, 'ご当地度評価ブロックを読み取れません');
const block = source.slice(start, end);
const sandbox = { TAG_GAME_CATEGORY: categories };
vm.runInNewContext(`${block}\nthis.exportsForTest = { buildLocalIdentityTagFrequency, calculateLocalStar };`, sandbox);
const { buildLocalIdentityTagFrequency, calculateLocalStar } = sandbox.exportsForTest;

const expanded = cities.map(city => ({
  ...city,
  tags: Object.fromEntries(city.tags.map(key => [key, true])),
}));
const frequency = buildLocalIdentityTagFrequency(expanded);
const localStar = name => {
  const city = expanded.find(candidate => candidate.name === name);
  assert(city, `${name}がcities.jsonにありません`);
  return calculateLocalStar(city, frequency);
};

assert(localStar('与那国町') >= 4, '日本最西端・離島の与那国町はご当地度4以上であるべきです');
assert(localStar('小笠原村') >= 4, '固有の地理・世界遺産を持つ小笠原村はご当地度4以上であるべきです');
assert.strictEqual(localStar('白川村'), 5, '世界遺産・合掌造りを持つ小規模自治体の白川村はご当地度5であるべきです');
assert.strictEqual(
  calculateLocalStar({ tags: {}, stats: { population: 1000 } }, frequency),
  1,
  '人口が少ないだけで特色の根拠がない自治体を加点してはいけません',
);

const distribution = {};
for(const city of expanded){
  const automatic = calculateLocalStar(city, frequency);
  const finalStar = Math.max(automatic, city.starOverrides?.local || 1);
  distribution[finalStar] = (distribution[finalStar] || 0) + 1;
}
assert.strictEqual(Object.values(distribution).reduce((sum, count) => sum + count, 0), expanded.length);
assert(Object.keys(distribution).every(star => Number(star) >= 1 && Number(star) <= 5));

console.log(`ご当地度再計算テスト: OK（与那国町=${localStar('与那国町')}、白川村=${localStar('白川村')}、分布=${JSON.stringify(distribution)}）`);
