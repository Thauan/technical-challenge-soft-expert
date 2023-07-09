<?php
spl_autoload_register(function($class) {
    if(file_exists($class.'.php')) {
        require($class.'.php');
    }

    if(file_exists('Models/'.$class.'.php')) {
        require('Models/'.$class.'.php');
    }

    if(file_exists('src/Application/'.$class.'.php')) {
        require('src/Application/'.$class.'.php');
    }
});