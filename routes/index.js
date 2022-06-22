var express = require('express');
var router = express.Router();
const controller = require('../controllers/createData');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async function(req, res){
  await controller.createData();
  res.send('Se crearon exitosamente');
})

module.exports = router;
