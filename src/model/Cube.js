const mongoose = require('mongoose')

const cubeSchema = new mongoose.Schema({
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
    difficultyLevel:Number,
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }],
    cubeOwner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Cube = mongoose.model('Cube',cubeSchema);

module.exports = Cube;