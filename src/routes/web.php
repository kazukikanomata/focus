<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TopController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LineLoginController;
use App\Http\Controllers\LineMessengerController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/dashboard', function () {
    return view('tasks/dashboard');
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/', [TopController::class, 'index'] )->name('tops.index');

Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');

Route::get('/tasks/create', [TaskController::class, 'create'])->name('tasks.create');

Route::get('/categories/tasks/{task}', [TaskController::class, 'show'])->name('tasks.show');

Route::get('/tasks/{task}/edit', [TaskController::class, 'edit'])->name('tasks.edit');

Route::post('/tasks', [TaskController::class, 'store'])->name('tasks.store');

Route::put('/tasks/{task}', [TaskController::class, 'update'])->name('tasks.update');

Route::delete('/tasks/{task}', [TaskController::class, 'destory'])->name('tasks.destory');

Route::post('/line/webhook' , [LineMessengerController::class, 'webhook'])->name('line.webhook');
Route::get('/line/message', [LineMessengerController::class, 'message'])->name('line.message');

Route::get('/messages', [LineMessengerController::class, 'index'])->name('message.index');
Route::get('/messages/{lineUserId}', [LineMessengerController::class, 'show'])->name('message.show');

Route::post('/message/{lineUserId}', [LineMessengerController::class, 'create'])->name('message.create');

Route::get('/linelogin', [LineLoginController::class, 'lineLogin'])->name('line.login');
Route::get('/callback', [LineLoginController::class,'callback'])->name('callback');