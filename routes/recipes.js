var express = require('express');
var router = express.Router();
const controller = require('../controllers/recipes');

router.get('/', async (req, res) => {
    if(req.query.ingridients){
        res.json(await controller.getIngridients());
    }
    if(req.query.ingridient){
        res.json(await controller.getRecipes(req.query.ingridient));
    }
    if(req.query.recipeId){
        res.json(await controller.getRecipeDetails(req.query.recipeId));
    }
    if(req.query.userId){
        res.json(await controller.getFavoritesRecipes(req.query.userId));
    }
  });

  module.exports = router;