<?php

namespace Database;

use PDO;
use PDOException;

class Database
{
  protected $config = [];

  protected $pdo;

  public function __construct(array $config)
  {
    $this->config = $config;
  }

  public function getPdo()
  {
    if (null == $this->pdo) {
      try {
        $config = $this->config;

        if(getenv('APP_ENV') === 'test') {
          $dsn = $config['engine'].':dbname='.$config['database'].';port='.$config['port'].';host='.$config['host'].';';
        } else {
          $dsn = $config['engine'].':dbname='.$config['database'].';host='.$config['host'].';';
        }

        $this->pdo = new PDO($dsn, $config['user'], $config['password']);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      } catch (PDOException $e) {
        echo 'Connection failed: ' . $e->getMessage();
      }
    }
    return $this->pdo;
  }

  public function query($sql)
  {
    return $this->getPdo()->query($sql);
  }

}