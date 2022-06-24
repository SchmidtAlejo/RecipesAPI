const { ObjectId } = require('mongodb');
const conn = require('./conn');
const DATABASE = 'recipesAPI';
const USERS = 'users';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function updateData(query, newValues){
    const connectiondb = await conn.getConnection();
    const result = await connectiondb.db(DATABASE)
        .collection(USERS)
        .updateOne(query, newValues);
    return result;
}

async function getUsers() {
    const connectiondb = await conn.getConnection();
    const users = await connectiondb.db(DATABASE)
        .collection(USERS)
        .find()
        .toArray();
    return users;
}

async function getUserById(id) {
    const connectiondb = await conn.getConnection();
    const users = await connectiondb.db(DATABASE)
        .collection(USERS)
        .find({ _id: new ObjectId(id) })
        .toArray();
    return users;
}

async function addUser(user) {
    const connectiondb = await conn.getConnection();
    const users = await connectiondb.db(DATABASE)
        .collection(USERS)
        .find({email: user.email })
        .toArray();
    if(users.length>0){
        throw new Error("El email ingresado ya esta en uso")
    }
    user.password = await bcrypt.hash(user.password, 8);
    const newUser = {
        ...user, 
        favorites: [],
    }
    const result = await connectiondb.db(DATABASE)
        .collection(USERS)
        .insertOne(newUser);
    return result;
}

async function updateUserPassword(user) {
    const query = { _id: new ObjectId(user._id) };
    const passwordHash = await bcrypt.hash(user.password, 8);
    const newValues = {
        $set: {
            password: passwordHash,
        }
    };
    return await updateData(query, newValues);
}

async function findByCredentials(email, password) {
    const connectiondb = await conn.getConnection();
    const user = await connectiondb.db(DATABASE)
        .collection(USERS)
        .findOne({ email: email });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
        throw new Error('Credenciales no validas');
    }
    return user;
}

function generateToken(user) {
    const token = jwt.sign({ _id: user._id }, process.env.CLAVETOKEN, { expiresIn: '2h' });
    return token;
}

async function addRecipeFavorite(userId, recipeId){
    const user = await getUserById(userId);
    if(user[0].favorites.find((recipe)=>recipe===recipeId)){
        throw new Error("La receta ya esta en favoritos");
    }
    const newFavorites = user[0].favorites;
    newFavorites.push(recipeId);
    const query = { _id: new ObjectId(userId) };
    const newValues = {
        $set: {
            favorites: newFavorites,
        }
    };
    return await updateData(query, newValues);
}

async function removeRecipeFavorite(userId, recipeId){
    const user = await getUserById(userId);
    let newFavorites = user[0].favorites;
    const indexRemove = newFavorites.indexOf(recipeId);
    newFavorites.splice(indexRemove, 1);
    const query = { _id: new ObjectId(userId) };
    const newValues = {
        $set: {
            favorites: newFavorites,
        }
    };
    return await updateData(query, newValues);
}

module.exports = { getUsers, getUserById, addUser, updateUserPassword, findByCredentials, generateToken, addRecipeFavorite, removeRecipeFavorite };
