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
const cityFinderSource = between('function findCityByPrefAndFreeText(pref, cityText){', '// Android WebViewなどでは');
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
assert.equal(findCity('山梨県', '富士吉田市').name, '富士吉田市', '富士吉田市の正式名を最後まで照合できません');
for(const partial of ['富', '富士', '富士吉']){
  assert.equal(findCity('山梨県', partial), null, `富士吉田市の途中入力「${partial}」を自治体として受理しています`);
}
assert.equal(findCity('山梨県', '富士吉田').name, '富士吉田市', '市を省略した一意な正式地名を照合できません');
assert.equal(findCity('山梨県', '富士河口湖町').name, '富士河口湖町', '富士河口湖町の正式名を最後まで照合できません');
assert.equal(findCity('山梨県', '富士河口湖').name, '富士河口湖町', '町を省略した富士河口湖を照合できません');
for(const partial of ['富士河', '富士河口']){
  assert.equal(findCity('山梨県', partial), null, `富士河口湖町の途中入力「${partial}」を自治体として受理しています`);
}

// 日本語IMEの未確定文字列や途中入力を訂正報告として受理しない。
assert(source.includes('onclick="submitCorrectionAfterIme(event)"'), '訂正送信がIME確定待ちを経由していません');
const imeSubmitSource = between('function submitCorrectionAfterIme(event){', 'function submitCorrection(){');
assert(imeSubmitSource.includes('commitImeThenRun(cityEl, submitBtn'), '訂正送信が共通IME確定処理を経由していません');
const imeCommitSource = between('function commitImeThenRun(inputEl, buttonEl, action){', 'function openQuestionReportModal(key){');
assert(imeCommitSource.includes('inputEl.blur()'), '送信前に日本語IMEを確定していません');
assert(imeCommitSource.includes('requestAnimationFrame'), 'IME確定後の入力値を次の描画で読んでいません');
assert(imeCommitSource.includes("inputEl.addEventListener('compositionend'"), 'IMEの変換確定イベントを待っていません');
assert(imeCommitSource.includes('setTimeout(scheduleRun, 250)'), 'compositionendが来ないWebView向けの安全な待機がありません');
const questionReportModalSource = between('function openQuestionReportModal(key){', '// モーダル内でTabキーによる');
assert(questionReportModalSource.includes("commitImeThenRun(document.getElementById('reportCommentInput'), submitBtn, submitQuestionReport)"), '質問報告コメントがIME確定待ちを経由していません');
const correctionSubmitSource = between('function submitCorrection(){', 'function renderThanks(');
assert(correctionSubmitSource.includes('if(!matched){'), '途中入力・未登録自治体を訂正報告から拒否していません');
assert(correctionSubmitSource.indexOf('if(!matched){') < correctionSubmitSource.indexOf('sendCorrectionToSheet(entry)'), '自治体検証より先に訂正報告を送信しています');
assert(correctionSubmitSource.includes('correctCityId: cityId(matched)'), '訂正報告に確定済み自治体IDを含めていません');
assert(correctionSubmitSource.includes('correctCity: canonicalCity'), '訂正報告の自治体名を正式表示名へ統一していません');
assert(source.includes('list="correctionCityOptions"'), '訂正フォームに都道府県別の正式自治体候補がありません');
assert(source.includes('function updateCorrectionCityOptions(){'), '訂正フォームの自治体候補更新処理がありません');

// 挑戦状の自由入力は、候補リストから自治体IDを確定するまで送信できないこと。
const challengeRenderSource = between('function renderChallengeMode(){', '// 入力欄の内容が変わるたびに');
assert(challengeRenderSource.includes('id="challengeSubmitBtn"') && challengeRenderSource.includes('disabled>これで回答する'), '挑戦状の未確定入力を送信できてしまいます');
const challengeSubmitSource = between('function submitChallengeGuess(){', 'function giveUpChallenge(){');
assert(challengeSubmitSource.includes('!challengeSelectedCityId'), '挑戦状の送信時に確定済み自治体IDを検証していません');

console.log('Internal question engine regression tests passed.');
