const express = require("express");
const { getAll, createCube } = require("../managers/cubeManager");
const router = express.Router();

router.get("/create", (req, res) => {
    console.log(getAll());
  res.render("create");
});

router.post("/create", (req, res) => {
  const { name, 
    description, 
    imageUrl, 
    difficultyLevel 
} = req.body;

  createCube(name, description, imageUrl, Number(difficultyLevel));

  res.redirect("/");
});

module.exports = router;
