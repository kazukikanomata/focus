<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>トップページ</title>
        @vite('resources/css/app.css')
    </head>
    <body>
        <x-app-layout>
            <div class="hero min-h-screen" style="background-image: url(https://api.lorem.space/image/fashion?w=1000&h=800);">
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Focus</h1>
                        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <a href="{{ route('categories.index') }}" class="btn btn-primary">使ってみる</a>
                    </div>
                </div>
            </div>
        </x-app-layout>
    </body>
</html>