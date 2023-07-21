# ミドルウェアとは
ミドルウェアは、アプリケーションに入るHTTPリクエストを検査およびフィルタリングするための便利なメカニズムを提供。

😊：アプリケーションに入る前にいい感じにしてくれるやーつ

## 使い方

```
$ php artisan make:middleware ミドルウェアの名前
```

`app/Http/Middleware`ディレクトリ内に配置される

### ミドルウェアの登録
- グローバルミドルウェア

`app/Http/Kernel.php` クラスの$middlewareプロパティに記述せよ。

- ルートに対するミドルウェアの指定
同じく、`app/Http/Kernel.php` クラスの特定の値に記述せよ。

```
// App\Http\Kernelクラス内…

protected $routeMiddleware = [
    'auth' => \App\Http\Middleware\Authenticate::class,
    'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
    'bindings' => \Illuminate\Routing\Middleware\SubstituteBindings::class,
    'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
    'can' => \Illuminate\Auth\Middleware\Authorize::class,
    'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
    'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
    'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
    'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
];
```

これで使えるようになりました。
middlewareメソッドを使い、ルートに割り当てることができる。

※ 複数指定も可能だよ

```
Route::get('/profile', function () {
    //
})->middleware('auth');
```

### 保守性は弱まるけど😅、一気に定義するのあり

- ミドルウェアグループ

$middlewareGroupsに記述していく。

```
protected $middlewareGroups = [
    'web' => [
        \App\Http\Middleware\EncryptCookies::class,
        \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
        \Illuminate\Session\Middleware\StartSession::class,
        \Illuminate\View\Middleware\ShareErrorsFromSession::class,
        \App\Http\Middleware\VerifyCsrfToken::class,
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],

    'api' => [
        'throttle:api',
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],
];

```


## 参考

https://readouble.com/laravel/9.x/ja/middleware.html