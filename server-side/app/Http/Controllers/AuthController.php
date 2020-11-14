<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:api')->except('login', 'register');
    }

    public $loginAfterSignUp = true;

    public function register(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        $token = auth()->login($user);

        return $this->respondWithToken($token);
    }

    public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            // return response()->json(['error' => 'Unauthorized'], 491);
            return response()->json(
              [
                'message' => 'The given data was invalid.',
                'errors' => [
                  'email' => ['These credentials do not match our records.'],
                ],
              ],
              491
            );
        }

        return $this->respondWithToken($token);
    }

    public function getAuthUser(Request $request)
    {
        // TODO: remove for prod
        sleep(3);

        return response()->json(auth()->user());
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth()->factory()->getTTL() * 60,
      ]);
    }
}
