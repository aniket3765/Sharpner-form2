// 👇️ using require() CommonJS imports
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = require('./route/router');
app.use(express.static(__dirname + '/public'));
app.use(router);

app.use(bodyParser.json);
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.get('/register', function (req, res) {
  // 👇️ if your HTML file is in the root directory (next to package.json)
  res.sendFile(__dirname + '/index.html');
});

app.post('/register', function (req, res) {
  console.log(req.body.username+
    `username: ${req},
    password: ${req.body.password}`,
  );

  res.send(
    `username: ${req.body.username},
    password: ${req.body.password}`,
  );
});

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
