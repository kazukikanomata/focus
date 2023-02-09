<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Category $category)
    {
        return view('tasks/create')->with(['categories' => $category->get()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $inputs = $request->validate([
            'content'=>'required|max:255',
            'due_time'=>'required',
            'status'=>'required',
            'time'=>'required',
            'category_id'=>'required',
        ]);
        $task = new Task();
        $task->content = $inputs['content'];
        $task->due_time = $inputs['due_time'];
        $task->status = $inputs['status'];
        $task->time = $inputs['time'];
        $task->category_id = $inputs['category_id'];
        $task->user_id = auth()->user()->id;
        $task->save();
        return back()->with('message','タスクを保存しました');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $task)
    {
        $task = Task::find($task);
        return view('tasks/show')->with(['task' => $task]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, Task $task)
    {
        $categories = Category::all();
        return view('tasks/edit')->with(['task' => $task,'categories'=> $categories]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        $inputs = $request->validate([
            'content'=>'required|max:255',
            'due_time'=>'required',
            'status'=>'required',
            'time'=>'required',
            'category_id'=>'required',
            ]);
        
        $task->content = $inputs['content'];
        $task->due_time = $inputs['due_time'];
        $task->status = $inputs['status'];
        $task->time = $inputs['time'];
        $task->category_id = $inputs['category_id'];
        $task->user_id = auth()->user()->id; //もしユーザーidがあったら
        $task->update();
        return redirect('/categories')->with('message','タスクを更新しました');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $task->delete();
        return back()->with('message','タスクを削除しました');
    }
}
