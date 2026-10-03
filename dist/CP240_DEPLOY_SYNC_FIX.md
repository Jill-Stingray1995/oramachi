# CP240 Deploy Sync Fix

実機スクリーンショットで、CP239の監査ログと本番Webの質問列が一致しない反例を確認したため、CP239のRELEASE認定を撤回。

原因としてCP239パッケージに以下の版同期不備を実確認した。
- `dist-web/index.html` が `app.js?v=cp236` のまま
- `service-worker.js` の `CACHE_VERSION` が `cp236-terminal-lane-repair` のまま
- Service Worker precacheのapp.js URLもCP239/CP237の実体と同期していなかった
- `app-version.js` が `CP232` のまま
- CP237/CP239のapp.js SHA-256はCP236と異なるのに上記識別子が更新されていなかった

CP240ではselector本体を変更せず、配信経路だけを修正。
- app.js URLを `app.js?v=cp240-87da8fd8b7` に更新
- SW cacheを `cp240-deploy-sync` に更新
- SW precache app.js URLを同じCP240 URLへ統一
- app-versionをCP240へ更新
- HTML navigationをnetwork-firstに変更（オフライン時のみcache fallback）
- install成功後にskipWaiting

目的: まず監査したselectorとブラウザで動くselectorを同一にし、十日町市の実プレイで監査ログ相当のHuman/Implicit openingが出るか検証する。
