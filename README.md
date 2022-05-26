## Teste
O teste consiste em um CRUD de usuários, onde é possível:
- cadastrar um usuário com email e senha
- listar todos os usuários 
- deletar todos os usuários 
- atualizar, deletar e listar um único usuário

## Instalação

- Primeiro faça o fork deste repositório.

- Em seguida faça um git clone para a sua maquina

- Crie um arquivo .env e configure suas variáveis de ambiente seguindo o `.env.example`

- Instale as dependencias necessárias utilizando o comando

```
$ npm install
```

- Crie o container do banco de dados com docker compose

```
$ docker-compose up -d
```

- Crie as tabelas no banco de dados através do comando

```
$ npm run migrate
```

- (Opcional) Carregue alguns dados iniciais no banco

```
$ npm run seed
```

- Inicie a aplicação local através do comando

```
$ npm start
```

- A aplicação inicializará na rota http://localhost:3000/

**obs: para encerrar o container utilize:**

```
$ docker-compose down
```

#

## Documentação das rotas e retornos

- **Base URL**: http://localhost:3000/api/v1
- Você pode acessar a documentação das rotas clicando em [http://localhost:3000/doc](http://localhost:3000/doc)

#

## Tecnologias Utilizadas:

- NodeJS
- Express
- Knex
- Postgres
- Docker (docker-compose)
