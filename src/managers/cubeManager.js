const Cube = require('../model/Cube')

const getAll = async (search, from, to) => {
  let result = await Cube.find().lean();
  

  //To do 
  if(search){
    result = result.filter(cube=> cube.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  }

  if(from){
    result = result.filter(cube=> cube.difficultyLevel >= Number(from))

  }

  if(to){
    result = result.filter(cube=> cube.difficultyLevel <= Number(to))

  }
  return result;
}

const getOne = (cubeId) => Cube.findById(cubeId).populate('accessories');

const createCube = (cubeData) => Cube.create(cubeData);

const attachAccessory = (cubeId, accessoryId ) => Cube.findByIdAndUpdate(cubeId, {$push:{accessories:accessoryId}})

const deleteCube = (cubeId) => Cube.findByIdAndDelete(cubeId)

const updateCube = (cubeId,cubeData) => Cube.findByIdAndUpdate(cubeId,cubeData);

module.exports = {
    getAll,
    getOne,
    createCube,
    attachAccessory,
    deleteCube,
    updateCube,
}