'use strict';

/*
 * おらマチ PWA Service Worker
 *
 * - ゲーム本体と案内ページだけを同じリリース単位で保存します。
 * - Google Apps Script、広告、アクセス解析、外部フォント等は対象外です。
 * - CACHE_VERSION と ?v= は bump-version.js が公開前に同期します。
 */
const CACHE_PREFIX = 'oramachi-app-';
const CACHE_VERSION = 'e5ee7c7168e8';
const CACHE_NAME = CACHE_PREFIX + CACHE_VERSION;

// build-release.js がこの配列を読み、公開許可リストとの整合を検査します。
// JSONとしても読めるよう、文字列はダブルクォートで記述してください。
const PRECACHE_URLS = Object.freeze([
  "/",
  "/index.html",
  "/about.html",
  "/features.html",
  "/play-guide.html",
  "/data-policy.html",
  "/faq.html",
  "/privacy.html",
  "/updates.html",
  "/offline.html",
  "/app.js?v=0e8f41a1a2",
  "/style.css?v=9e7d1b315c",
  "/japan-map-data.js?v=361d072efc",
  "/cities.json?v=9911238d2e",
  "/pwa.js?v=ddc9d2e254",
  "/manifest.json?v=cd36fea504",
  "/favicon.ico?v=3aa48721b4",
  "/favicon-16.png?v=7a6f573289",
  "/favicon-32.png?v=153a5af175",
  "/favicon-48.png?v=eb7d4632a4",
  "/favicon-180.png?v=6b36845ab5",
  "/favicon-192.png?v=f16b7e9553",
  "/mascot-normal.png?v=f52e4bfff8",
  "/mascot-think.png?v=f52e4bfff8",
  "/mascot-happy.png?v=f52e4bfff8",
  "/mascot-sad.png?v=f52e4bfff8",
  "/mascot-wink.png?v=f52e4bfff8",
  "/icons/apple-touch-icon.png?v=ce188cf20f",
  "/icons/icon-192.png?v=8c72f7f62e",
  "/icons/icon-512.png?v=86a744aa7a",
  "/icons/icon-maskable-512.png?v=ac05df60ce"
]);

const PRECACHE_SET = new Set(PRECACHE_URLS);
const KNOWN_NAVIGATION_PATHS = new Set(
  PRECACHE_URLS
    .map((value) => new URL(value, self.location.origin))
    .filter((url) => url.pathname === '/' || url.pathname.endsWith('.html'))
    .map((url) => url.pathname)
);
const KNOWN_ASSET_PATHS = new Set(
  PRECACHE_URLS
    .map((value) => new URL(value, self.location.origin))
    .filter((url) => url.pathname !== '/' && !url.pathname.endsWith('.html'))
    .map((url) => url.pathname)
);
const OFFLINE_ALIAS_PATHS = new Set(
  PRECACHE_URLS
    .filter((value) => !value.includes('?'))
    .map((value) => new URL(value, self.location.origin).pathname)
);

function cacheableResponse(response) {
  return response && response.ok && response.type === 'basic';
}

async function cacheKnownNavigation(request) {
  const url = new URL(request.url);
  const cacheKey = url.pathname === '/' ? '/' : url.pathname;
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (cacheableResponse(response)) {
      await cache.put(cacheKey, response.clone());
    }
    return response;
  } catch (error) {
    return (await cache.match('/offline.html')) || Response.error();
  }
}

async function fetchUnknownNavigation(request) {
  try {
    return await fetch(request);
  } catch (error) {
    const cache = await caches.open(CACHE_NAME);
    return (await cache.match('/offline.html')) || Response.error();
  }
}

async function cacheKnownAsset(request) {
  const url = new URL(request.url);
  const exactKey = url.pathname + url.search;
  const isCurrentAsset = PRECACHE_SET.has(exactKey);

  // 更新直後に旧画面が別タブで残っている場合、そのタブが要求する旧hashの資産だけは
  // 直前リリースのcacheからexact URLで返す。新旧をignoreSearchで混ぜることはしない。
  if (!isCurrentAsset) {
    const cacheNames = await caches.keys();
    const previousNames = cacheNames
      .filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
      .reverse();
    for (const name of previousNames) {
      const previous = await caches.open(name);
      const previousMatch = await previous.match(exactKey);
      if (previousMatch) return previousMatch;
    }
    // 任意の偽hashを現行cacheへ保存しない。見つからない旧版URLは通常通信だけ行う。
    return fetch(request);
  }

  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(exactKey);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (cacheableResponse(response)) {
      await cache.put(exactKey, response.clone());
    }
    return response;
  } catch (error) {
    // 画像等はクエリなしの同じリリース資産へだけフォールバックします。
    // app.js / cities.json の版違いを避けるため、全資産でignoreSearchは使いません。
    if (OFFLINE_ALIAS_PATHS.has(url.pathname)) {
      const fallback = await cache.match(url.pathname);
      if (fallback) return fallback;
    }
    return Response.error();
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(CACHE_NAME);
        await cache.addAll(PRECACHE_URLS);
      } catch (error) {
        // 途中までしか入っていないcacheを次回の「直前版」と誤認しないよう清掃する。
        await caches.delete(CACHE_NAME);
        throw error;
      }
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((names) => {
        const previousNames = names.filter(
          (name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME
        );
        // 複数タブの旧画面を壊さないため、直前の1世代だけ残す。
        const namesToDelete = previousNames.slice(0, -1);
        return Promise.all(namesToDelete.map((name) => caches.delete(name)));
      }),
      self.clients.claim()
    ])
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    event.waitUntil(self.skipWaiting());
  }
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      KNOWN_NAVIGATION_PATHS.has(url.pathname)
        ? cacheKnownNavigation(request)
        : fetchUnknownNavigation(request)
    );
    return;
  }

  const exactKey = url.pathname + url.search;
  if (
    PRECACHE_SET.has(exactKey) ||
    KNOWN_ASSET_PATHS.has(url.pathname) ||
    OFFLINE_ALIAS_PATHS.has(url.pathname)
  ) {
    event.respondWith(cacheKnownAsset(request));
  }
});
