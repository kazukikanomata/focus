# 手順書

## Slack連携

***Slack設定***

- 開発者ポータルからCreate New Appで新しいアプリを作成
- Incoming Webhooksを選択肢、Webhook URLを有効にする。

***Laravel プロジェクト設定***
- .envファイルを開く、設定
- メッセージ用の送信コードの作成
- 呼び出して実行。
  - 疑問:🤔 他のファイルで定義した関数呼び出せるのかな
 
## React連携

結構難しそう。
アールエフェクトさんの設定でやっても良いかも。

<p>URL：https://reffect.co.jp/laravel/laravel9_vite_react/</p>


- ルーティング→ `web.php`
- js/app.jsx→　`jsファイル`を`import`している
- `js/components/⚪︎⚪︎.jsx`は部品。

教材：https://blog.capilano-fw.com/?p=11056

# TOODs
- [ ] ~Slack連携~
- [ ] React連携
- [ ] Google API連携
- [ ] LINE API連携
- [ ] ゴミコード不要なやつを消していく作業
- [ ] viteを理解する
- [ ] 他のファイルで定義した関数を呼び出す方法を探る
- [ ] ログインしているかチェックしていなければ、ログインに遷移させる。
- [ ] クロージャーって何？
- [ ] `navigation.blade.php`が死んでる

laravel ファサード探究
記事：https://reffect.co.jp/laravel/laravel-facade-understanding/
