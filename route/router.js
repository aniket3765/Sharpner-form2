const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../controller/controller');

const router = express();
router.use(express.json());

router.get('/', controller.home);
router.get('/delet/:id',bodyParser.urlencoded(),controller.deleteItem);
router.get('/edit/:id',bodyParser.urlencoded(),controller.editItem);
router.post('/edit',bodyParser.urlencoded(),controller.eiditData);
router.get('/data',bodyParser.urlencoded(),controller.getItem);
router.post('/add',bodyParser.urlencoded(),controller.postItem);
  

module.exports = router;