'use strict';

// Capacitor等のネイティブWebView用。Web版にはこのファイルを含めない。
window.ORAMACHI_RUNTIME = Object.freeze({
  target: 'native',
  ads: false,
  analytics: false,
  serviceWorker: false,
  installPrompt: false,
  publicUrl: 'https://oramachi-jp.com/'
});

function attachAndroidBackButton() {
  const capacitor = window.Capacitor;
  const nativeApp = capacitor && capacitor.Plugins && capacitor.Plugins.App;
  if (
    !capacitor ||
    typeof capacitor.getPlatform !== 'function' ||
    capacitor.getPlatform() !== 'android' ||
    !nativeApp ||
    typeof nativeApp.addListener !== 'function'
  ) {
    return;
  }

  Promise.resolve(nativeApp.addListener('backButton', async () => {
    let handled = false;
    try {
      const nativeStart = window.oramachiNativeStart;
      if (
        nativeStart &&
        typeof nativeStart.isVisible === 'function' &&
        nativeStart.isVisible() &&
        typeof nativeStart.dismiss === 'function'
      ) {
        nativeStart.dismiss();
        return;
      }
      const navigation = window.oramachiBackNavigation;
      handled = Boolean(
        navigation &&
        typeof navigation.requestBack === 'function' &&
        navigation.requestBack()
      );
    } catch (error) {
      console.warn('おらマチ: 戻る操作を処理できませんでした。', error);
    }

    if (!handled && typeof nativeApp.exitApp === 'function') {
      try {
        await nativeApp.exitApp();
      } catch (error) {
        console.warn('おらマチ: アプリを終了できませんでした。', error);
      }
    }
  })).catch((error) => {
    console.warn('おらマチ: Androidの戻る操作を登録できませんでした。', error);
  });
}

function deliverAppUrl(url) {
  if (typeof url !== 'string' || !url) return;
  window.oramachiPendingAppUrl = url;
  if (typeof window.oramachiHandleAppUrl === 'function') {
    window.oramachiHandleAppUrl(url);
  }
}

function attachAndroidAppLinks() {
  const capacitor = window.Capacitor;
  const nativeApp = capacitor && capacitor.Plugins && capacitor.Plugins.App;
  if (
    !capacitor ||
    typeof capacitor.getPlatform !== 'function' ||
    capacitor.getPlatform() !== 'android' ||
    !nativeApp
  ) {
    return;
  }

  if (typeof nativeApp.addListener === 'function') {
    Promise.resolve(nativeApp.addListener('appUrlOpen', (event) => {
      deliverAppUrl(event && event.url);
    })).catch((error) => {
      console.warn('おらマチ: アプリへのリンクを登録できませんでした。', error);
    });
  }

  if (typeof nativeApp.getLaunchUrl === 'function') {
    Promise.resolve(nativeApp.getLaunchUrl()).then((event) => {
      deliverAppUrl(event && event.url);
    }).catch((error) => {
      console.warn('おらマチ: 起動時のリンクを確認できませんでした。', error);
    });
  }
}

