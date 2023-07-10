# Technical Challenge - Soft Expert

## Instalação

1. Clone o repositório em sua máquina local
```bash
git clone https://github.com/Thauan/technical-challenge-soft-expert.git
```

2. Entre na pasta do projeto:
```bash
cd technical-challenge-soft-expert
```

4. Instale as dependências do PHP:
```bash
cd backend
composer install --ignore-platform-reqs
```

5. Copie o arquivo .env.example para .env e configure as variáveis de ambiente, como o banco de dados e o S3:
```bash
cp .env.example .env
cp .env.example .env.testing
```

.env
```bash
ENVORIMENT=development
DATABASE_NAME=php_mvc
DATABASE_PORT=5632
DATABASE_ENGINE=pgsql
DATABASE_HOST=database
DATABASE_USER=postgres
DATABASE_PASSWORD=root
```

.env.testing
```bash
ENVORIMENT=test
DATABASE_NAME=php_mvc_test
DATABASE_PORT=5632
DATABASE_ENGINE=pgsql
DATABASE_HOST=localhost
DATABASE_USER=postgres
DATABASE_PASSWORD=root
```

8. Instale as dependências do NPM:
```bash
cd frontend
npm install
```

5. Copie o arquivo .env.example para .env e configure as variáveis de ambiente do frontend:
```bash
cp .env.example .env
```

3. Execute o docker do projeto:
```bash
docker compose up --build
```

6. Criação do banco de desenvolvimento e teste:
```bash
ocker exec -it technical-challenge-soft-expert-database-1 psql -U postgres -c "CREATE DATABASE php_mvc ENCODING 'LATIN1' TEMPLATE template0 LC_COLLATE 'C' LC_CTYPE 'C';"
ocker exec -it technical-challenge-soft-expert-database-1 psql -U postgres -c "CREATE DATABASE php_mvc_test ENCODING 'LATIN1' TEMPLATE template0 LC_COLLATE 'C' LC_CTYPE 'C';"

docker exec -it technical-challenge-soft-expert-database-1 psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE postgres TO postgres;"
```

7. Rode as migrations:
```bash
vendor/bin/phinx migrate -e development
vendor/bin/phinx migrate -e testing
```

7. Para rodar os testes:
```bash
composer test
```
ou
```bash
APP_ENV=test ./vendor/bin/phpunit
```

## Funcionalidades

O projeto possui diversas funcionalidades interessantes, incluindo:

* Login
* Cadastro
* Listagem de Produtos
* Carrinho de Pedidos

## Tecnologias
O projeto foi desenvolvido utilizando as seguintes tecnologias:

* PHP 8.1
* React
* Material UI
* Amazon S3

## Contribuição
Contribuições são bem-vindas! Se você encontrar algum bug ou tiver alguma ideia para melhorar o projeto, por favor, abra uma issue ou submeta um pull request.
