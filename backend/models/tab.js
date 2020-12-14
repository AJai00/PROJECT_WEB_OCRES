const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const TabSchema = new Schema({
    id: Number,
    nom: String,
    prénom: String,
    vehicule: String
});

//Model
const Tab = mongoose.model('Tab', TabSchema);

module.exports = Tab;