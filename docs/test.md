## ユニットテストとは

単体テストのこと。単体テストは主に作成した各クラスが持つメソッドが意図通りに動作するのかを調べるために実施します。

### テスト実行

色別で出せる。



```
$ ./vendor/bin/phpunit test --color
```

こちらでも実行可能
```
$ php artisan test
```

テストをする前は、必ずartisanコマンドを実行する。

```
$ php artisan config:clear
```

## テストの作成

`tests/Feature`ディレクトリに配置される。

```
$ php artisan make:test UserTest（ファイル名）
```

`tests/Unit`ディレクトリ内にテストを作り隊のなら、`make:test`コマンドを実行するときにオプションを追加

```
$ php artisan make:test UserTest --unit
```

### unitTestと他のテストの違い

https://qiita.com/minato-naka/items/cd1d0408e412fe86edc5
https://zenn.dev/nshiro/books/laravel-test-from-beginner/viewer/feature-unit


### オートローダーと名前解決
https://reffect.co.jp/php/composer-autoload/

### 参考
https://readouble.com/laravel/9.x/ja/testing.html

https://reffect.co.jp/laravel/phpunit-test/