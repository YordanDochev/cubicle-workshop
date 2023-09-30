const express = require('express')
const {getAll} = require('../managers/cubeManager')

const router = express.Router();

router.get('/' , (req,res)=>{
    res.render('index')
})

router.get('/about', (req,res)=>{
    res.render('about')
})

module.exports = router;