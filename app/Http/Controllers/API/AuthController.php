<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginFormRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(LoginFormRequest $request)
    {
        $loginForm = $request->except(['remember_me']);
        if (!\Auth::attempt($loginForm, $request->remember_me)) {
            $status       = 'failed';
            $data         = '';
            $message      = 'login failed';
            $token        = '';
            $responseCode = 422;
        }

        $user         = \Auth::user();
        $token        = $user->createToken('token')->plainTextToken;
        $status       = 'success';
        $data         = $user;
        $message      = 'login successfully';
        $responseCode = 200;

        return response()->json([
            'message' => $message,
            'status'  => $status,
            'data'    => $data,
            'token'   => $token,

        ], $responseCode);
    }
}
