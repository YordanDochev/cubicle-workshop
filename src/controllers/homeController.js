const express = require('express')
const {getAll} = require('../managers/cubeManager')

const router = express.Router();

router.get('/' , (req,res)=>{
    const cubes = getAll()
    res.render('index',{cubes})
})

router.get('/about', (req,res)=>{
    res.render('about')
})


module.exports = router;