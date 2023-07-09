<?php
use Application\Route\Route;
use App\Controllers\ProductsController;
use App\Controllers\AuthController;

Route::controller('/login', AuthController::class);
Route::controller('/register', AuthController::class);
Route::controller('/products_list', ProductsController::class);
Route::controller('/products_create', ProductsController::class);