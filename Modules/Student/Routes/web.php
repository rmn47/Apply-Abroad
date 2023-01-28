<?php

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

use Illuminate\Support\Facades\Route;
use Modules\Student\Http\Controllers\StudentController;
use Inertia\Inertia;

Route::get('student', [StudentController::class, 'index'])->name('student');
Route::get('student/education', [StudentController::class, 'education'])->name('education');
Route::get('student/test', [StudentController::class, 'test'])->name('test');

Route::any('update_user', [StudentController::class, 'update_user'])->middleware(['auth', 'verified'])->name('update_user');
Route::any('update_background', [StudentController::class, 'update_background'])->middleware(['auth', 'verified'])->name('update_background');
Route::any('update_education', [StudentController::class, 'update_education'])->middleware(['auth', 'verified'])->name('update_education');
Route::any('update_test', [StudentController::class, 'update_test'])->middleware(['auth', 'verified'])->name('update_test');
