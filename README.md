# Backend VO2
This is a Typescript NodeJS RestAPI with CRUD Transactions apis

Technologies added
* **[Mongo Connection Helper](https://github.com/gerardabsi/backend-vo2/blob/master/src/mongo-connection.ts)** - A common MongoDB helper class .
* **Joi** - For declarative payload validation
* **[Middleware for easier async/await](https://github.com/gerardabsi/backend-vo2/blob/master/src/middleware/request-middleware.ts)** - Error Hander.
* **[OpenAPI 3.0 Spec](https://github.com/gerardabsi/backend-vo2/blob/master/openapi.json)** - Swagger Documentation `http://localhost:3001/dev/api-docs`
* **[.env file for configuration](#environment)**
* **[Winston Logger](#logging)**
* **ESLINT** - ESLINT for Linting.
* **Jest** - For Testing

## I. Installation
#### 1. Clone this repo

```
$ git clone git@github.com:gerardabsi/backend-vo2.git
$ cd backend-vo2
```

#### 2. Install dependencies

```
$ npm i
```

#### 3. Start dev server

```
$ npm start
```
* **API Server** running at `http://localhost:3001`
* **Swagger UI** at `http://localhost:3000/dev/api-docs`
* **MongoDB** running at `mongodb://localhost:27017`

## II Environment
To edit environment variables, create a file with name `.env` and copy the contents from `.env.default` to start with.

| Var Name  | Type  | Default | Description  |
|---|---|---|---|
| NODE_ENV  | string  | `development` |API runtime environment. eg: `staging`  |
|  PORT | number  | `3001` | Port to run the API server on |
|  MONGO_URL | string  | `mongodb://localhost:27017/transactions` | URL for MongoDB |

## III Tests
```
$ npm test
```

## IV Folder Structure

```
+-- src
|   +-- controllers
|   |   +-- transaction
|   |   |   +-- add.ts
|   |   |   +-- delete.ts
|   |   |   +-- index.ts
|   |   |   +-- search.ts
|   |   |   +-- update.ts
|   +-- errors
|   |   +-- application-error.ts
|   |   +-- bad-request.ts
|   +-- middleware
|   |   +-- request-middleware.ts
|   +-- models
|   |   +-- plugin
|   |   |   +-- timestamp-plugin.ts
|   |   +-- Transaction.ts
|   +-- public
|   |   +-- index.html
|   +-- app.ts
|   +-- mongo-connection.ts
|   +-- routes.ts
|   +-- server.ts
+-- .env
+-- .env.default
+-- .eslintrc.json
+-- .gitignore
+-- jest.config.js
+-- nodemon.json
+-- openapi.json
+-- package-lock.json
+-- package.json
+-- README.md
+-- tsconfig.json
```

