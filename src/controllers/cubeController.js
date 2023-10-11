const express = require("express");
const { getOne, createCube,attachAccessory ,} = require("../managers/cubeManager");
const {getOthers} = require('../managers/accessoryManager')
const router = express.Router();

router.get("/create", (req, res) => {
  res.render("cubes/create");
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
  res.render('cubes/details',{cube})
});

router.get('/:cubeID/attach-accessory' ,async(req,res)=>{
  const cube = await getOne(req.params.cubeID).lean();
  const accessories = await getOthers(cube.accessories).lean();
  let hasAccessories = accessories.length > 0;
  res.render('./accessory/attach',{cube, accessories ,hasAccessories})
})

router.post('/:cubeID/attach-accessory',async (req,res)=>{
    const {accessory:accessoryId} = req.body;

    const cubeId = req.params.cubeID

    await attachAccessory(cubeId,accessoryId)

    res.redirect(`/cubes/${cubeId}/details`)
})

module.exports = router;
