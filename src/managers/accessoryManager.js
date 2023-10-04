const Accessory = require('../model/Accessory');

const createAccessory = (accessoryData) => Accessory.create(accessoryData);


module.exports = {
    createAccessory,
}