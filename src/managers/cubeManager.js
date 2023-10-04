const Cube = require('../model/Cube')

const getAll = async (search, from, to) => {
  const cubes = await Cube.find().lean();
  
  if(search){
    result = result.filter(cube=> cube.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  }

  if(from){
    result = result.filter(cube=> cube.difficultyLevel >= Number(from))

  }

  if(to){
    result = result.filter(cube=> cube.difficultyLevel <= Number(to))

  }
  return cubes;
}

const getOne = (cubeId) => Cube.findById(cubeId);

const createCube = (cubeData) => Cube.create(cubeData);

module.exports = {
    getAll,
    getOne,
    createCube
}