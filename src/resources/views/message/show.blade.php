<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>LINEメッセージ</title>
        @vite('resources/css/app.css')
    </head>
    <body class="antialiased">
      <div>
        LINEユーザーID {{ $lineUserId }}
      </div>
      <ul>
      @foreach($messages as $message)
        <li>
          @if(empty($message->line_message_id))
            WEBアプリメッセージ {{ $message->text }}
          @else
            LINEメッセージ {{ $message->text }}
          @endif
        </li>
      @endforeach
      </ul>
      <br>
      <form method="post" action="{{ route('message.create', ['lineUserId' => $lineUserId]) }}">
        @csrf
          @foreach($tasks as $task)
            <div class="form-group">
                <label for="content" class="my-2">タスクの内容</label>
                <textarea name="content">{{ old('content', $task->content) }}</textarea>
            </div>
            <div class="form-group">
                <label for="due_time">期限</label>
                <input type="date" name="due_time" class="input input-bordered input-primary w-full max-w-xs mb-2" value="{{ old('due_time', $task->due_time->format('Y-m-d')) }}">
            </div>
            <div class="form-group">
                <label for="category_id">カテゴリー種類</label>
                <input type="text" name="category_id" value= "{{ $task->category->name }}">
            </div>
          @endforeach
        <input type="text" name="message">
        <button type="submit">送信</button>
      </form>
    </body>
</html>