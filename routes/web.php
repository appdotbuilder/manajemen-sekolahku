<?php

use App\Http\Controllers\SchoolController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    // Redirect dashboard to school dashboard
    Route::get('dashboard', [SchoolController::class, 'index'])->name('dashboard');
    
    // School management routes using REST conventions
    Route::prefix('school')->name('school.')->group(function () {
        Route::get('/', [SchoolController::class, 'index'])->name('dashboard');
        Route::get('/view', [SchoolController::class, 'show'])->name('show');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
