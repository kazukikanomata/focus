<!DOCTYPE HTML>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>タスク追加</title>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    </head>
    <body>
        <x-app-layout>
            <div class="md:container md:mx-auto py-2">
                    @if($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                    @endif
                    @if(session('message'))
                        <div class="alert alert-success my-2">{{ session('message') }}</div>
                    @endif
                <div class="car d w-96 bg-base-100 shadow-xl" style="width: 400px; margin: auto;">
                    <div class="card-body">
                        <h2 class="card-title">Add Task!!</h2><br>
                        <form action="{{ route('tasks.store') }}" method="POST">
                            @csrf
                            <div class="form-group">
                                <label for="content">タスクの内容</label>
                                <textarea class="textarea textarea-primary form-control mb-2" name="content" placeholder="内容"></textarea><br>
                            </div>
                            <div class="form-group">
                                <label for="due_time" class="my-2">期限</label>
                                <input type="date" name="due_time" placeholder="いつまで？" class="input input-bordered input-primary w-full max-w-xs mb-2"><br>
                            </div>
                            <div class="form-group">
                                <label for="status">状態</label>
                                <select name="status" class="select select-primary w-full max-w-xs form-control mb-2">
                                    <option value="未">未</option>
                                    <option value="進行中">進行中</option>
                                    <option value="完了">完了</option>
                                </select>
                                <br>
                            </div>
                            <div class="form-group">
                                <label for="time">h:m</label><br>
                                <input type="time" name="time" placeholder="どれくらいかかる？" class="input input-bordered input-primary w-full max-w-xs mb-2">
                            </div>
                            <div class="form-group">
                                <label for="category">Category</label><br>
                                <select name="category_id" class="select select-primary w-full max-w-xs form-control mb-2">
                                    @foreach($categories as $category)
                                        <option value="{{ $category->id }}">{{ $category->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="button my-2">
                                <button type="submit" class="btn btn-primary">送信</button>
                                <a href="{{ route('categories.index') }}" class="btn btn-danger">戻る</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </x-app-layout>
    </body>
</html>