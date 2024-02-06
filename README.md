# LinkRecorder

LinkRecorderは、ユーザのページ遷移を記録した後に、Markdown形式のパンくずリストをクリップボードにコピーするChrome拡張機能である。

# 拡張機能のインストール方法

chrome ウェブストアからインストールする方法と、GitHubにあるコードからインストールする方法の2種類がある。
後者は開発者向けの方法のため、通常はchrome ウェブストアからインストールすること(インストールが簡単)。

## chrome ウェブストアからインストール (一般利用者向け：通常はこちらを利用すること)

[TBD] [chrome ウェブストア](https://chrome.google.com/webstore/detail/xxxxxxxxxx) にアクセスし、「Chromeに追加」ボタンをクリックする。

## GitHubにあるコードからインストール (開発者向け)

1. https://github.com/sattoke/LinkRecorder をgitでcloneするか、当該URLの「Code」ボタンをクリックすると出てくる「Download ZIP」でダウンロードし、ZIPを適当なところに展開する。
1. Chromeのアドレスバーに `chrome://extensions/` と入力するか、Chromeのメニュー（ケバブメニュー）から、「設定」→「拡張機能」と選択することで拡張機能の管理画面を開く
1. 「パッケージ化されていない拡張機能を読み込む」ボタンをクリックし、出てくるダイアログでローカルにcloneまたはダウンロードして展開したLinkRecorderのフォルダ(manifest.jsonが含まれるフォルダ)を指定する。
1. 正常にインストールされれば拡張機能の管理画面に「LinkRecorder」が表示される。

# 初期設定

現段階では初期設定は不要である。

# 使用方法

1. 任意のページで右クリックすると出てくる「LinkRecorder」メニューのサブメニューから、「Start recording」または「Start recording with current page」をクリックするとリンクの記録が開始する。
1. 通常通りリンクをクリックして任意のページへの遷移を繰り返す。
1. 任意のページで右クリックすると出てくる「LinkRecorder」メニューのサブメニューから、「Stop recording」をクリックするとリンクの記録が終了し、それと共にクリップボードにMarkdown形式のパンくずリストがクリップボードにコピーされる。本拡張機能におけるパンくずリストは `[リンク元におけるA要素のテキストコンテント1](https://example.com/link1) > [リンク元におけるA要素のテキストコンテント2](https://example.com/link2)` のような形式である。

# リソース

- アイコンは下記の [icon rainbow](https://icon-rainbow.com/) の素材を使用。
  - [プレッツェルの無料アイコン素材 2 | 商用可の無料(フリー)のアイコン素材をダウンロードできるサイト『icon rainbow』](https://icon-rainbow.com/%e3%83%97%e3%83%ac%e3%83%83%e3%83%84%e3%82%a7%e3%83%ab%e3%81%ae%e7%84%a1%e6%96%99%e3%82%a2%e3%82%a4%e3%82%b3%e3%83%b3%e7%b4%a0%e6%9d%90-2/)
    - colorは `rgb(182, 110, 15)`
