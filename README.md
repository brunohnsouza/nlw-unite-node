# pass.in

O pass.in oferece acesso a recursos para registro e recuperação de informações para gestão de participantes em eventos presenciais.

## Índice

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Endpoints](#endpoints)
- [Licença](#licença)

## Requisitos

- **Fastify**: ^4.26.2
- **Fastify CORS**: ^9.0.1
- **Fastify Swagger**: ^8.14.0
- **Fastify Swagger UI**: ^3.0.0
- **Prisma Client**: ^5.11.0
- **Zod**: ^3.22.4
- **Day.js**: ^1.11.10
- **Fastify Type Provider Zod**: ^1.1.9

## Instalação

Siga as etapas abaixo para configurar e instalar a API em seu ambiente local:

1. Clone o repositório e acesse o diretório:

```bash
git clone git@github.com:brunohnsouza/nlw-unite-node.git
cd nlw-unite-node
```

2. Instale as dependências do projeto usando o `Node Package Manager (NPM)`:

```bash
npm install
```

3. Inicie o servidor em modo de desenvolvimento:

```bash
npm run dev
```

A API estará acessível em `http://localhost:3333`.

## Endpoints

Principais endpoints da API, com informações sobre seus métodos HTTP, descrição, parâmetros, exemplos de solicitações e exemplos de respostas.

| Endpoint                       | Método | Descrição                              | Parâmetros                       | Exemplo de Solicitação                                        | Exemplo de Resposta        |
| ------------------------------ | ------ | -------------------------------------- | -------------------------------- | ------------------------------------------------------------- | -------------------------- |
| /events                        | POST   | Criar um evento                        | title, details, maximumAttendees | POST /events                                                  | Status 201 Created, [JSON] |
| /events/eventId                | GET    | Capturar um evento                     | eventId                          | GET /events/123e4567-e89b-12d3-a456-426614174000              | Status 200 Ok, [JSON]      |
| /events/eventId/attendees      | GET    | Capturar participantes de um evento    | eventId, pageIndex, query        | GET /events/123e4567-e89b-12d3-a456-426614174000/attendees    | Status 200 Ok, [JSON]      |
| /events/eventId/register       | POST   | Registar um participante               | eventId, name, email             | POST /events/123e4567-e89b-12d3-a456-426614174000/register    | Status 201 Created, [JSON] |
| /attendees/attendeeId/badge    | GET    | Capturar credencial de um participante | attendeeId                       | GET /attendees/123e4567-e89b-12d3-a456-426614174000/badge     | Status 200 Ok, [JSON]      |
| /attendees/attendeeId/check-in | POST   | Realizar check-in de um participante   | attendeeId                       | POST /attendees/123e4567-e89b-12d3-a456-426614174000/check-in | Status 201 Created         |

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
