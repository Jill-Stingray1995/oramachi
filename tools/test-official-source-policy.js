#!/usr/bin/env node
'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const policy = JSON.parse(fs.readFileSync(path.join(root, 'research', 'official-source-policy.json'), 'utf8'));
assert(policy.principles.length >= 5, '公的データ優先原則が不足しています');
assert(policy.sourceGroups.length >= 7, '公的データの対象分野が不足しています');
for(const source of policy.sourceGroups){
  assert(source.authority, `${source.id}: 所管機関がありません`);
  assert(/^https:\/\/[^/]*\.go\.jp\//.test(source.officialUrl), `${source.id}: 国の公式URLではありません`);
  assert(source.tags.length, `${source.id}: 対象タグがありません`);
  assert(['enforced', 'partially_enforced', 'official_source_required'].includes(source.status), `${source.id}: 状態が不正です`);
  if(source.status === 'enforced'){
    assert(source.referenceDate, `${source.id}: 基準日がありません`);
    assert(fs.existsSync(path.join(root, source.generator)), `${source.id}: 生成プログラムがありません`);
    assert(fs.existsSync(path.join(root, source.auditArtifact)), `${source.id}: 監査証拠がありません`);
    assert(fs.existsSync(path.join(root, source.regressionTest)), `${source.id}: 回帰テストがありません`);
  }
  if(source.status === 'partially_enforced'){
    assert(source.referenceDate, `${source.id}: 基準日がありません`);
    assert(source.enforcedTags?.length, `${source.id}: 強制対象タグがありません`);
    for(const generator of source.generators || []) assert(fs.existsSync(path.join(root, generator)), `${source.id}: 生成プログラムがありません`);
    for(const artifact of source.auditArtifacts || []){
      // 長時間の空間照合中もポリシー自体は検査できるよう、成果物の存在はタグ完全一致テスト側で強制する。
      assert(typeof artifact === 'string' && artifact.startsWith('research/'), `${source.id}: 監査証拠パスが不正です`);
    }
    assert(fs.existsSync(path.join(root, source.regressionTest)), `${source.id}: 回帰テストがありません`);
  }
}
const railway = policy.sourceGroups.find(source => source.id === 'mlit_railway');
assert.equal(railway.status, 'enforced');
assert(railway.tags.includes('private_railway'));
assert(railway.tags.includes('no_railway_station'));
console.log('公的データ優先ポリシー検証: OK');
