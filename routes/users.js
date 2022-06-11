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

router.post('/login',async (req, res)=>{
  try {
    const user = await controller.findByCredentials(req.body.email, req.body.password);
    const token = controller.generateToken(user);
    res.send({user, token});
  } catch (error) {
    res.status(401).send(error.message);
  }
});

module.exports = router;
