<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;


class AdminLoginController extends Controller
{
     public function login(Request $request)
    {
        // Validate inputs
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // Find user by email
        $user = User::where('email', $request->email)->first();

        // User exist?
        if (!$user) {
            return response()->json([
                'message' => 'Invalid email or password.'
            ], 401);
        }

        // Check password
        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid email or password.'
            ], 401);
        }

        // Check admin role
        if ($user->is_admin != true) {
            return response()->json([
                'message' => 'Access denied! Only admin can login here.'
            ], 403);
        }

        // Generate Sanctum token
        $token = $user->createToken('admin-token')->plainTextToken;

        // Success response
        return response()->json([
            'message' => 'Admin login successful!',
            'token' => $token,
            'user' => $user
        ], 200);
    }
}
