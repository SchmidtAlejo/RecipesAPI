const recipesLikes = require('../data/recipesLikes');

async function getLikes() {
  return recipesLikes.getLikes();
}

async function getLikeByRecipeId(id) {
  return recipesLikes.getLikeByRecipeId(id);
}

async function addLike(id) {
  return recipesLikes.addLike(id);
}

module.exports = {
  addLike,
  getLikes,
  getLikeByRecipeId,
};
