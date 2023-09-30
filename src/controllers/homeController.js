const express = require('express')
const {getAll} = require('../managers/cubeManager')

const router = express.Router();

router.get('/' , (req,res)=>{
    const {search, from, to} = req.query
    const cubes = getAll(search, from, to)
    res.render('index',{cubes})
})

router.get('/about', (req,res)=>{
    res.render('about')
})

router.get('/404',(req,res)=>{
    res.render('404')
})


module.exports = router;