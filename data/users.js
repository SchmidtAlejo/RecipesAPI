const { ObjectId } = require('mongodb');
const conn = require('./conn');
const DATABASE = 'recipesAPI';
const USERS = 'users';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function getUsers(){
    const connectiondb = await conn.getConnection();
    const users = await connectiondb.db(DATABASE)
                                    .collection(USERS)
                                    .find()
                                    .toArray();
    return users;
}

async function getUserById(id){
    const connectiondb = await conn.getConnection();
    const users = await connectiondb.db(DATABASE)
                                    .collection(USERS)
                                    .find({_id: new ObjectId(id)})
                                    .toArray();
    return users;
}

async function addUser(user){
    const connectiondb = await conn.getConnection();
    user.password = await bcrypt.hash(user.password, 8);
    const result = await connectiondb.db(DATABASE)
                                        .collection(USERS)
                                        .insertOne(user);
    return result;
}

async function updateUserPassword(user){
    const query = {_id: new ObjectId(user._id)};
    const passwordHash = await bcrypt.hash(user.password, 8);
    const newValues = {$set:{
       password: passwordHash,
    }};
    const connectiondb = await conn.getConnection();
    const result = await connectiondb.db(DATABASE)
                                        .collection(USERS)
                                        .updateOne(query, newValues);
    return result;
}

async function findByCredentials(email, password){
    const connectiondb = await conn.getConnection();
    const user = await connectiondb.db(DATABASE)
                    .collection(USERS)
                    .findOne({email: email});

    const isMatch = await bcrypt.compare(password, user.password);
    if(!user || !isMatch){
        throw new Error('Credenciales no validas');
    }
    return user;
}

function generateToken(user){
    const token = jwt.sign({_id:user._id}, process.env.CLAVETOKEN , {expiresIn: '2h'} );
    return token;
}

module.exports = {getUsers, getUserById, addUser, updateUserPassword, findByCredentials, generateToken};
