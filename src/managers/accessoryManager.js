const Accessory = require('../model/Accessory');

const createAccessory = (accessoryData) => Accessory.create(accessoryData);

const getAllAccessories = () => Accessory.find();
module.exports = {
    createAccessory,
    getAllAccessories
}