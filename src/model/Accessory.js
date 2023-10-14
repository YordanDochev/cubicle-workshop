const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name:{
        type: String,
        minLength: [5, "Cube name must be at least 5 characters"],
        match: [/^[A-Za-z0-9\s]+$/, "Username must be contain only English letters, digits and whitespaces"]
    },
    description:{
        type: String,
        minLength: [20, "Cube description must be at least 20 characters"],
        match: [/^[A-Za-z0-9\s]+$/, "Username must be contain only English letters, digits and whitespaces"]
    }, 
    imageUrl:{
        type: String,
        match:[/((https?:\/\/)|(\/)|(..\/))(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,"The image url is invalid"]
    }, 
})

const Accessory = mongoose.model('Accessory',accessorySchema);

module.exports = Accessory;