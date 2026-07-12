# おらマチ 独自ドメイン・広告導入手順

## 1. 独自ドメイン `oramachi-jp.com`

1. ドメイン管理会社で `oramachi-jp.com` を取得します。
2. GitHubの `oramachi` リポジトリを開き、`Settings` → `Pages` → `Custom domain` に `oramachi-jp.com` を入力して保存します。
3. ドメイン管理会社のDNSに、ルートドメイン用のAレコードを4件登録します。

```text
@  A  185.199.108.153
@  A  185.199.109.153
@  A  185.199.110.153
@  A  185.199.111.153
```

4. `www` も使えるように、次のCNAMEレコードを登録します。

```text
www  CNAME  jill-stingray1995.github.io
```

5. GitHub Pages側でDNS確認後、`Enforce HTTPS`をONにします。DNS反映には時間がかかる場合があります。
6. `https://oramachi-jp.com/` と `https://www.oramachi-jp.com/` の両方を開き、一方がもう一方へ転送されることを確認します。

## 2. Google AdSense

1. 独自ドメインの表示とHTTPSが安定してからAdSenseに登録し、サイトとして `oramachi-jp.com` を追加します。
2. AdSense管理画面が発行したコードを、公開する各HTMLの `<head>` 内に貼り付けます。架空の `ca-pub-...` は使用しません。
3. 審査通過後、まずは自動広告で表示位置を確認するか、ゲーム操作を邪魔しない場所に広告ユニットを設置します。
4. EEA・英国・スイス向けには、AdSenseの「プライバシーとメッセージ」からGoogle認定CMPの同意メッセージを設定します。
5. AdSenseから提示された行を使い、リポジトリ直下に `ads.txt` を作成します。例のPublisher IDをそのまま使わず、自分のIDへ置き換えます。

```text
google.com, pub-あなたのPublisherID, DIRECT, f08c47fec0942fa0
```

公開後、`https://oramachi-jp.com/ads.txt` にアクセスして内容が表示されることを確認します。

## 3. アフィリエイト広告

1. A8.net、バリューコマース等へ登録し、掲載したい案件と提携します。
2. ゲーム内容と関係のある商品・サービスだけを少数掲載します。例：旅行予約、地図・地理本、ご当地品。
3. 各リンクのすぐ近くに、見落としにくい `PR` または `広告` 表示を付けます。プライバシーポリシーへの記載だけで済ませないでください。
4. リンク先の価格や条件を断定せず、「最新情報はリンク先で確認」と添えます。

使用例：

```html
<div class="affiliate-box">
  <span class="affiliate-label">PR</span>
  <p>おらマチを遊んだあとの旅行探しに。</p>
  <a href="ここにASP発行のURL" target="_blank" rel="sponsored noopener noreferrer">
    旅行プランを確認する
  </a>
</div>
```

## 4. 公開前チェック

- `privacy.html` の内容が、実際に導入したサービスと一致している
- アフィリエイトリンクの近くに `PR` または `広告` が見える
- 広告が「はい」「いいえ」などの操作ボタンに重ならない
- 自分で広告をクリックしない
- `CNAME`、AdSenseコード、`ads.txt`を誤って削除していない
