<?php

namespace app\Controllers;

use app\Controllers\Controller;
use app\Models\User;
use Application\Request\Request;
use Application\Response\Response;

class AuthController extends Controller
{
    public function login()
    {
        $attributes = Request::input();
        $user = new User();

        $response = $user->login($attributes['email'],
                                 $attributes['password']);

        return Response::json($response);
    }

    public function register()
    {
        $attributes = Request::input();
        $user = new User();

        $response = $user->register($attributes);

        return Response::json($response);
    }
}