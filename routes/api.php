<?php

use Illuminate\Http\Request;

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

/**
 * Requesting Access Token
 */
Route::post('/login', 'UserController@login');


/**
 * Passport protected APIs
 */
Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/user', 'UserController@getUser');
});

