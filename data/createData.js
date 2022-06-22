const conn = require('./conn');
const DATABASE = 'recipesAPI';
const USERS = 'users';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const LIKES = 'recipesLikes';
const recipesLikesData = require('../data/recipesLikes');
const usersData = require('../data/users');

async function createUsers(){
    const password1 = await bcrypt.hash('password1', 8);
    const password2 = await bcrypt.hash('password2', 8);
    const password3 = await bcrypt.hash('password3', 8);
    const user1 = {
        email: 'demo@demo.com',
        password: password1,
    }
    const user2 = {
        email: 'demo2@demo.com',
        password: password2,
    }
    const user3 = {
        email: 'demo3@demo.com',
        password: password3,
    }
    await usersData.addUser(user1);
    await usersData.addUser(user2);
    await usersData.addUser(user3);
}

async function createLikes(){
    const users = await usersData.getUsers();

    const listaUsuarios = [users[0]._id, users[1]._id, users[2]._id]

    const newRecipeLike1 = {
        recipe_id: 52768,
        likes: 101,
        users: listaUsuarios,
    }
    const newRecipeLike2 = {
        recipeId: 52893,
        likes: 81,
        users: listaUsuarios,
    }
    const newRecipeLike3 = {
        recipe_id: 53049,
        likes: 90,
        users: listaUsuarios,
    }
    const newRecipeLike4 = {
        recipe_id: 53050,
        likes: 45,
        users: listaUsuarios,
    }
    const newRecipeLike5 = {
        recipe_id: 52767,
        likes: 63,
        users: listaUsuarios,
    }
    const newRecipeLike6 = {
        recipe_id: 52792,
        likes: 1111,
        users: listaUsuarios,
    }
    const newRecipeLike7 = {
        recipe_id: 52803,
        likes: 19,
        users: listaUsuarios,
    }
    const newRecipeLike8 = {
        recipe_id: 52807,
        likes: 178,
        users: listaUsuarios,
    }
    const newRecipeLike9 = {
        recipe_id: 52812,
        likes: 248,
        users: listaUsuarios,
    }
    const newRecipeLike10 = {
        recipe_id: 52824,
        likes: 19,
        users: listaUsuarios,
    }
    const newRecipeLike11 = {
        recipe_id: 52826,
        likes: 21,
        users: listaUsuarios,
    }
    const newRecipeLike12 = {
        recipe_id: 52834,
        likes: 136,
        users: listaUsuarios,
    }
    const newRecipeLike13 = {
        recipe_id: 52842,
        likes: 178,
        users: listaUsuarios,
    }
    const newRecipeLike14 = {
        recipe_id: 52848,
        likes: 11,
        users: listaUsuarios,
    }
    const newRecipeLike15 = {
        recipe_id: 52855,
        likes: 91,
        users: listaUsuarios,
    }
    const newRecipeLike16 = {
        recipe_id: 52873,
        likes: 93,
        users: listaUsuarios,
    }
    const newRecipeLike17 = {
        recipe_id: 52874,
        likes: 108,
        users: listaUsuarios,
    }
    const newRecipeLike18 = {
        recipe_id: 52878,
        likes: 79,
        users: listaUsuarios,
    }
    const newRecipeLike19 = {
        recipe_id: 52891,
        likes: 49,
        users: listaUsuarios,
    }
    const newRecipeLike20 = {
        recipe_id: 52894,
        likes: 10,
        users: listaUsuarios,
    }
    await recipesLikesData.createRecipeLikes(newRecipeLike1);
    await recipesLikesData.createRecipeLikes(newRecipeLike2);
    await recipesLikesData.createRecipeLikes(newRecipeLike3);
    await recipesLikesData.createRecipeLikes(newRecipeLike4);
    await recipesLikesData.createRecipeLikes(newRecipeLike5);
    await recipesLikesData.createRecipeLikes(newRecipeLike6);
    await recipesLikesData.createRecipeLikes(newRecipeLike7);
    await recipesLikesData.createRecipeLikes(newRecipeLike8);
    await recipesLikesData.createRecipeLikes(newRecipeLike9);
    await recipesLikesData.createRecipeLikes(newRecipeLike10);
    await recipesLikesData.createRecipeLikes(newRecipeLike11);
    await recipesLikesData.createRecipeLikes(newRecipeLike12);
    await recipesLikesData.createRecipeLikes(newRecipeLike13);
    await recipesLikesData.createRecipeLikes(newRecipeLike14);
    await recipesLikesData.createRecipeLikes(newRecipeLike15);
    await recipesLikesData.createRecipeLikes(newRecipeLike16);
    await recipesLikesData.createRecipeLikes(newRecipeLike17);
    await recipesLikesData.createRecipeLikes(newRecipeLike18);
    await recipesLikesData.createRecipeLikes(newRecipeLike19);
    await recipesLikesData.createRecipeLikes(newRecipeLike20);
}

async function createData(){
    await createUsers();
    await createLikes();
}
module.exports = {createData};
