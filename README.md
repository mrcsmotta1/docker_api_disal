# docker_api_disal

API de cadastro de peças com Ordem de serviço

> # Desafio técnico da Disal

## Requerimentos

Para rodar a aplicação é necessário:

[Docker](https://www.docker.com/)

[Docker Compose](https://docs.docker.com/compose/)

Para rodar teste de integração é necessário:

[Node](https://nodejs.org/en/)

[npm](https://www.npmjs.com/get-npm)

## Console Interface

### Executando

Navegue até a pasta **docker_api_disal** e execute o comando abaixo:

docker-compose build

Após a mensagem "**Successfully tagged docker_api_disal_backend:latest**", execute o comando abaixo:

docker-compose up

### Parando Container

Para excutar Stop no container e parar o projeto, execute o comando abaixo:

docker-compose down

## Api Interface

### Executando

Após a mensagem "**Servidor em execução na porta 5000**"

### Documentação das rotas

[Swagger](http://localhost:5000/api/v1/api-docs/)

### Executando requisições com o Postman

[Postman](https://documenter.getpostman.com/view/2333553/SztA78vK)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/90fb5ec64e82d1416ac5)

### Obs:

> **Para executar teste de integração, navegue até a pasta backend e execute o comando abaixo:**

npm test

> **Banco de dados MongoDB, esta rodando na porta 27017**

user: root

password: disal

> **Interface admin Mongo Express, esta rodando na porta 8081.**
