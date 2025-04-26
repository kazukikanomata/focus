<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function index()
    {
        return view('tasks.index', [
            'tasks' => json_encode($this->getUserTasks()),
            'categories' => json_encode($this->getCategories()),
            'message' => session('message'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Category $category)
    {
        return view('tasks/create')->with([
            'categories' => $this->getCategories(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $inputs = $request->validate([
            'content' => 'required|max:255',
            'due_time' => 'required',
            'status' => 'required',
            'time' => 'required',
            'category_id' => 'required',
        ]);
        $task = new Task;
        $task->content = $inputs['content'];
        $task->due_time = $inputs['due_time'];
        $task->status = $inputs['status'];
        $task->time = $inputs['time'];
        $task->category_id = $inputs['category_id'];
        $task->user_id = auth()->user()->id;
        $task->save();

        return redirect()->route('tasks.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($taskId)
    {
        $task = Task::find($taskId);

        return view('tasks/show', ['task' => $task]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, Task $task)
    {
        return view('tasks/edit')->with([
            'task' => $task,
            'categories' => $this->getCategories(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        $inputs = $request->validate([
            'content' => 'required|max:255',
            'due_time' => 'required',
            'status' => 'required',
            'time' => 'required',
            'category_id' => 'required',
        ]);

        $task->content = $inputs['content'];
        $task->due_time = $inputs['due_time'];
        $task->status = $inputs['status'];
        $task->time = $inputs['time'];
        $task->category_id = $inputs['category_id'];
        $task->user_id = auth()->user()->id; // もしユーザーidがあったら
        $task->update();

        return redirect('/categories')->with('message', 'タスクを更新しました');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();

        return redirect()->route('tasks.index')->with('message', 'タスクを削除しました');
    }

    /**
     * カテゴリーテーブルからidとnameを抽出するメソッド
     */
    private function getCategories()
    {
        return Category::pluck('name', 'id');
    }

    /**
     * ログイン中のユーザーのユーザーのタスクを出す
     */
    private function getUserTasks($limit = null)
    {
        $query = Task::where('user_id', Auth::id());
        if ($limit) {
            $query->limit($limit);
        }

        return $query->paginate(10); // デフォルト値は10
    }
}
