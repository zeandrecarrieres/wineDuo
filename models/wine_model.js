const mongoose = require('mongoose');


const wineSchema = new mongoose.Schema({
    type: String,
    name: String,
    region: String,
    harvest: Number,
    alcohol: Number,
    grape1: String,
    grape2: String,
    grape3: String,
    photo: String,
    place: String,
    note:Number,
    comments: String,   
},
{ timestamps: true}
);


module.exports = mongoose.model ('Wine', wineSchema)