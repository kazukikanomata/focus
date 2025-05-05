<?php

namespace App\Services;

use App\Models\Category;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;

class TaskService
{
    public function getUserTasks($limit = null)
    {
        $query = Task::where('user_id', Auth::id());
        if ($limit) {
            $query->limit($limit);
        }

        // パフォーマンスの関係でデフォルト値は10に設定をしておく
        return $query->paginate(10);
    }

    public function getCategories()
    {
        return Category::pluck('name', 'id');
    }
}
