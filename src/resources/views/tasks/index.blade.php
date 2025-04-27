<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="luxury">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>テーブル一覧</title>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/pages/TasksIndexPage.tsx', 'resources/js/pages/TaskIndex.tsx'])
    </head>
    <body>
        <x-app-layout>
            <div 
                id="tasks-index"
                data-tasks="{{ $tasks }}"
                data-categories="{{ $categories }}"
            ></div>
        </x-app-layout>
    </body>
</html>