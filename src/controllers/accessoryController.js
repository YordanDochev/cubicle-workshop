const express = require("express");
const {createAccessory} = require('../managers/accessoryManager')

const router = express.Router();

router.get("/create", (req, res) => {
  res.render("./accessory/create");
});

router.post("/create", async (req, res) => {
  const { name, description, imageUrl } = req.body;

    await createAccessory({name, description, imageUrl})

    res.redirect('/')
});

module.exports = router;
