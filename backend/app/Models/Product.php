<?php

namespace app\Models;

use app\Models\Model;
use Database\Database;
use PDO;

class Product extends Model
{
  protected $table = 'products';
  protected $db;

  public function __construct()
  {
    $this->setTable($this->table);

    $this->db = new Database([
      'engine' => $_ENV['DATABASE_ENGINE'],
      'database' => $_ENV['DATABASE_NAME'],
      'port' => $_ENV['DATABASE_PORT'],
      'host' => $_ENV['DATABASE_HOST'],
      'user' => $_ENV['DATABASE_USER'],
      'password' => $_ENV['DATABASE_PASSWORD']
    ]);
  }

  public function all() {

    $query = $this->db->getPdo()->query("SELECT * FROM {$this->table}");

    $products = $query->fetchAll(PDO::FETCH_ASSOC);

    if(isset($products)) {
        $response['data']['products'] = $products;
        $response['status'] = 200;

        return $response;
    } else {
        $response['error'] = true;
        $response['message'] = "Não há produtos";
        $response['status'] = 404;

        return $response;
    }
  }

  public function create($attributes) {
    $date = date('d-m-y h:i:s');

    $insertQuery = $this->db->getPdo()->prepare(
        "INSERT INTO {$this->table} (name, tax, price, quantity, created)
        VALUES (
            '{$attributes['name']}',
            '{$attributes['tax']}',
            '{$attributes['price']}',
            '{$attributes['quantity']}',
            '{$date}'
        )"
    );

    $insertQuery->execute();

    $lastInsertId = $this->db->getPdo()->lastInsertId();
    $selectSql = "SELECT * FROM {$this->table} WHERE id = :id";
    $stmt = $this->db->getPdo()->prepare($selectSql);
    $stmt->bindParam(':id', $lastInsertId);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    $response['data'] = $result;
        $response['status'] = 200;

    return $response;
  }
}