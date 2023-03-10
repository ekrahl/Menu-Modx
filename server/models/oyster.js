const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const OysterSchema = new Schema({
    name: String,
    location: String,
    size: String,
    desc: String,
    price: String,
    date: {
        type: String,
        default: Date.now()
    }
});

// Model
const Oyster = mongoose.model('Oyster', OysterSchema);


module.exports = Oyster;