function createNativeShell() {
  if (typeof document === 'undefined' || !document.body) return;
  document.body.classList.add('native-app');
  const stage = document.getElementById('stage');
  if (!stage || document.getElementById('nativeTabBar')) return;

  const nav = document.createElement('nav');
  nav.id = 'nativeTabBar';
  nav.className = 'native-tab-bar';
  nav.setAttribute('aria-label', 'アプリのメインメニュー');
  nav.innerHTML = [
    '<button class="native-tab-button" type="button" data-native-tab="home" disabled><span class="native-tab-icon" aria-hidden="true"><img src="native-tab-home.png" alt=""></span><span>ホーム</span></button>',
    '<button class="native-tab-button" type="button" data-native-tab="play" disabled><span class="native-tab-icon" aria-hidden="true"><img src="native-tab-play.png" alt=""></span><span>あそぶ</span></button>',
    '<button class="native-tab-button" type="button" data-native-tab="collection" disabled><span class="native-tab-icon" aria-hidden="true"><img src="native-tab-record.png" alt=""></span><span>図鑑</span></button>',
    '<button class="native-tab-button" type="button" data-native-tab="record" disabled><span class="native-tab-icon" aria-hidden="true"><img src="native-tab-settings.png" alt=""></span><span>戦績</span></button>'
  ].join('');
  document.body.appendChild(nav);

  const buttons = Array.from(nav.querySelectorAll('[data-native-tab]'));
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const tabs = window.oramachiNativeTabs;
      if (!tabs || typeof tabs.open !== 'function') return;
      tabs.open(button.getAttribute('data-native-tab'));
    });
  });

  const logo = document.querySelector('.logo-wrap');
  if (logo) {
    logo.addEventListener('click', (event) => {
      const tabs = window.oramachiNativeTabs;
      if (!tabs || typeof tabs.open !== 'function') return;
      event.preventDefault();
      tabs.open('home');
    });
  }

  window.oramachiNativeShell = Object.freeze({
    setState(tab, immersive) {
      const knownTabs = new Set(['home', 'play', 'collection', 'record']);
      const activeTab = knownTabs.has(tab) ? tab : 'home';
      document.body.classList.toggle('native-immersive', Boolean(immersive));
      document.body.classList.toggle('native-home-active', activeTab === 'home' && !immersive);
      buttons.forEach((button) => {
        button.disabled = false;
        if (button.getAttribute('data-native-tab') === activeTab) {
          button.setAttribute('aria-current', 'page');
        } else {
          button.removeAttribute('aria-current');
        }
      });
    }
  });
  const pendingState = window.ORAMACHI_PENDING_NATIVE_STATE;
  if (pendingState) {
    window.oramachiNativeShell.setState(pendingState.tab, pendingState.immersive);
    window.ORAMACHI_PENDING_NATIVE_STATE = null;
  }
}

// V57: 起動画面を「第13回デイリーチャレンジ画面デザイン案」参考画像②の指示
// （新しいロゴに変更／写真カルーセルなし／歩き回るおらっちのアニメーションなし）
// に合わせて、静的でシンプルなスプラッシュへ全面刷新。
// ボタンは参考画像に存在しないため描画しないが、タップでのスキップは残し、
// 約1.5秒の表示後は自動でホーム画面へフェード遷移する（ユーザーを待たせすぎず、
// かつ唐突な画面切り替えにならないようにするための実装判断）。
function createNativeStartScreen() {
  if (typeof document === 'undefined' || !document.body || document.getElementById('nativeStartScreen')) {
    return;
  }

  const screen = document.createElement('section');
  screen.id = 'nativeStartScreen';
  screen.className = 'native-start-screen';
  screen.setAttribute('role', 'dialog');
  screen.setAttribute('aria-modal', 'true');
  screen.setAttribute('aria-labelledby', 'nativeStartTitle');
  screen.innerHTML = [
    '<div class="native-start-reveal">',
    '  <div class="native-start-mountains" aria-hidden="true">',
    '    <span class="native-start-mountain-back"></span>',
    '    <span class="native-start-mountain-front"></span>',
    '  </div>',
    '  <div class="native-start-brand" aria-label="おらマチ まちをあてる地理ゲーム">',
    '    <img class="native-start-logo" src="native-start-logo.png" alt="おらマチ まちをあてる地理ゲーム">',
    '    <h1 id="nativeStartTitle" class="native-start-visually-hidden">おらマチ まちをあてる地理ゲーム</h1>',
    '  </div>',
    '</div>'
  ].join('');

  document.body.classList.add('native-starting');
  document.body.appendChild(screen);

  let leaving = false;
  let autoTimer = 0;

  function dismiss() {
    if (leaving) return;
    leaving = true;
    window.clearTimeout(autoTimer);
    screen.removeEventListener('click', dismiss);
    screen.classList.add('is-leaving');
    document.body.classList.remove('native-starting');
    window.setTimeout(() => screen.remove(), 360);
  }

  // タップでいつでもスキップできるようにしつつ、ロゴを一定時間見せた後は
  // 自動的にホームへ進める（参考画像にボタンは描かれていないための対応）。
  screen.addEventListener('click', dismiss);

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      if (leaving || !screen.isConnected) return;
      screen.classList.add('is-ready');
    });
  });

  autoTimer = window.setTimeout(dismiss, 1600);

  window.oramachiNativeStart = Object.freeze({
    isVisible() {
      return screen.isConnected && !leaving;
    },
    dismiss
  });
}

function initializeNativeApp() {
  createNativeShell();
  createNativeStartScreen();
  attachAndroidBackButton();
  attachAndroidAppLinks();
}

window.addEventListener('DOMContentLoaded', initializeNativeApp, { once: true });
