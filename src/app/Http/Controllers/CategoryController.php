<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Task;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        $category = new Category;
        $categories = $category->getLists();

        $category_id = $request->category_id;

        $tasks = Task::orderby('created_at', 'desc')->categoryAt($category_id)->paginate(10);

        return view('tasks/index')->with(['tasks' => $tasks, 'categories' => $categories, 'category_id' => $category_id]);
    }
}
