const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const router = require('./route/router');
const path = require('path');
app.use(router)

app.use(express.static(path.join(__dirname + '/public')));
app.set('view engine', 'ejs');
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

sequelize.sync({})
.then(result => {
    app.listen(4000);
}).catch(err => {console.log(err)})

