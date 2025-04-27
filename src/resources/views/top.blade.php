<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="luxury">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>トップページ</title>
        <!-- ホットリロードのため -->
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/pages/TopPage.jsx'])
    </head>
    <body>
        <x-app-layout>
            <div id="top-page"></div>
        </x-app-layout>
    </body>
</html>