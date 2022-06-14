const users = require('../data/users');

async function getUsers(){
    return users.getUsers();
}

async function getUserById(id){
    return users.getUserById(id);
}

async function addUser(user){
    return users.addUser(user);
}

async function updateUserPassword(user){
    return users.updateUserPassword(user);
}

async function findByCredentials(email,password){
    return users.findByCredentials(email,password);
}

async function generateToken(user){
    return users.generateToken(user);
}

module.exports = {getUsers, getUserById, addUser, updateUserPassword, findByCredentials, generateToken};
