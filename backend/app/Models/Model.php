<?php

namespace app\Models;

class Model {
    protected $table = null;

    public function setTable($table) {
        $this->table = $table;
    }
}