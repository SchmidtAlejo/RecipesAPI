var express = require('express');
var router = express.Router();
const controller = require('../controllers/recipesLikes');

router.get('/', async (req, res) => {
  res.json(await controller.getLikes());
});

router.get('/:id', async (req, res) => {
  res.json(await controller.getLikeByRecipeId(req.params.id));
});

router.post('/', async (req, res) => {
  try{
   res.json(await controller.addLike(req.body.recipeId, req.body.userId));
  }
  catch (error){
    res.status(401).send(error.message);
  }
});

module.exports = router;
