<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>テーブル一覧</title>
        @vite('resources/css/app.css')
    </head>
    <body>
        <x-app-layout>
            <div class="md:container md:mx-auto py-2">
                <div class="row justify-center-center">
                    <div class="col-md-12">
                        <div class="navbar bg-base-300 rounded-box">
                        <h3 class="ml-3 my-5 text-3xl font-bold">Focus</h3>
                            <div class="flex justify-end flex-1 px-2">
                                <div class="flex items-stretch">
                                    <a href="{{ route('tasks.create') }}" class="btn btn-primary mx-2">+タスク</a>
                                    <div class="dropdown dropdown-end">
                                        <button class="btn btn-error mx-2">カテゴリー</button>
                                        <a href="{{ route('message.index') }}" class="btn btn-accent mx-2">LINEに送る</a>
                                        <a href="{{ route('send.slack') }}" class="btn btn-orange mx-2">Slackに送る</a>
                                        <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                            <li>
                                                <a href="{{ route('categories.index')}}">All</a>
                                            </li>
                                            @foreach($categories as $id => $name)
                                            <li>
                                                <a class="" href="{{ route('categories.index',['category_id'=> $id]) }}">{{ $name }}</a>
                                            </li>
                                            @endforeach
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @if(session('message'))
                            <div class="alert alert-success">{{ session('message') }}</div>
                        @endif
                        <div class="mt-4 mb-4">
                            <p class="mx-2">{{ $tasks->total() }}件が見つかりました。</p>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="table w-full my-2">
                                <thead>
                                    <tr>
                                        <th class="id"></th>
                                        <th class="content">内容</th>
                                        <th class="due_time">期限</th>
                                        <th class="status">状態</th>
                                        <th class="time">h : m</th>
                                        <th class="icon">Edit</th>
                                        <th class="icon">delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($tasks as $task)
                                    <tr>
                                        <td>
                                            <li></li>
                                        </td>
                                        <td>
                                            <a href ="{{ route('tasks.show', ['task' => $task->id]) }}">{{ $task->content }}</a>
                                        </td>
                                        <td>{{ substr($task->due_time,0,10) }}</td>
                                        <td>{{ $task->status }}</td>
                                        <td>{{ substr($task->time,0,5) }}</td>
                                        <td>
                                            <a href ="{{ route('tasks.edit', ['task'=> $task->id ]) }}" class="btn btn-success">編集️</a>
                                        </td>
                                        <td>
                                            <form method="post" action="{{ route('tasks.destory', $task->id) }}" id="delete_{{ $task->id }}" >
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn bg-secondary-focus" onclick="return confirm('本当に削除しますか？');">-タスク</button>
                                            </form>
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        <div class="d-flex justify-content-center mb-5">
                            {{ $tasks->appends(['category_id' => $category_id])->links() }}
                        </div>
                    </div>
                </div>
            </div>
        </x-app-layout>
    </body>
</html>