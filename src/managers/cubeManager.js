const cubes = [{
    name: 'Rubic Cube',
    description: 'test',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrxH1AoIHNcK-6NkJCYMB_YTdUaL7Dm_QcadSnGTd6hKXt8njiQbe2eSUpQ&s',
    difficultyLevel: '3'
  },
  {
    name: 'Mirror Cube',
    description: 'test1',
    imageUrl: 'https://m.media-amazon.com/images/I/71TrvUl50OL.__AC_SX300_SY300_QL70_FMwebp_.jpg&s',
    difficultyLevel: '5'
  }
]

const getAll = () => cubes.slice()

const createCube = (cubeData) =>{
    const newCube = {
    id: cubes.length+1,
    ...cubeData}
    cubes.push(newCube)

    return newCube
}

module.exports = {
    getAll,
    createCube
}