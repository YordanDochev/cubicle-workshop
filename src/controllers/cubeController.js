const express = require("express");
const { getOne, createCube } = require("../managers/cubeManager");
const router = express.Router();

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {
  const { name, 
    description, 
    imageUrl, 
    difficultyLevel 
} = req.body;

  await createCube({
    name, 
    description, 
    imageUrl, 
    difficultyLevel: Number(difficultyLevel)
});

  res.redirect("/");
});

router.get('/:cubeId/details', async (req,res)=>{
  const cube = await getOne(req.params.cubeId).lean();

  if(!cube){
    return res.redirect('/404')
  }
  res.render('details',{cube})
});

router.get('/:cubeID/attach-accessory' ,(req,res)=>{
  res.render('./accessory/attach')
})

module.exports = router;
