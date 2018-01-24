# Hello Express

--------------------------------------------------------------------------------

## Requirements

Start our first Express project, Hello Express! To practice our very basic skills building simple REST API with Node.js

### Input

- Various programs we built before

### Process

- Install Express on your project
-

### Output

- REST API that can handle basic HTTP methods
  - GET
  - POST
  - PUT
  - DELETE

--------------------------------------------------------------------------------

## Level 0

- Initialize your node project first

```sh
npm init
```

- Always remember to ignore `node_modules`

```sh
echo node_modules > .gitignore
```

- Install Express using `npm` or `yarn`

```sh
# using npm
npm i express
# using yarn
yarn add express
```

- Create a basic Express app in `index.js`

```js
const express = require("express")
const app = express()

app.get("/", function (req, res) {
  res.send("Hello World!")
})

app.listen(3000, function () {
  console.log("Example app listening on port 3000!")
})
```

- Create a `start` `script` in `package.json`

```json
{
  ...
  "scripts": {
    "start": "node index"
  }
  ...
}
```

- Test if that works

```sh
npm start
```

- Awesome!

--------------------------------------------------------------------------------

## Level 1

- Read the documentation on [Express](https://expressjs.com)
- Start to implement various REST API routes/requests: `GET`, `POST`, `PUT`, `DELETE`
- Congrats!

--------------------------------------------------------------------------------

## Level 2

- Compare between `res.send`/`res.json` and `res.render`
- Response with either JSON or webpage

--------------------------------------------------------------------------------

## Level 3

- Explore with [Express application generator](https://www.npmjs.com/package/express-generator)
