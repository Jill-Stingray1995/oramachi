#!/usr/bin/env node
/**
 * 【使い方】GitHubにアップする前に、このフォルダで一度だけ実行する:
 *
 *     node bump-version.js
 *
 * 【何をするもの?】
 * index.html の中の
 *     <script src="app.js?v=20260716a">
 *     <link rel="stylesheet" href="style.css?v=20260716a">
 * の「?v=◯◯」の部分を、ファイルの中身から計算した値へ自動で書き換える。
 *
 * 【なぜ必要?】
 * ブラウザは一度読み込んだ app.js / style.css をしばらく保存(キャッシュ)して使い回す。
 * URLが前と同じままだと「変わっていない」と判断して、古いファイルを使い続けてしまう。
 * これが「GitHubに上げたのにページが更新されない」の正体。
 * ?v= の値が変われば別のURL扱いになるので、ブラウザは必ず新しいファイルを取りに行く。
 *
 * 【中身から計算する理由】
 * 日付を手で書き換える方式だと、書き換え忘れたときに古いままになってしまう。
 * ファイルの中身から計算すれば、中身が1文字でも変われば値も自動で変わり、
 * 逆に中身が変わっていなければ値も変わらない(=無駄な再ダウンロードが起きない)。
 */
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const DIR = __dirname;
const INDEX = path.join(DIR, 'index.html');

// ファイルの中身から短いハッシュ値(指紋のようなもの)を作る
function hashOf(file){
  const full = path.join(DIR, file);
  if(!fs.existsSync(full)){
    console.error(`  ✗ ${file} が見つかりません`);
    process.exit(1);
  }
  return crypto.createHash('sha1').update(fs.readFileSync(full)).digest('hex').slice(0, 10);
}

let html = fs.readFileSync(INDEX, 'utf-8');
let changed = 0;

// 対象: index.html から読み込んでいる自前のファイル
const TARGETS = ['app.js', 'style.css'];

for(const file of TARGETS){
  const v = hashOf(file);
  // href="style.css?v=..." / src="app.js?v=..." の両方に対応。?v= が無い場合も付ける。
  const re = new RegExp(`((?:src|href)=")${file.replace('.', '\\.')}(\\?v=[^"]*)?(")`, 'g');
  let hit = 0;
  html = html.replace(re, (m, pre, oldQuery, post) => {
    hit++;
    const oldV = oldQuery ? oldQuery.slice(3) : '(なし)';
    if(oldV !== v){ changed++; console.log(`  ${file}: ${oldV} -> ${v}`); }
    else { console.log(`  ${file}: ${v} (変更なし)`); }
    return `${pre}${file}?v=${v}${post}`;
  });
  if(hit === 0) console.warn(`  ! index.html に ${file} の読み込みが見つかりませんでした`);
}

fs.writeFileSync(INDEX, html);
console.log(changed > 0
  ? `\n完了: ${changed}件を更新しました。index.html も一緒にGitHubへアップしてください。`
  : '\n完了: 中身に変更が無かったので、バージョンはそのままです。');
