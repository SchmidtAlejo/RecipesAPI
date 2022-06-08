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

module.exports = {getUsers, getUserById, addUser, updateUserPassword};
