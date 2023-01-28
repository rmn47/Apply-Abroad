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
use Modules\Profile\Http\Controllers\ProfileController;


Route::get('profile', [ProfileController::class, 'index'])->middleware(['auth', 'verified'])->name('profile');
Route::get('education_history', [ProfileController::class, 'education'])->middleware(['auth', 'verified'])->name('education_history');
Route::get('test_scores', [ProfileController::class, 'score'])->middleware(['auth', 'verified'])->name('test_scores');
Route::get('background_information', [ProfileController::class, 'background'])->middleware(['auth', 'verified'])->name('background_information');
Route::get('documents', [ProfileController::class, 'documents'])->middleware(['auth', 'verified'])->name('documents');
// Route::get('eligiblity', [ProfileController::class, 'index'])->middleware(['auth', 'verified'])->name('profile');

Route::put('update_profile', [ProfileController::class, 'update_profile'])->middleware(['auth', 'verified'])->name('update_profile');
Route::post('update_education', [ProfileController::class, 'update_education'])->middleware(['auth', 'verified'])->name('update_education');
Route::post('update_score', [ProfileController::class, 'update_score'])->middleware(['auth', 'verified'])->name('update_score');
Route::post('update_background', [ProfileController::class, 'update_background'])->middleware(['auth', 'verified'])->name('update_background');
Route::post('update_documents', [ProfileController::class, 'update_documents'])->middleware(['auth', 'verified'])->name('update_documents');
