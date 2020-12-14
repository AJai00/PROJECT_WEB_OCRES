const { Schema, model } = require('mongoose');

const name = 'Users';

const attributes = {
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: Number,
        required: true
    },
    vehicule: {
        type: String,
        required: true
    },
    
};

const options = {};

const UserSchema = new Schema(attributes, options);

const UserModel = model(name, UserSchema);

module.exports = UserModel;