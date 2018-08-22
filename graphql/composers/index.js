const { composeWithMongoose } = require('graphql-compose-mongoose');
const keystone = require('keystone');


// Mongoose Models

const User = keystone.list('User').model;

const {
    UserTCOptions
} = require('./config');

// Exports

const UserTC = (exports.UserTC = composeWithMongoose(User, UserTCOptions));

// Add JWT to user models for Login

UserTC.addFields({ token: 'String'})