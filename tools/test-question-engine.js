#!/usr/bin/env node
'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const cities = JSON.parse(fs.readFileSync(path.join(root, 'cities.json'), 'utf8'));

function between(startText, endText){
  const start = source.indexOf(startText);
  const end = source.indexOf(endText, start);
  assert(start >= 0 && end > start, `${startText} の監査対象を抽出できません`);
  return source.slice(start, end);
}

// 情報量0の質問しか残っていない場合、無意味な質問を選ばず推測へ移る。
const entropyPickSource = between('function entropyPick(){', 'function labelFor(');
assert(
  entropyPickSource.includes('if(candidateQuestions.length === 0) return null;'),
  '情報量0質問のフォールバックが復活しています',
);
assert(
  !entropyPickSource.includes('if(candidateQuestions.length === 0) return unused[0]'),
  '情報量0のunused質問を出題してはいけません',
);

// 同じ回答イベントが二重に届いても、回答ログ・スコア・質問数を二重更新しない。
const answerSource = between('function answer(key, val, weight){', 'function renderGuess(){');
assert(
  answerSource.includes('pendingSnapshot.key !== key') &&
  answerSource.includes('answerLog.length !== history.length - 1'),
  '現在の未回答質問だけを受理するガードがありません',
);

// 「わからない」救済と絶対上限を固定する。
assert(source.includes('const UNKNOWN_EXTRA_Q_MAX = 10;'), 'わからない救済上限が変わっています');
assert(source.includes('const ABSOLUTE_MAX_Q = 50;'), '質問の絶対上限が変わっています');
assert(source.includes("if(phase === 'extra') return MAX_EXTRA_Q;"), '追加質問を5問に固定できていません');

// 8地方の総当たりを禁止するハード制限を固定する。
assert(source.includes('const BROAD_REGION_MAX_PER_GAME = 1;'), '8地方質問の回数上限が変わっています');
assert(source.includes('const BROAD_REGION_MIN_QUESTIONS = 3;'), '8地方質問の開始時期が変わっています');
assert(source.includes('const BROAD_REGION_MIN_YES_RATIO = 0.25;'), '8地方質問の最大勢力比率が変わっています');

// 「おらっちに教える」は市・区だけでなく町村も全件照合できること。
assert(source.includes('placeholder="市区町村名(例: 札幌市)"'), '訂正フォームが市区町村入力であることを明示できていません');
const cityFinderSource = between('function findCityByPrefAndFreeText(pref, cityText){', 'function submitCorrection(){');
const findCity = vm.runInNewContext(`(${cityFinderSource.trim()})`, {
  CITIES: cities,
  displayName: city => city.name.replace(/（[^）]+）$/, ''),
});
for(const [pref, name] of [['北海道', '遠軽町'], ['岐阜県', '白川村'], ['沖縄県', '与那国町']]){
  const match = findCity(pref, name);
  assert(match && match.pref === pref && match.name === name, `おらっちに教えるで${pref}${name}を特定できません`);
}
// 全1,741自治体について、正式名称の自然入力と、県内で一意な場合の市区町村省略入力を検査する。
const playableCities = cities.filter(city => city.name !== '東京');
const naturalName = city => city.name.replace(/（[^）]+）$/, '');
const coreName = city => naturalName(city).replace(/[市区町村]$/, '');
for(const city of playableCities){
  assert.equal(findCity(city.pref, naturalName(city)), city, `${city.pref}${naturalName(city)}の正式名称入力が別自治体へ一致します`);
  const sameCore = playableCities.filter(candidate => candidate.pref === city.pref && coreName(candidate) === coreName(city));
  const coreMatch = findCity(city.pref, coreName(city));
  if(sameCore.length === 1) assert.equal(coreMatch, city, `${city.pref}${coreName(city)}の省略入力を特定できません`);
  else assert.equal(coreMatch, null, `${city.pref}${coreName(city)}は複数候補なのに自動決定されています`);
}
assert.equal(findCity('広島県', '府中'), null, '広島県の「府中」は府中市・府中町があるため自動決定してはいけません');

console.log('Internal question engine regression tests passed.');
