#!/usr/bin/env node
'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const projectRoot = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(projectRoot, 'app.js'), 'utf8');
const editorSource = fs.readFileSync(path.join(projectRoot, 'editor.html'), 'utf8');

function sourceBetween(startMarker, endMarker){
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker, start + startMarker.length);
  assert(start >= 0, `開始位置が見つかりません: ${startMarker}`);
  assert(end > start, `終了位置が見つかりません: ${endMarker}`);
  return source.slice(start, end);
}

function testStaticRegressions(){
  assert(!source.includes("onclick=\"shareGiveUpResult('${correctCityLabel"), '自由入力をonclickへ埋め込んではいけません');
  assert(source.includes('giveUpShareBtn.addEventListener'), '自由入力を渡す共有ボタンはイベントリスナーを使います');
  assert(source.includes('normalizeLiveStatsPayload(data)'), '統計APIレスポンスの検証が必要です');
  assert(source.includes('recent.map(escapeHtml).join'), '最近の自治体名はHTMLエスケープが必要です');
  assert(source.includes('return normalizeConquestData(parsed.data.conquest, true);'), 'インポートデータの正規化が必要です');
  assert(source.includes('const normalized = normalizeDailyChallengeData(parsed);'), 'デイリー履歴の正規化が必要です');
  assert(source.includes('title="${escapeHtml(h.themeText || \'\')}"'), 'デイリーのお題文はHTMLエスケープが必要です');
  assert(source.includes("${escapeHtml(h.date.slice(5).replace('-', '/'))}"), 'デイリーの日付はHTMLエスケープが必要です');
  assert(!source.includes('stats-period-tabs">${periodTabs}'), '未実装の期間タブを公開してはいけません');
  assert(source.includes('<p class="stats-period-note">集計期間: 累計</p>'));
  assert(editorSource.includes("document.addEventListener('pointerdown'"), '編集画面にIME確定前保存の防止処理がありません');
  assert(editorSource.includes("if(isTextControl && typeof active.blur === 'function') active.blur();"), '編集画面の保存操作前に日本語IMEを確定していません');
  assert(
    source.indexOf('evaluateDailyChallengeResult(totalQuestions);') < source.indexOf('const dailyChallengeHtml ='),
    'デイリー達成判定は結果HTML生成より前でなければなりません',
  );

  const openingSource = sourceBetween('function renderOpening(){', '// ==================== 全国制覇帳 画面');
  assert.match(openingSource, /mode-btn mode-btn-primary" onclick="startMode\('all'\)"/);
  assert.match(openingSource, /入門版（県庁所在地・東京23区）/);
  assert.match(openingSource, /onclick="startMode\('capitals'\)"/);
}

function testLiveStatsNormalizer(){
  const helpers = sourceBetween('function safeApiNumber(', 'async function fetchLiveStats(){');
  const cities = [
    { pref: '東京都', name: '新宿区' },
    { pref: '新潟県', name: '十日町市' },
  ];
  const sandbox = {
    CITIES: cities,
    displayName: city => city.name,
    result: null,
  };
  vm.createContext(sandbox);
  vm.runInContext(`${helpers}
    result = normalizeLiveStatsPayload({
      totalPlays: 500,
      todayPlays: 2,
      todayVisitors: 1,
      recentSuccesses: ['<img src=x onerror="globalThis.xss=1">'],
      statsDetail: {
        overallAccuracy: 53,
        overallAvgQuestions: 16,
        minSampleSize: 10,
        hardestCities: [
          { pref: '<svg onload=xss()>', name: '不正', accuracy: 1, avgQuestions: 99 },
          { pref: '新潟県', name: '十日町市', accuracy: 45, avgQuestions: 21 },
        ],
        easiestCities: [],
        mostQuestionsCities: [],
        fewestQuestionsCities: [],
      },
    });
  `, sandbox);

  assert.equal(sandbox.result.totalPlays, 500);
  assert.equal(sandbox.result.recentSuccesses.length, 1);
  assert.equal(sandbox.result.statsDetail.hardestCities.length, 1);
  assert.equal(sandbox.result.statsDetail.hardestCities[0].name, '十日町市');
  assert.equal(sandbox.xss, undefined);
}

function testConquestNormalizer(){
  const helper = sourceBetween('function normalizeConquestData(', '// ==================== localStorage: 設定');
  const sandbox = {
    CITIES: [{ pref: '新潟県', name: '十日町市' }],
    MODES: { all: {}, capitals: {} },
    CONQUEST_VERSION: 1,
    cityId: city => `${city.pref}::${city.name}`,
    displayName: city => city.name,
    migrateCityIdKeys: () => false,
    mergeConquestEntries: (a, b) => a || b,
    result: null,
  };
  vm.createContext(sandbox);
  vm.runInContext(`${helper}
    result = normalizeConquestData({
      version: 1,
      entries: {
        '新潟県::十日町市': {
          id: '新潟県::十日町市',
          name: '<img src=x onerror="globalThis.xss=1">',
          pref: '<svg onload="globalThis.xss=2">',
          firstAt: '2026-01-01T00:00:00.000Z',
          lastAt: '2026-01-02T00:00:00.000Z',
          count: 1,
          minQuestions: 10,
          modes: ['all']
        }
      }
    }, true);
  `, sandbox);

  assert.equal(sandbox.result.ok, true);
  const entry = sandbox.result.conquest.entries['新潟県::十日町市'];
  assert.equal(entry.name, '十日町市');
  assert.equal(entry.pref, '新潟県');
  assert.equal(sandbox.xss, undefined);
}

function testDailyChallengeEvaluation(){
  const helper = sourceBetween('function evaluateDailyChallengeResult(', 'function startDailyChallenge(){');
  const sandbox = {
    dailyChallengeResult: null,
    dailyChallengeActive: { id: 'test', text: '20問以内', type: 'condition', condition: 'within20' },
    answerLog: [],
    recordDailyChallengeCompletion: () => ({ justAchieved: true, streak: 1, isNewStreakMilestone: false }),
    result20: null,
    result21: null,
  };
  vm.createContext(sandbox);
  vm.runInContext(`${helper}
    evaluateDailyChallengeResult(20);
    result20 = dailyChallengeResult;
    evaluateDailyChallengeResult(21);
    result21 = dailyChallengeResult;
  `, sandbox);
  assert.equal(sandbox.result20.achieved, true);
  assert.equal(sandbox.result21.achieved, false);
}

function testDailyChallengeStorageNormalizer(){
  const helper = sourceBetween('function emptyDailyChallengeData(){', '// 日付文字列(YYYY-MM-DD)から');
  const sandbox = {
    DAILY_CHALLENGE_VERSION: 1,
    DAILY_CHALLENGE_STORAGE_KEY: 'oramachi_daily_challenge_v1',
    DAILY_CHALLENGE_THEMES: [
      { id: 'within20', text: '20問以内に当てさせよう', type: 'condition' },
    ],
    localStorage: {
      getItem: () => null,
      setItem: () => {},
    },
    console: { warn: () => {} },
    result: null,
  };
  vm.createContext(sandbox);
  vm.runInContext(`${helper}
    result = normalizeDailyChallengeData({
      version: 1,
      completedDates: ['2026-07-29', '<img src=x onerror=xss()>'],
      currentStreak: 999999,
      maxStreak: 999999,
      history: [
        {
          date: '2026-07-29',
          themeId: 'within20',
          themeText: '"><img src=x onerror=xss()>',
          questionCount: 20,
          at: '2026-07-29T01:00:00.000Z'
        },
        {
          date: '2026-01<img src=x onerror=xss()>',
          themeId: 'within20'
        }
      ]
    });
  `, sandbox);
  assert.equal(sandbox.result.completedDates.length, 1);
  assert.equal(sandbox.result.history.length, 1);
  assert.equal(sandbox.result.history[0].themeText, '20問以内に当てさせよう');
  assert.equal(sandbox.result.currentStreak, 1);
  assert.equal(sandbox.result.maxStreak, 1);
}

function testReleaseAllowlist(){
  const distDir = path.join(projectRoot, 'dist-web');
  assert(fs.existsSync(distDir), '先に node tools/build-release.js web を実行してください');
  const forbidden = [
    'editor.html',
    'HANDOFF.md',
    'README.md',
    'research',
    'rollback',
    'staging',
    'tools',
    '.github',
    'htaccess',
    '.htaccess',
  ];
  for(const name of forbidden){
    assert(!fs.existsSync(path.join(distDir, name)), `公開物へ含めてはいけません: ${name}`);
  }
  assert(!fs.existsSync(path.join(distDir, '.htaccess')),
    'XServer Static公開物へHTTP 500の原因になった .htaccess を含めてはいけません');
}

testStaticRegressions();
testLiveStatsNormalizer();
testConquestNormalizer();
testDailyChallengeEvaluation();
testDailyChallengeStorageNormalizer();
testReleaseAllowlist();
console.log('Security, UI, and release regression tests passed.');
