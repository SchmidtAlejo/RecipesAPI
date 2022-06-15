const conn = require('./conn');
const { ObjectId } = require('mongodb');
const DATABASE = 'recipesAPI';
const LIKES = 'recipesLikes';

async function getLikes() {
  const connectiondb = await conn.getConnection();
  let likes = await connectiondb.db(DATABASE)
    .collection(LIKES)
    .find()
    .toArray();

  return likes.sort((likeA, likeB) => likeA.likes < likeB.likes ? 1 : -1);
}

async function getLikeByRecipeId(id) {
  const connectiondb = await conn.getConnection();
  const result = await connectiondb.db(DATABASE)
    .collection(LIKES)
    .find({ recipe_id: id })
    .toArray();

  return result;
}

async function addLike(id) {
  let result;
  let recipeLike;
  const connectiondb = await conn.getConnection();

  try {
    recipeLike = await getLikeByRecipeId(id);
  } catch (error) {
    throw new Error('Esta receta no tiene likes todavia.' + error);
  } finally {
    if (recipeLike === undefined || recipeLike.length == 0) {
      const newRecipeLike = {
        recipe_id: id,
        likes: 1,
      }
      result = await createRecipeLikes(newRecipeLike);
    } else {
      const query = { _id: new ObjectId(recipeLike[0]._id) };
      const newValues = {
        $set: {
          likes: recipeLike[0].likes + 1,
        }
      };
      result = await connectiondb.db(DATABASE)
        .collection(LIKES)
        .updateOne(query, newValues);
    }
    return result;
  }
}

async function createRecipeLikes(newRecipe) {
  const connectiondb = await conn.getConnection();
  const result = await connectiondb.db(DATABASE)
    .collection(LIKES)
    .insertOne(newRecipe)

  return result;
}

module.exports = {
  addLike,
  getLikes,
  getLikeByRecipeId
};
