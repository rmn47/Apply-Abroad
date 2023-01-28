<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/service', function () {
    return Inertia::render('service', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('service');
Route::get('/about-us', function () {
    return Inertia::render('about', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('about');
Route::get('/contact-us', function () {
    return Inertia::render('contact', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('contact');
Route::get('/Blogs', function () {
    return Inertia::render('blogs', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('blog');
Route::get('/Blogs-Visa & Migration To Australia', function () {
    return Inertia::render('Singleblog1', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('Sblog1');
Route::get('/Blogs-Need To Fulfil Your Dream Of Studying In UK..', function () {
    return Inertia::render('Singleblog2', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('Sblog2');
Route::get('/Blogs-Your complete guide to study in NZ', function () {
    return Inertia::render('Singleblog3', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('Sblog3');
Route::get('/Blogs-Want a Canadian Study Visa..', function () {
    return Inertia::render('Singleblog4', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('Sblog4');
Route::get('/Blogs-Things To Know Before..', function () {
    return Inertia::render('Singleblog5', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('Sblog5');

// Route::get('/applications', function () {
//     return Inertia::render('Applications');
// })->middleware(['auth', 'verified'])->name('applications');


require __DIR__ . '/auth.php';
