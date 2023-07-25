const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../controller/controller');

const router = express();
router.use(express.json());

router.get('/', controller.homePage);
router.get('/delete/:id',bodyParser.urlencoded(),controller.deleteItem);
router.get('/edit/:id',bodyParser.urlencoded(),controller.editItem);
router.post('/edit/:id',bodyParser.urlencoded(),controller.eiditData);
router.get('/add',bodyParser.urlencoded(),controller.getItem);
router.post('/add',bodyParser.urlencoded(),controller.postItem);
  

module.exports = router;