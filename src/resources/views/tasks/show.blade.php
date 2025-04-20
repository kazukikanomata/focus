<!DOCTYPE HTML>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>タスク詳細</title>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    </head>
    <body>
        <x-app-layout>
            <div class="md:container md:mx-auto py-2">
                <div class="row justify-center-center mx-auto">
                    <div class="col-md-10 mx-auto">
                        <div class="card">
                            <div class="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>内容</th>
                                            <th>期限</th>
                                            <th>状態</th>
                                            <th>h : m</th>
                                            <th>カテゴリー名</th>
                                            <th></th>
                                            <th></th>
                                        </tr>    
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{{ $task->content }}</td>
                                            <td>{{ substr($task->due_time,0,10) }}</td>
                                            <td>{{ $task->status }}</td>
                                            <td>{{ substr($task->time,0,5) }}</td>
                                            <td>{{ $task->category->name }}</td>
                                            <td>
                                                <a href="{{ route('tasks.edit',['task'=> $task->id]) }}" class="btn btn-success">編集</a>
                                            </td>
                                            <td>
                                                <form method="post" action="{{ route('tasks.destory', $task->id) }}" id="delete_{{ $task->id }}" >
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger" onclick="return confirm('本当に削除しますか？');">-タスク</button>
                                                </form>
                                            </td>
                                            <button type="button" onClick="history.back()" class="btn btn-secondary my-2">戻る</button>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </x-app-layout>
    </body>
</html>