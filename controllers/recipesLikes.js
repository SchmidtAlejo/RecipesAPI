const recipesLikes = require('../data/recipesLikes');

async function getLikes() {
  return recipesLikes.getLikes();
}

async function getLikeByRecipeId(id) {
  return recipesLikes.getLikeByRecipeId(id);
}

async function addLike(recipeId, userId) {
  return recipesLikes.addLike(recipeId, userId);
}

module.exports = {
  addLike,
  getLikes,
  getLikeByRecipeId,
};
