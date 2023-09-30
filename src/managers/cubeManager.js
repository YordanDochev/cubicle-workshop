const uniqid = require('uniqid')

const cubes = [{
    id: 1,
    name: 'Rubic Cube',
    description: 'test',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrxH1AoIHNcK-6NkJCYMB_YTdUaL7Dm_QcadSnGTd6hKXt8njiQbe2eSUpQ&s',
    difficultyLevel: '3'
  },
  {
    id: 2,
    name: 'Mirror Cube',
    description: 'test1',
    imageUrl: 'https://m.media-amazon.com/images/I/71TrvUl50OL.__AC_SX300_SY300_QL70_FMwebp_.jpg&s',
    difficultyLevel: '5'
  }
]

const getAll = (search, from, to) => {
  let result = cubes.slice();

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

const getOne = (id) => cubes.find(cube => cube.id == id)

const createCube = (cubeData) =>{
    const newCube = {
    id: uniqid(),
    ...cubeData,
}
    cubes.push(newCube)

    return newCube
}

module.exports = {
    getAll,
    getOne,
    createCube
}