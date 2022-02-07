<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;

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

Route::post('login', [AuthController::class, 'login']);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([
    'middleware' => 'auth:sanctum',
    'as'         => 'api.',
], function () {
    Route::get('logout', [AuthController::class, 'logout']);

    Route::apiResource('outlets', OutletController::class);
    Route::apiResource('couriers', UserController::class);

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::group([
        'as'        => 'options.',
        'prefix'    => 'options',
        'namespace' => 'Options'
    ], function () {
        Route::get('outlets', OutletController::class);
    });
});
