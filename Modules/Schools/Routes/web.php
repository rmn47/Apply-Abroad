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
use Modules\Schools\Http\Controllers\SchoolsController;
use Inertia\Inertia;

Route::get('/quick_search', [SchoolsController::class, 'index'])->middleware(['auth', 'verified'])->name('quick_search');
Route::get('/detail/{id}', [SchoolsController::class, 'details'])->middleware(['auth', 'verified'])->name('detail');
Route::get('/program/{id}', [SchoolsController::class, 'programdetails'])->middleware(['auth', 'verified'])->name('program');

Route::any('/set_user_program/{id}', [SchoolsController::class, 'set_user_program'])->middleware(['auth', 'verified'])->name('set_user_program');
