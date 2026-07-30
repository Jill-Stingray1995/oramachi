(function setupOramachiPwa() {
  'use strict';

  const SERVICE_WORKER_URL = '/service-worker.js';
  const SERVICE_WORKER_SCOPE = '/';
  let deferredInstallPrompt = null;
  let waitingWorker = null;
  let reloadRequested = false;
  let didReload = false;
  let updateDismissed = false;
  let updateAppliedPending = false;
  let transientMessage = '';
  let transientTimer = null;
  let installTipOpen = false;
  const observedInstallingWorkers = new WeakSet();
  let hadServiceWorkerController = (
    'serviceWorker' in window.navigator &&
    !!window.navigator.serviceWorker.controller
  );

  function trackPwaEvent(name, params) {
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', name, params || {});
      }
    } catch (error) {
      // 計測失敗でPWA機能を止めない。
    }
  }

  function isStandalone() {
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true
    );
  }

  function isAppleMobileDevice() {
    const ua = window.navigator.userAgent || '';
    return (
      /iphone|ipad|ipod/i.test(ua) ||
      (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1)
    );
  }

  function ensureStatusBanner() {
    let root = document.getElementById('pwaStatus');
    if (root) return root;

    root = document.createElement('div');
    root.id = 'pwaStatus';
    root.className = 'pwa-status';
    root.setAttribute('role', 'region');
    root.setAttribute('aria-label', 'アプリの状態');
    root.hidden = true;

    const message = document.createElement('span');
    message.id = 'pwaStatusMessage';
    message.className = 'pwa-status-message';
    message.setAttribute('role', 'status');
    message.setAttribute('aria-live', 'polite');
    message.setAttribute('aria-atomic', 'true');

    const action = document.createElement('button');
    action.id = 'pwaStatusAction';
    action.className = 'pwa-status-action';
    action.type = 'button';
    action.hidden = true;

    const close = document.createElement('button');
    close.id = 'pwaStatusClose';
    close.className = 'pwa-status-close';
    close.type = 'button';
    close.setAttribute('aria-label', 'お知らせを閉じる');
    close.textContent = '×';

    root.append(message, action, close);
    document.body.appendChild(root);

    close.addEventListener('click', () => {
      if (waitingWorker) updateDismissed = true;
      root.hidden = true;
    });

    function confirmReloadIfGameScreen() {
      const gameScreenOpen = !!(
        window.history.state &&
        window.history.state.oramachiScreen === 'game'
      );
      return (
        !gameScreenOpen ||
        window.confirm('ゲーム画面を開いています。更新すると現在の画面を再読み込みします。今すぐ更新しますか？')
      );
    }

    action.addEventListener('click', () => {
      if (waitingWorker) {
        if (!confirmReloadIfGameScreen()) return;
        reloadRequested = true;
        action.disabled = true;
        action.textContent = '更新中…';
        waitingWorker.postMessage({ type: 'SKIP_WAITING' });
        trackPwaEvent('pwa_update_requested');
        return;
      }
      if (!confirmReloadIfGameScreen()) return;
      window.location.reload();
    });

    return root;
  }

  function renderStatus() {
    const root = ensureStatusBanner();
    const message = document.getElementById('pwaStatusMessage');
    const action = document.getElementById('pwaStatusAction');
    if (!message || !action) return;
    if (installTipOpen) {
      root.hidden = true;
      return;
    }

    if (waitingWorker && !updateDismissed) {
      root.hidden = false;
      message.textContent = '新しいバージョンがあります。';
      action.hidden = false;
      action.disabled = false;
      action.textContent = '更新する';
      return;
    }

    if (updateAppliedPending) {
      root.hidden = false;
      message.textContent = 'アプリの更新が適用されました。再読み込みしてください。';
      action.hidden = false;
      action.disabled = false;
      action.textContent = '再読み込み';
      return;
    }

    if (window.navigator.onLine === false) {
      root.hidden = false;
      message.textContent = 'オフラインです。保存済みのゲームは遊べます。統計・報告の送信は行われません。';
      action.hidden = true;
      return;
    }

    if (transientMessage) {
      root.hidden = false;
      message.textContent = transientMessage;
      action.hidden = true;
      action.disabled = false;
      return;
    }

    root.hidden = true;
    action.hidden = true;
  }

  function showTransientStatus(message, duration) {
    transientMessage = message;
    if (transientTimer) window.clearTimeout(transientTimer);
    renderStatus();
    if (duration) {
      transientTimer = window.setTimeout(() => {
        transientMessage = '';
        renderStatus();
      }, duration);
    }
  }

  function announceWaitingWorker(worker) {
    if (waitingWorker === worker) return;
    waitingWorker = worker;
    updateDismissed = false;
    renderStatus();
    trackPwaEvent('pwa_update_available');
  }

  function watchRegistration(registration) {
    function observeInstallingWorker(worker) {
      if (!worker || observedInstallingWorkers.has(worker)) return;
      observedInstallingWorkers.add(worker);
      const announceIfInstalled = () => {
        if (
          worker.state === 'installed' &&
          window.navigator.serviceWorker.controller
        ) {
          announceWaitingWorker(worker);
        }
      };
      worker.addEventListener('statechange', announceIfInstalled);
      announceIfInstalled();
    }

    if (registration.waiting) {
      announceWaitingWorker(registration.waiting);
    }
    observeInstallingWorker(registration.installing);

    registration.addEventListener('updatefound', () => {
      observeInstallingWorker(registration.installing);
    });
  }

  async function registerServiceWorker() {
    if (!('serviceWorker' in window.navigator)) return;

    try {
      const registration = await window.navigator.serviceWorker.register(
        SERVICE_WORKER_URL,
        { scope: SERVICE_WORKER_SCOPE, updateViaCache: 'none' }
      );
      watchRegistration(registration);
      registration.update().catch(() => {});
    } catch (error) {
      console.warn('おらマチ: オフライン機能を開始できませんでした', error);
    }
  }

  function setupConnectivityStatus() {
    window.addEventListener('offline', () => {
      transientMessage = '';
      renderStatus();
      trackPwaEvent('pwa_offline');
    });
    window.addEventListener('online', () => {
      showTransientStatus('オンラインに戻りました。', 3500);
      trackPwaEvent('pwa_online');
    });
    if (window.navigator.onLine === false) renderStatus();
  }

  function setupInstallButton() {
    const installBtn = document.getElementById('installBtn');
    const installTip = document.getElementById('installTip');
    const installTipClose = document.getElementById('installTipClose');
    if (!installBtn || isStandalone()) return;

    const isAppleMobile = isAppleMobileDevice();
    let previouslyFocused = null;

    function registerInstallTipBack() {
      const api = window.oramachiBackNavigation;
      if (api && typeof api.registerModalClose === 'function') {
        api.registerModalClose(hideInstallTip, { ensureHistoryEntry: true });
      }
    }

    function unregisterInstallTipBack() {
      const api = window.oramachiBackNavigation;
      if (api && typeof api.unregisterModalClose === 'function') {
        api.unregisterModalClose(hideInstallTip);
      }
    }

    function hideInstallTip() {
      unregisterInstallTipBack();
      if (!installTip) return;
      installTip.style.display = 'none';
      installTip.setAttribute('aria-hidden', 'true');
      installTipOpen = false;
      renderStatus();
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus();
      }
    }

    function showInstallTip() {
      if (!installTip) return;
      previouslyFocused = document.activeElement;
      installTip.style.display = 'block';
      installTip.setAttribute('aria-hidden', 'false');
      installTipOpen = true;
      registerInstallTipBack();
      ensureStatusBanner().hidden = true;
      installTip.focus();
    }

    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      deferredInstallPrompt = event;
      installBtn.style.display = 'flex';
      trackPwaEvent('pwa_install_available');
    });

    if (isAppleMobile) installBtn.style.display = 'flex';

    installBtn.addEventListener('click', async () => {
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        const choice = await deferredInstallPrompt.userChoice;
        trackPwaEvent('pwa_install_prompt_result', {
          outcome: choice && choice.outcome ? choice.outcome : 'unknown'
        });
        deferredInstallPrompt = null;
        installBtn.style.display = 'none';
      } else if (isAppleMobile) {
        showInstallTip();
      }
    });

    if (installTipClose) {
      installTipClose.addEventListener('click', hideInstallTip);
    }
    if (installTip) {
      installTip.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') hideInstallTip();
      });
    }

    window.addEventListener('appinstalled', () => {
      installBtn.style.display = 'none';
      hideInstallTip();
      trackPwaEvent('pwa_installed');
    });
  }

  const offlineRetry = document.getElementById('offlineRetry');
  if (offlineRetry) {
    offlineRetry.addEventListener('click', () => window.location.reload());
  }

  if ('serviceWorker' in window.navigator) {
    window.navigator.serviceWorker.addEventListener('controllerchange', () => {
      waitingWorker = null;
      const isFirstController = !hadServiceWorkerController;
      hadServiceWorkerController = true;
      if (isFirstController && !reloadRequested) return;
      if (reloadRequested && !didReload) {
        didReload = true;
        window.location.reload();
        return;
      }
      updateAppliedPending = true;
      renderStatus();
    });
  }

  setupInstallButton();
  setupConnectivityStatus();
  window.addEventListener('load', registerServiceWorker, { once: true });
})();
