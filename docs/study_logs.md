# サービスコンテナ・サービスプロバイダ理解

## サービスコンテナってなに？概念的理解

色々なサービスがある入れ物のこと。
管理もしてくれる。（依存関係をいい感じにする）
ありがたや。

### サービスを入れたい

- bindメソッドを使っていく。

サービスコンテナの中身は、web.phpで確認！
```
dd(app())
```

入れる
```
app()->bind('myName', function(){
    return 'John Doe';
});
```

入ってマウス
https://gyazo.com/5b5d4754bebe510b61ef41054eff2a83


### サービスを取り出したい。

```
$name = app()->make('myName');
dd($name);
```

### 取り出し方色々

```
$name = app()->make('myName');
$name = app('myName');
$name = resolve('myName');
$name = App::make('myName');
```

### bindメソッドとsingletonメソッド
サービスコンテナの登録はやり方が2つあるみたい。

- 違い: インスタンスを再利用するのかどうか？

  - 再利用: singletonメソッド

  - 新しく建てる: bindメソッド

参考：https://reffect.co.jp/laravel/laravel-service-container-understand/

---------

## サービスプロバイダーとは
サービスコンテナへのサービスの登録が主機能。

### サービスプロバイダーの登録する場所

- publicフォルダの`index.php`確認し
- bootstrapフォルダの`app.php`確認

```
$app = new Illuminate\Foundation\Application(
    $_ENV['APP_BASE_PATH'] ?? dirname(__DIR__)
);
```

- 次に`Illuminate\Foundation\Application.php` を見る
- registerConfirureProviders メソッドで、サービプロバイダーを登録している箇所が確認

- configフォルダの`app.php`を開いて、providersを確認すると、プロバイダーの一覧を確認できるみたい。

```
'providers' => [

      /*
        * Laravel Framework Service Providers...
        */
      Illuminate\Auth\AuthServiceProvider::class,
      Illuminate\Broadcasting\BroadcastServiceProvider::class,
      Illuminate\Bus\BusServiceProvider::class,
      Illuminate\Cache\CacheServiceProvider::class,
      Illuminate\Foundation\Providers\ConsoleSupportServiceProvider::class,
      Illuminate\Cookie\CookieServiceProvider::class,
      Illuminate\Database\DatabaseServiceProvider::class,
      Illuminate\Encryption\EncryptionServiceProvider::class,
      Illuminate\Filesystem\FilesystemServiceProvider::class,
]
```

### サービスの利用方法

- `config/app.php`に記述されている内容ってサービスプロバイダーから登録されている内容がほとんど

わかりやすいのをあげる。
`EncryptionServiceProvider.php`と`FilesystemServiceProvider.php`

インスタンス化の処理の書き方楽になるよ〜。

- 本来（サービスコンテナの登録を行わないとめちゃくちゃかく）

```
$config = $app->make('config')->get('app');

if (Str::startsWith($key = $this->key($config), 'base64:')) {
    $key = base64_decode(substr($key, 7));
}

$enctypt = new Encrypter($key, $config['cipher']);
```

- 使ったら楽

```
// make('名称');
$encrypt = app()->make('encrypter');
```

### サービスプロバイダーを作成

作ってみよう
```
$ php artisan make:provider OwnServiceProvider
```

実行後`app\Providers\OwnServiceProvider.php`が作成されているはず

```
class OwnServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        // サービスコンテナに登録するコードを記述する
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        // 全てのサービスプロバイダーが読み込まれたあとに実行したいコードを記述する。
    }
}
```

registerメソッドに追加しただけではサービスコンテナへの登録は行われないので、`config/app.php`へ追記

```
App\Providers\OwnServiceProvider::class
```

参考：https://reffect.co.jp/laravel/laravel-service-provider-understand/
