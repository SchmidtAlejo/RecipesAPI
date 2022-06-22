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
  try{
  res.json(await controller.addUser(req.body));
  }
  catch (error) {
    res.status(401).send(error.message);
  }
})

router.put('/', async (req, res) =>{
  res.json(await controller.updateUserPassword(req.body));
})

router.post('/login',async (req, res)=>{
  try {
    const user = await controller.findByCredentials(req.body.email, req.body.password);
    const token = await controller.generateToken(user);
    res.send({user, token});
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.put('/addFavorites',async (req, res)=>{
  try{
    res.json(await controller.addRecipeFavorite(req.body.userId, req.body.recipeId));
  }
  catch ( error) {
    res.status(401).send(error.message);
  }
});

router.put('/removeFavorites',async (req, res)=>{
  res.json(await controller.removeRecipeFavorite(req.body.userId, req.body.recipeId));
});

module.exports = router;
