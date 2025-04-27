<!DOCTYPE HTML>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="luxury">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>タスク詳細</title>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/pages/TaskShowPage.jsx','resources/js/components/TaskShow.jsx'])
    </head>
    <body>
        <x-app-layout>
            <div 
                id="task-show" 
                data-task='@json($task)'>
            </div>
        </x-app-layout>
    </body>
</html>