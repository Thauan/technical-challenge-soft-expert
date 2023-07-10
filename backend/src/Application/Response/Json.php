<?php

namespace Application\Response;

class Response
{
    public static function json($data, $status)
    {
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
            header('Access-Control-Allow-Headers: token, Content-Type');
            header('Access-Control-Max-Age: 1728000');
            header('Content-Length: 0');
            header('Content-Type: text/plain');
            die();
        }

        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        http_response_code($status);

        echo json_encode($data);
    }
}