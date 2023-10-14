const express = require("express");
const {createAccessory} = require('../managers/accessoryManager')
const {extractErrorMessages} = require('../utils/errorHelper')

const router = express.Router();

router.get("/create", (req, res) => {
  res.render("./accessory/create");
});

router.post("/create", async (req, res) => {
  const { name, description, imageUrl } = req.body;
  try {
    await createAccessory({name, description, imageUrl})
    res.redirect('/')
    
  } catch (error) {
    const errorMessages = extractErrorMessages(error)
    res.status(404).render("accessory/create",{errorMessages})
  }

});

module.exports = router;
