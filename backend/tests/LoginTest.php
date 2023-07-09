<?php

//Definimos que vamos usar a classe TestCase
use PHPUnit\Framework\TestCase;
use app\Models\User;
use Database\Database;

//Criamos uma classe e estendemos a TestCase para acessar seus métodos
class LoginTest extends TestCase
{
    protected $db;

    public function setUp(): void
    {

        $envFile = getenv('APP_ENV') === 'test' ? '.env.testing' : '.env';
        $dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__), $envFile);
        $dotenv->load();

        $this->db = new Database(array(
            'engine' => $_ENV['DATABASE_ENGINE'],
            'database' => $_ENV['DATABASE_NAME'],
            'port' => $_ENV['DATABASE_PORT'],
            'host' => $_ENV['DATABASE_HOST'],
            'user' => $_ENV['DATABASE_USER'],
            'password' => $_ENV['DATABASE_PASSWORD']
        ));

        $user = new User();

        $data['email'] = "jhon@doe.com";
        $data['password'] = "123456";
        $data['name'] = "Jhon Doe";

        $user->register($data);
    }

    public function tearDown(): void
    {
        $query = $this->db->getPdo()->prepare("DELETE FROM users");
        $query->execute();
    }

    /**
     * Testa se o código de resposta é 200 e te o id do usuário é um inteiro
     *
     * @return void
     */
    public function test_login_method()
    {
        $user = new User();

        $data['email'] = "jhon@doe.com";
        $data['password'] = "123456";
        $data['name'] = "Jhon Doe";

        $response = $user->login($data['email'], $data['password']);

        $this->assertEquals("jhon@doe.com", $response['data']['email']);
        $this->assertEquals("Jhon Doe", $response['data']['name']);
    }
}