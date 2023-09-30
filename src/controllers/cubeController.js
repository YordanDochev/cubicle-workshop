const express = require("express");
const { getOne, createCube } = require("../managers/cubeManager");
const router = express.Router();

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", (req, res) => {
  const { name, 
    description, 
    imageUrl, 
    difficultyLevel 
} = req.body;

  createCube({
    name, 
    description, 
    imageUrl, 
    difficultyLevel: Number(difficultyLevel)
});

  res.redirect("/");
});

router.get('/:cubeId/details',(req,res)=>{
  const id = req.params.cubeId;
  const cube = getOne(id)
  res.render('details',{cube})
});

module.exports = router;
