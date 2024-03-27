<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
class UserController extends Controller
{
    public function index()
    {
        // return User::with("bookings")->with("favourites")->get();
        return User::with("bookings")->get();

    }


    public function store(Request $request): Response
    {

        // dd($request);
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            "is_admin"=>["bool"]
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            "is_admin"=>$request->is_admin
        ]);

        event(new Registered($user));


        return response()->noContent();
    }


    public function update(Request $request, User $user){
        $user->name = $request->name;
        $user->email = $request->email;
        $user->profile_img = $request->profile_img;

        $user->update();

        return $user;
    }

    public function destroy(User $user){
        $user->delete();
    }

}
