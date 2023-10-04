const Cube = require('../model/Cube')

const cubes = [{
    id: 1,
    name: 'Rubic Cube',
    description: 'Traditional rubic cube',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrxH1AoIHNcK-6NkJCYMB_YTdUaL7Dm_QcadSnGTd6hKXt8njiQbe2eSUpQ&s',
    difficultyLevel: '3'
  },
  {
    id: 2,
    name: 'Mirror Cube',
    description: 'Very famous mirror cube',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjR578qrrPUT7ihgEEcTsGEIAGE5JpKiwpR8Ml14mFfZ2eoNESF-RHEMrCgQ&s',
    difficultyLevel: '5'
  }
]

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