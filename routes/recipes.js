var express = require('express');
var router = express.Router();
const controller = require('../controllers/recipes');

router.get('/', async (req, res) => {
    if(req.query.ingridients){
        console.log("funcion 1");
        res.json(await controller.getIngridients());
    }
    if(req.query.ingridientItem){
        console.log("funcion 2");
        res.json(await controller.getRecipes(req.query.ingridientItem));
    }
    if(req.query.recipeId){
        console.log("funcion 3");
        res.json(await controller.getRecipeDetails(req.query.recipeId));
    }
    if(req.query.userId){
        console.log("funcion 4");
        res.json(await controller.getFavoritesRecipes(req.query.userId));
    }
  });

  module.exports = router;