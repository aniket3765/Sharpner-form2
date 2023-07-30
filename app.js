const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const router = require('./route/router');
const path = require('path');
app.use(router)

app.use(express.static('public'));
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

sequelize.sync({})
.then(result => {
    app.listen(5000);
}).catch(err => {console.log(err)})

