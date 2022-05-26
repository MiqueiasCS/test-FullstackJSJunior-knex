## Instalação

- Primeiro faça o fork deste [repositório]().

- Em seguida faça um git clone para a sua maquina

- Configure suas variáveis de ambiente seguindo o `.env.example`

- Instale as dependencias necessárias utilizando o comando

```
$ npm install
```

- Crie o container com docker compose

```
$ docker-compose up
```

- Crie as tabelas no banco de dados através do comando

```
$ npm run migrate
```

- Inicie a aplicação local através do comando

```
$ npm start
```

- A aplicação inicializará na rota http://localhost:3000/. Você deverá ver algo semelhante ao snippet logo abaixo no seu terminal:

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
