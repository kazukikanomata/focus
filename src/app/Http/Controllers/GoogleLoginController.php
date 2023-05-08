<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;    
use Exception;

class GoogleLoginController extends Controller
{
    public function redirectToGoogle(){
        return Socialite::driver('google')->redirect();
    }

    public function callback(){
        try {
            $user = Socialite::driver('google')->user();

            $find_user = User::where('google_id', $user->id)->first();

            if ($find_user) {
                Auth::login($find_user);

                return redirect('/');

            } else {

                $new_user = User::updateOrCreate([
                    'name' => $user->name,
                    'email' => $user->email,
                    'google_id' => $user->id,
                    'password' => encrypt('123456dummy'),
                ]);
                Auth::login($new_user);

                return redirect('/');
            }

        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }
}