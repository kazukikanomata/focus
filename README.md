<p align="center">
<a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a>
</p>

## プロジェクト名 : Focus

<p>Laravelにてタスク管理ができる。Webアプリをつくりました。</p>

<p>Youtube:　https://youtu.be/6ovQ1A9Y3Pk</p> 

## 技術
<ul>
    <li> Laravel 9</li>
    <li> MySQL8 </li>
    <li> PHP 8.1.2 </li>
    <li> Breeze </li>
    <li> TailWindCSS DaisyUI</li>
</ul>

## 静的解析ツールとFormatter

Laravel Pint
※ vendorのあるディレクトまで移動

- コードを自動整形する

```
$ ./vendor/bin/pint
```

- 修正箇所だけを教えてくれる

```
$ ./vendor/bin/pint --test
```

特定のディレクトリを指定して修正
  
```
$ ./vendor/bin/pint app/Console
```

[Larastan](https://github.com/larastan/larastan)

Laravelに特化した静的解析ツール。

使い方
実行方法
※　venderのあるディレクトリに移動

```
./vendor/bin/phpstan analyse
```

メモリが疲れているとでたら
```
./vendor/bin/phpstan analyse --memory-limit=2G
```

[Prettier](https://prettier.io/docs/install)

実行方法

```
$ npx prettier . --write
```



## インフラ周り
<ul>
    <li> Docker </li>
    <li> Laravel forge ✖︎ ConoHa VPS </li>
</ul>


## 目的

<p>自分自身がマルチタスク人間であり、優先順位がつけられないこと。</p>

<p>また、マルチタスクは生産性を著しく下げます。</p>

>ミシガン大学の心理学教授らによると、マルチタスクをする人たちは、タスクをひとつずつこなすグループよりも、40パーセントも生産性が低いという研究結果を発表しています。

>記憶にかかわる脳の「海馬」に作用し、記憶力の低下につながることが東京医科歯科大学脳統合機能研究センター特任教授・朝田隆氏監修）によって示されています。

<p>そういった問題を対処したいということからこのアプリで改善できたらと思い、作成しました。</p>

## URL

<p> URL：https://kazu-focus.xyz/ </p>

<p>【テスト用アカウント】</p>

<p>メールアドレス：test@123456.com </p>

<p>パスワード：test1234</p>

## 機能

<ol>
    <li>CRUD機能</li>
    <li>カテゴリーごとにタスクを表示</li>
    <li>LINEのAPI ログイン</li>
    <li>LINEMessageAPIと連携</li>
</ol>

## LINEbotQRコード
<img src="https://user-images.githubusercontent.com/77597098/215938417-cf913fce-3560-4d01-949b-ecbb2e0c403b.png" width="180px" height="180px">

## コマンド

### 起動する
```
$ docker compose up
```

### PHPコンテナに入る
```　
$ docker compose exec php bash
```

### マイグレーション ロールバックしてやり直す
```
$ php artisan migrate:refresh
```
### シーディング
```
$ php artisan db:seed --class=CategoriesTableSeeder
```

### Mysqlコンテナに入ってbashで対話する
```
$ docker exec -it mysql bash
```

```
$ mysql -u [DBユーザー名] -p
```

### backendフォルダに入って現在のプロジェクトをコンパイルする
```
$ npm run dev
```

### ファイルをマージする
```
$ npm run build
```

## ER図

[![](https://mermaid.ink/img/pako:eNqtVMFu1DAQ_ZVozttqs9tttzkjLogTNxQpcuPZrdXEXtnO0mW7hyQSXEBCSIgfqHpoJcoBIVFV8DGmiM_AThZlo82BAj4k8rzxm-fxzCwhFhQhAJQPGJlKkoY85J5dmUKpvLOznR2x9DRRJ8oLvBD87zc3Jv9gygtT3pris8lf_Tx_-ePdR2csvpniiymuTfHWFIXJz0OoyWKicSokwy5G61cdvjLlC1N8MuWlo86v7q6_mvy9yS-2AzjeTZnLeuPWEZsyrj1GvYePGuucyPiYSI-TFG3MRn55e_fm9W-Zm56YEpY0Zs1SVJqkM69GojlKNmFII6K3D8-IUs-EpB2IFHNGUW4jCeMYsY4jElNMj1BGWpwg75IUS7QJbktp0GxGW-iq_tUv8MeZiwXXyDvuaoPoTLUDV5_G5OJXZpph1IZcRPeGrZs747pkFi3gb6_cRikm2JGQjSK9Vz39k7y2BOugyPQ-Aqqq2UpgC12TdjpoPNX_oaKgBylK2xfUjpJKewj62NZtCK7FKU5IlmjXZs6VZFo8WfAYAi0z7EFNt54_EExIoqwVKdNCPq7HUzWlejAj_KkQjY_dQ7CEUwgOh7v-3nhwMNgf9Ufjwd6wBwsIfH-423dr_7A_OBiPRsNVD55XDP7qF-hStzg?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNqtVMFu1DAQ_ZVozttqs9tttzkjLogTNxQpcuPZrdXEXtnO0mW7hyQSXEBCSIgfqHpoJcoBIVFV8DGmiM_AThZlo82BAj4k8rzxm-fxzCwhFhQhAJQPGJlKkoY85J5dmUKpvLOznR2x9DRRJ8oLvBD87zc3Jv9gygtT3pris8lf_Tx_-ePdR2csvpniiymuTfHWFIXJz0OoyWKicSokwy5G61cdvjLlC1N8MuWlo86v7q6_mvy9yS-2AzjeTZnLeuPWEZsyrj1GvYePGuucyPiYSI-TFG3MRn55e_fm9W-Zm56YEpY0Zs1SVJqkM69GojlKNmFII6K3D8-IUs-EpB2IFHNGUW4jCeMYsY4jElNMj1BGWpwg75IUS7QJbktp0GxGW-iq_tUv8MeZiwXXyDvuaoPoTLUDV5_G5OJXZpph1IZcRPeGrZs747pkFi3gb6_cRikm2JGQjSK9Vz39k7y2BOugyPQ-Aqqq2UpgC12TdjpoPNX_oaKgBylK2xfUjpJKewj62NZtCK7FKU5IlmjXZs6VZFo8WfAYAi0z7EFNt54_EExIoqwVKdNCPq7HUzWlejAj_KkQjY_dQ7CEUwgOh7v-3nhwMNgf9Ufjwd6wBwsIfH-423dr_7A_OBiPRsNVD55XDP7qF-hStzg)
