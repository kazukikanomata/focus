<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>LINEユーザー</title>
      @vite('resources/css/app.css')
  </head>
    <body class="antialiased">
        <h1>LINEユーザー一覧</h1>
        <ul>
          @foreach($lineUsers as $lineUser)
          <li>
            <a href="{{ route('message.show', ['lineUserId' => $lineUser->line_user_id]) }}">{{ $lineUser->line_user_id }}</a>
          </li>
          @endforeach
        </ul>
    </body>
</html>