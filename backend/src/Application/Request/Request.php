<?php

namespace Application\Request;

class Request
{
    public static function input()
    {
        return json_decode(file_get_contents('php://input'), true);
    }
}
