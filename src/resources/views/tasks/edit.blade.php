<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="luxury">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>タスク編集</title>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/pages/TaskEditPage.jsx', 'resources/js/components/TaskEdit.jsx'])
    </head>
    <body>
        <x-app-layout>
            <div 
                id="task-edit"
                data-categories="{{ $categories }}"
                data-task='@json($task)'>
            </div>
        </x-app-layout>
    </body>
</html>