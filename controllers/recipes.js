const API_HOST = "https://themealdb.com/api/json/v1/1";
const users = require('../data/users');
const fetch =  require('node-fetch');

async function getIngridients() {
  try {
    const url = `${API_HOST}/list.php?i=list`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Solicitud fallida", error);
  }
}


async function getRecipes(ingridient) {
  try {
    const url = `${API_HOST}/filter.php?i=` + ingridient;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Solicitud fallida", error);
  }
}

async function getRecipeDetails(recipeId) {
  try {
    const url = `${API_HOST}/lookup.php?i=${recipeId}`;
    const response = await fetch(url);
    let result = await response.json();
    result= result.meals[0];
    return result;
  } catch (error) {
    console.log("Solicitud fallida", error);
  }
}

async function getFavoritesRecipes(idUser) {
  try {
    async function asyncForEach(array, callback) {
      for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
      }
    }
    const user = await users.getUserById(idUser);
    const url = `${API_HOST}/lookup.php?i=`;
    const listaDeRecetas = [];
    const search= async()=>{
      await asyncForEach(user[0].favorites , async (idReceta) =>{;
        let result = await getRecipeDetails(idReceta);
        listaDeRecetas.push(result);
      })
      return listaDeRecetas;
    }
    return await search();
  } catch (error) {
    console.log("Solicitud fallida", error);
  }
}

module.exports = {getIngridients, getRecipes, getRecipeDetails, getFavoritesRecipes}