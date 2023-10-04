const Accessory = require('../model/Accessory');

const createAccessory = (accessoryData) => Accessory.create(accessoryData);

const getAllAccessories = () => Accessory.find();

const getOthers = (accessoryIds) => Accessory.find({_id: {$nin:accessoryIds}})
module.exports = {
    createAccessory,
    getAllAccessories,
    getOthers
}