<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginFormRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * login
     *
     * @param  mixed $request
     * @return void
     */
    public function login(LoginFormRequest $request)
    {
        $loginForm = $request->except(['remember_me']);
        if (\Auth::attempt($loginForm, $request->remember_me)) {
            $user         = \Auth::user();
            $token        = $user->createToken($user->name . '-' . \Str::random(5))->plainTextToken;
            $status       = 'success';
            $data         = $user;
            $message      = 'login successfully';
            $responseCode = 200;
        } else {
            $status       = 'failed';
            $data         = '';
            $message      = 'Failed, Invalid Email or Password';
            $token        = '';
            $responseCode = 200;
        }


        return response()->json([
            'message' => $message,
            'status'  => $status,
            'data'    => $data,
            'token'   => $token,

        ], $responseCode);
    }


    /**
     * logout
     *
     * @param  mixed $request
     * @return void
     */
    public function logout(Request $request)
    {
        $user = \Auth::user();

        // Revoke all tokens...
        // $user->tokens()->delete();

        // Revoke the token that was used to authenticate the current request...
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status'  => 'success',
            'message' => 'User has been successfully logged out and token revoked'
        ], 201);
    }
}
