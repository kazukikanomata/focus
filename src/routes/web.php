<?php

use App\Http\Controllers\GoogleLoginController;
use App\Http\Controllers\LineLoginController;
use App\Http\Controllers\LineMessengerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SlackSendMessageController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TopController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [TopController::class, 'index'])->name('tops.index');
Route::get('/tasks', [TaskController::class, 'index'])->name('tasks.index');
Route::get('/tasks/create', [TaskController::class, 'create'])->name('tasks.create');
Route::post('/tasks', [TaskController::class, 'store'])->name('tasks.store');
Route::get('/tasks/{task}', [TaskController::class, 'show'])->name('tasks.show');
Route::get('/tasks/{task}/edit', [TaskController::class, 'edit'])->name('tasks.edit');
Route::delete('/tasks/{task}', [TaskController::class, 'destroy'])->name('tasks.destroy');


Route::put('/tasks/{task}', [TaskController::class, 'update'])->name('tasks.update');

Route::get('/demo', function () {
    return view('tasks/welcome');
});

Route::get('/welcome', [SlackSendMessageController::class, 'sendMessage'])->name('send.slack');


// Line Message API
Route::post('/line/webhook', [LineMessengerController::class, 'webhook'])->name('line.webhook');
Route::get('/line/message', [LineMessengerController::class, 'message'])->name('line.message');
Route::get('/messages', [LineMessengerController::class, 'index'])->name('message.index');
Route::get('/messages/{lineUserId}', [LineMessengerController::class, 'show'])->name('message.show');
Route::post('/message/{lineUserId}', [LineMessengerController::class, 'create'])->name('message.create');

// Line Login API
Route::get('/linelogin', [LineLoginController::class, 'lineLogin'])->name('line.login');
Route::get('/callback', [LineLoginController::class, 'callback'])->name('callback');

// Google Login API
Route::get('/auth/google', [GoogleLoginController::class, 'redirectToGoogle'])
    ->name('login.google');

Route::get('/auth/google/callback', [GoogleLoginController::class, 'handleGoogleCallback'])
    ->name('login.google.callback');
