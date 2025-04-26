<!DOCTYPE HTML>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>タスク追加</title>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/components/TaskCreate.jsx', 'resources/js/pages/TaskCreatePage.jsx'])
    </head>
    <body>
        <x-app-layout>
            <div 
                id="tasks-create"
                data-categories="{{ $categories }}"
                ></div>
        </x-app-layout>
    </body>
</html>