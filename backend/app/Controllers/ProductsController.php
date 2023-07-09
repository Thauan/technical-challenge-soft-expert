<?php

namespace app\Controllers;

use app\Controllers\Controller;
use app\Models\Product;
use Application\Request\Request;
use Application\Response\Response;

class ProductsController extends Controller
{
    public function products_list()
    {
        $products = new Product();

        $response = $products->all();

        return Response::json($response);
    }

    public function products_create()
    {
        $attributes = Request::input();
        $products = new Product();

        $response = $products->create($attributes);

        return Response::json($response);
    }
}
