<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\MarketingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::get('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::post('createNewToken', 'createNewToken');
});
Route::controller(MarketingController::class)->group(function () {
    Route::get('marketing', 'index');
    Route::get('marketing/{id}', 'show');
    Route::post('marketing/update/{id}', 'update');
});
