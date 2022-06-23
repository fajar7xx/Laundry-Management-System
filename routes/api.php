<?php

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
    Route::post('/login', 'login');
    Route::get('/logout', 'logout')->middleware('auth:sanctum');
});

Route::group([
    'middleware' => 'auth:sanctum',
    'as'         => 'api.',
], function () {

    Route::controller(RolePermissionController::class)->group(function () {
        Route::post('/role-permission', 'getRolePermission')->name('role-permission');
        Route::post('/set-role-permission', 'setRolePermission')->name('set-role-permission');
        Route::post('/set-role-user', 'setRoleUser')->name('set-role-user');
    });

    Route::controller(UserController::class)->group(function () {
        Route::get('/user-authenticated', 'getUserAuthenticated')->name('user-authenticated');
        Route::get('/user-lists', 'userLists')->name('user-lists');
    });

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::group([
        'name'        => 'options.',
        'prefix'    => 'options',
    ], function () {
        Route::get('/outlets', Options\OutletController::class);
        Route::get('/laundry-types', Options\LaundryTypeController::class);
    });

    Route::apiResource('/laundry-type', LaundryTypeController::class);
    Route::apiResource('/outlets', OutletController::class);
    Route::apiResource('/couriers', UserController::class);
    Route::apiResource('/products', ProductController::class);
    Route::apiResource('/users', UserController::class);
    Route::apiResource('/roles', RoleController::class)->only(['index']);
    Route::apiResource('/permissions', PermissionController::class)->only(['index']);
});
