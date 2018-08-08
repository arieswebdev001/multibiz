<?php

namespace App\Http\Controllers;
use Auth;
use Validator;
use Ixudra\Curl\Facades\Curl;
use Illuminate\Http\Request;


class UserController extends Controller{
    function getUser(Request $request){
        return response()->json(Auth::user());
    }

    function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|max:255',
            'password' => 'required|max:255',
        ]);
        if ($validator->fails())
            return response()->json(['error'=>'validation_error', 'message'=>$validator->errors()->all()], 400);


        $response = Curl::to(config('app.url') . '/oauth/token')
            ->withData( [
                'grant_type' => 'password',
                'client_id' => config('app.passport_client_id'),
                'client_secret' => config('app.passport_client_secret'),
                'username' => $request->input('email'),
                'password' => $request->input('password'),
                'scope' => '',
            ])
            ->asJson()
            ->returnResponseObject()
            ->post();

        return response()->json($response->content, $response->status > 300? 400:200);
    }
}