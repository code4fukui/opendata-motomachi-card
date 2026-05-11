# opendata-motomachi-card


このリポジトリは、日本の函館にある歴史的な元町配水場に関するオープンデータを提供します。

1889年に設立された元町配水場は、横浜に次いで日本で2番目の近代水道です。日本人が初めて完全に設計・監督したものです。当時建設された「中区配水池」は、120年以上の歳月を経過した現在もその役割を果たす現役では日本最古の配水池です。

> 元町配水場は、明治２２年(1889)、横浜に次いで日本で2番目の近代水道として誕生しました。日本人が初めて設計・監督し、この時に建設された「中区配水地」は、120年以上の歳月を経過した現在もその役割を果たす現役では日本最古の配水地です。

## デモ

- **[元町配水場WebCard一覧 (Motomachi Water Distribution Plant WebCard Gallery)](https://code4fukui.github.io/opendata-motomachi-card/)**

デモサイトでは、歴史的な「WebCard」のギャラリーを表示します。各カードには、写真、タイトル、詳細な説明、および配水場の歴史に関連するカテゴリが掲載されています。

## データ

### メインデータファイル
- **[motomachi-card.csv](motomachi-card.csv)**

各歴史カードに関する情報を含む包括的なCSVファイルです。このファイルは、元の `cards.json` と `cardsets.json` ファイルのデータを結合して生成されます。各カードを対応する写真、説明、およびテーマセットにリンクします。

### 写真
関連するすべての歴史的な写真は `photo/` ディレクトリにダウンロードされ、`photo_id`（例：`01-01.jpg`）で名前が付けられます。

## データの再生成方法

データ処理スクリプトを実行するにはDenoが必要です。

1.  **ソースJSONファイルをダウンロードする:**
    ```bash
    # cards.json、photos.json、およびcardsets.jsonをdata/ディレクトリに取得します
    deno run --allow-net --allow-write download_json.js
    ```

2.  **関連するすべての写真をダウンロードする:**
    ```bash
    # data/photos.jsonにリストされている画像をphoto/ディレクトリにダウンロードします
    deno run --allow-net --allow-read --allow-write download_photos.js
    ```

3.  **最終的なCSVファイルを生成する:**
    ```bash
    # data/cards.jsonとdata/cardsets.jsonを結合してmotomachi-card.csvを作成します
    deno run --allow-read --allow-write make_csv.js
    ```

## データソースと帰属

このデータセットは、公立はこだて未来大学が開発し、函館市企業局が協力した「WebCard 函館市企業局 元町配水場」プロジェクトに基づいています。

-   **シリーズ:** 函館市企業局 元町配水場 (Hakodate City Enterprise Bureau, Motomachi Water Distribution Plant)
-   **監修・資料提供:** 函館市企業局 (Hakodate City Enterprise Bureau)
-   **オリジナルWebCardアプリケーション:** [WebCard 函館市企業局 元町配水場](https://sslab.c.fun.ac.jp/webcard/motomachi/)
-   **ソースJSONファイル:**
    -   `https://sslab.c.fun.ac.jp/webcard/motomachi/data/cards.json`
    -   `https://sslab.c.fun.ac.jp/webcard/motomachi/data/photos.json`
    -   `https://sslab.c.fun.ac.jp/webcard/motomachi/data/cardsets.json`
-   **関連情報:**
    -   [函館市元町配水場WebCardについて（改定版）(PDF)](https://www.city.hakodate.hokkaido.jp/docs/2014022500477/file_contents/WebCard.pdf)
    -   [函館市オープンデータポータル | 函館市 (Hakodate City Open Data Portal)](https://www.city.hakodate.hokkaido.jp/docs/2016072200055/)

## ライセンス

[LICENSE](LICENSE)
