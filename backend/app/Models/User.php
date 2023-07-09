<?php

namespace app\Models;

use app\Models\Model;
use Database\Database;
use DateTimeImmutable;
use Firebase\JWT\JWT;
use PDO;
class User extends Model
{
  protected $table = 'users';
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

  public function login($email, $password) {
    $email = strtolower(trim($email));

    $query = $this->db->getPdo()->prepare("SELECT * FROM {$this->table} WHERE email = :email LIMIT 1");
    $query->execute(['email' => $email]);

    $result = $query->fetch(PDO::FETCH_ASSOC);

    if(isset($result)) {
      if($result['email'] === $email && password_verify($password, $result['password'])) {
        $_SESSION['username'] = $email;
        $_SESSION['name'] = $result['name'];

        $secretKey  = 'secret';
        $issuedAt   = new DateTimeImmutable();
        $expire     = $issuedAt->modify('+6 minutes')->getTimestamp();
        $serverName = "soft.expert";

        $data = [
            'iat'  => $issuedAt->getTimestamp(),
            'iss'  => $serverName,
            'nbf'  => $issuedAt->getTimestamp(),
            'exp'  => $expire,
            'user' => $result,
        ];

        $token = JWT::encode(
          $data,
          $secretKey,
          'HS512'
        );

        $response['data'] = $result;
        $response['data']['token'] = $token;

        return $response;
      } else {
        $response['error'] = true;
        $response['message'] = "Usuario inexistente ou senha invalida";

        return $response;
      }
    } else {
      $response['error'] = true;
      $response['message'] = "Usuario inexistente ou senha invalida";

      return $response;
    }
  }

  public function register($attributes) {


    $email = strtolower(trim($attributes['email']));

    $query = $this->db->getPdo()->prepare("SELECT * FROM {$this->table} WHERE email = :email LIMIT 1");
    $query->execute(['email' => $email]);

    $row = $query->fetch(PDO::FETCH_ASSOC);

    $passwordHash = password_hash($attributes['password'], PASSWORD_DEFAULT);

    $date = date('d-m-y h:i:s');

    if(!$row) {
      $insertQuery = $this->db->getPdo()->prepare(
        "INSERT INTO {$this->table} (name, email, password, created)
        VALUES ('{$attributes['name']}', '{$attributes['email']}', '{$passwordHash}', '{$date}')"
      );

      $insertQuery->execute();

      $lastInsertId = $this->db->getPdo()->lastInsertId();

      $selectSql = "SELECT * FROM {$this->table} WHERE id = :id";
      $stmt = $this->db->getPdo()->prepare($selectSql);
      $stmt->bindParam(':id', $lastInsertId);
      $stmt->execute();
      $result = $stmt->fetch(PDO::FETCH_ASSOC);

      $secretKey  = 'secret';
      $issuedAt   = new DateTimeImmutable();
      $expire     = $issuedAt->modify('+6 minutes')->getTimestamp();
      $serverName = "soft.expert";

      $data = [
          'iat'  => $issuedAt->getTimestamp(),
          'iss'  => $serverName,
          'nbf'  => $issuedAt->getTimestamp(),
          'exp'  => $expire,
          'user' => $result,
      ];

      $token = JWT::encode(
        $data,
        $secretKey,
        'HS512'
      );

      $response['data'] = $result;
      $response['data']['token'] = $token;

      return $response;

    } else {
      $response['error'] = true;
      $response['message'] = "Usuario inexistente ou senha invalida";

      return $response;
    }
  }
}