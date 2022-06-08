var express = require('express');
var router = express.Router();
const controller = require('../controllers/users');

/* GET users listing. */
router.get('/', async (req, res) => {
  res.json(await controller.getUsers());
});

router.get('/:id', async (req, res) => {
  res.json(await controller.getUserById(req.params.id));
});

router.post('/', async (req, res) =>{
  res.json(await controller.addUser(req.body));
})

router.put('/', async (req, res) =>{
  res.json(await controller.updateUserPassword(req.body));
})

module.exports = router;
