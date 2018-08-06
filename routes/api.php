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
Route::post('/login', function(Request $request){
    $http = new GuzzleHttp\Client;

    $response = $http->post( config('app.url') . '/oauth/token', [
        "form_params"=>[
            'grant_type' => 'password',
            'client_id' => config('app.passport_client_id'),
            'client_secret' => config('app.passport_client_secret'),
            'username' => $request->input('email'),
            'password' => $request->input('password'),
            'scope' => '',
        ]
    ]);
    
    return json_decode((string) $response->getBody(), true);
});


/**
 * Passport protected APIs
 */
Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/user', function(){

    });
});

