<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>タスク編集</title>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    </head>
    <body>
        <x-app-layout>
            <div class="md:container md:mx-auto py-2">
                <div class="card w-96 bg-base-100 shadow-xl" style="width: 400px; margin: auto;">
                    <div class="card-body">
                        <h2 class="card-title">Task Content</h2><br>
                        <div class="content">
                            <form action="{{ route('tasks.update', $task->id) }}" method="POST">
                                @csrf
                                @method('PUT')
                                <div class="form-group">
                                    <label for="content" class="my-2">タスクの内容</label>
                                    <textarea class="textarea textarea-primary form-control mb-2" name="content" placeholder="内容">{{ old('content', $task->content) }}</textarea><br>
                                </div>
                                <div class="form-group">
                                    <label for="due_time">期限</label><br>
                                    <input type="date" name="due_time" placeholder="いつまで？" class="input input-bordered input-primary w-full max-w-xs mb-2" value="{{ old('due_time', $task->due_time->format('Y-m-d')) }}">                                        
                                </div>
                                <div class="form-group">
                                    <label for="status">状態</label><br>
                                    <select name="status" class="select select-primary w-full max-w-xs form-control mb-2">
                                        <option value="未"  @if(old('status', $task->status =='未')) selected  @endif>未</option>
                                        <option value="進行中" @if(old('status', $task->status =='進行中')) selected  @endif>進行中</option>
                                        <option value="完了" @if(old('status', $task->status =='完了')) selected  @endif>完了</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="time">h:m</label><br>
                                    <input type="time" name="time" placeholder="どれくらいかかる？" class="input input-bordered input-primary w-full max-w-xs mb-2" value="{{ old('time', $task->time) }}">
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
                                    <button type="submit" class="btn btn-secondary">更新</button>
                                    <button type="button" onClick="history.back()" class="btn btn-primary">戻る</button>
                                </div>
                            </form>
                            <!-- not yet -->
                            @if($errors->any())
                                <div class="alert alert-danger">
                                    <ul>
                                        @foreach($errors->all() as $error)
                                            <li>{{$error}}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </x-app-layout>
    </body>
</html>