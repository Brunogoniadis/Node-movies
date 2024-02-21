# Node-movies

Este projeto fornece uma API RESTful para gerenciar vídeos, incluindo operações de criação, listagem, atualização e exclusão. Ele usa o Fastify como framework da API e o PostgreSQL como banco de dados.

## Endpoints da API

**POST /videos**

* Cria um novo vídeo.

**GET /videos**

* Lista todos os vídeos (com pesquisa opcional).

**PUT /videos/:id**

* Atualiza um vídeo existente.

**DELETE /videos/:id**

* Exclui um vídeo existente.

## Instalação e Uso

**Instalação:**

```
npm install
```

**Uso:**

Execute o servidor API com:

```
node server.js
```
