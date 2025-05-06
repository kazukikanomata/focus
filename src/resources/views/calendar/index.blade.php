<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="luxury">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>カレンダ〜情報取得</title>
    </head>
    <body>
        <x-app-layout>
            <h1>Google カレンダーの予定一覧</h1>
            <ul>
                @foreach ($events as $event)
                    <li>
                        <strong>{{ $event->getSummary() }}</strong>
                        <br>
                        開始：{{$event->getStart()->getDateTime() ?? $event->getStart()->getDate()  }}
                        終了：{{$event->getEnd()->getDateTime() ?? $event->getEnd()->getDate()}}
                    </li>
                @endforeach
            </ul>
        </x-app-layout>
    </body>
</html>