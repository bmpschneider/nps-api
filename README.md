<h3 align="center">
    <img width="300px" src="https://i.imgur.com/JkVMEgs.png">
    <br><br>
    <p align="center">
      <a href="#-technology">Technology</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-installing">Installing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-configuring">Configuring</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-usage">Usage</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-routes">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-requests">Requests</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-running-the-tests">Running the tests</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;      
      <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  </p>

</h3>
<p align="center">
  <a href="https://rocketseat.com.br">
    <img src="https://i.imgur.com/1o7urkT.png">
  </a>
</p>

## 🔖 About

O <strong>NPS-API</strong> is a Restful API for Net Promoter Score.

Web application built on the trail <strong>NodeJS</strong> on the <strong>Next Level Week</strong> distributed by [Rocketseat](https://rocketseat.com.br/).

## 🚀 Technology

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [YARN](https://yarnpkg.com/)
- [Jest](https://jestjs.io/)
- [Typescript](https://www.typescriptlang.org)
- [Handlebars](https://handlebarsjs.com)

## 🔗 Installing

Easy peasy lemon squeezy:
```
$ yarn
```
Or:
```
$ npm install
```

## 🔗 Configuring
The application use just one database: [SQLite](https://www.sqlite.org/index.html).

### SQLite
Store all users and surveys. For more information to how to setup your database see:
* [typeorm](https://typeorm.io/#/using-ormconfig)
> You can find the application's `ormconfig.json` file in the root folder.

#### Migrations
Remember to run the database migrations:
```
$ yarn ts-node-dev ./node_modules/typeorm/cli.js migration:run
```
Or:
```
$ yarn typeorm migration:run
```
> See more information on [TypeORM Migrations](https://typeorm.io/#/migrations).

### .env
In this file you may configure app's port and a url to documentation (this will be returned with error responses, see [error section](#error-handling)). Rename the `.env.example` in the root directory to `.env` then just update with your settings.

|key|description|default
|---|---|---
|URL_MAIL|Url to send the NPS answer|`http://localhost:3000/answers`
|PORT|Port number where the app will run.|`3000`


### Notion
- [Environment](https://www.notion.so/Configura-es-do-ambiente-Node-js-ae9fea3f78894139af4268d198294e2a)

## 🔗 Usage
To start up the app run:
```
$ yarn start
```

## 🚀 Routes
|route|HTTP Method|params|description
|:---|:---:|:---:|:---:
|`/users`|POST|Body with user `name` and `email`.|Create a new user
|`/surveys`|GET| - |Lists surveys.
|`/surveys`|POST|Body with user `title` and `description`.|Create a new survey
|`/send_mail`|POST|Body with user `email` and a `survey_id`.|Send the NPS to provided user
|`/answers`|GET| - |List survey answers
|`/answers/:value`|GET|survey `value` url parameter and survey user `id` query parameter.|Set user's avaliation to one survey
|`/nps/:survey_id`|GET|`survey_id` url parameter.|Show survey NPS

## 🚀 Requests
* `POST /users`

Request body:
```json
{
  "name": "Bruno Miguel",
  "email": "brunomiguel@gmail.com"
}
```

* `POST /survey`

Request body:
```json
{
  "title": "Internal Directives",
  "description": "Surveys Answers"
}
```

* `POST /send_mail`

Request body:
```json
{
  "email": "brunomiguel@gmail.com",
  "survey_id": "388017f8-dfdf-4681-9112-e1bb0de009ec"
}
```

## 🚀 Running the tests
[Jest](https://jestjs.io/) was the choice to test the app, to run:
```
$ yarn test
```
Or:
```
$ npm run test
```

## 🤔 How to contribute

- Fork this repository;
- Create a branch with your feature:`git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: my new feature'`;
- Push to your branch:`git push origin my-feature`.

After the merge of your pull request is done, you can delete your branch.


<h4 align="center">
 Done by <a href="https://www.linkedin.com/in/brunopschneider/" target="_blank">Bruno Schneider</a>
</h4>