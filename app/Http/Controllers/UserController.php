<?php

namespace App\Http\Controllers;
use Auth;

use Illuminate\Http\Request;
class UserController extends Controller{
    function getUser(Request $request){
        return response()->json(Auth::user());
    }
}
