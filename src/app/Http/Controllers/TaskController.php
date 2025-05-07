<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Task;
use App\Services\TaskService;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function __construct(private TaskService $taskService)
    {
        view()->share('userTasks', $this->taskService->getUserTasks());
    }

    public function index()
    {
        return view('tasks/index', [
            'tasks' => json_encode($this->taskService->getUserTasks()),
            'categories' => json_encode($this->taskService->getCategories()),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Category $category, Task $task)
    {
        return $this->renderFormView(new Task);
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

        return $this->renderFormView($task);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        return $this->renderFormView($task);
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

        return redirect()->route('tasks.index')->with('message', 'タスクを更新しました');
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

    public function renderFormView(Task $task)
    {
        return view('tasks/common')->with([
            'task' => $task,
            'categories' => $this->taskService->getCategories(),
        ]);
    }

    public function bulkDelete(Request $request)
    {
        $taskIds = json_decode($request->input('task_ids'), true);

        if (is_array($taskIds)) {
            Task::whereIn('id', $taskIds)->delete();
        }

        return redirect()->route('tasks.index');
    }
}
