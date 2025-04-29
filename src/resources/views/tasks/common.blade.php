<!DOCTYPE HTML>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="luxury">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>タスク追加</title>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/components/TaskCommonForm.jsx', 'resources/js/pages/TaskCommonPage.jsx'])
    </head>
    <body>
        <x-app-layout>
            <div 
                id="tasks-form"
                data-categories="{{ $categories }}"
                data-task='@json($task)'
                ></div>
        </x-app-layout>
    </body>
</html>