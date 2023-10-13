const express = require("express");
const { getDifficultyLevelViewData } = require("../utils/viewHelper");
const {
  getOne,
  createCube,
  attachAccessory,
  deleteCube,
  updateCube,
} = require("../managers/cubeManager");
const { getOthers } = require("../managers/accessoryManager");
const { isAuthenticated } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/create", isAuthenticated, (req, res) => {
  res.render("cubes/create");
});

router.post("/create", isAuthenticated,async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  await createCube({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
    cubeOwner: req.user?._id,
  });

  res.redirect("/");
});

router.get("/:cubeId/details", async (req, res) => {
  const cube = await getOne(req.params.cubeId).lean();
  if (!cube) {
    return res.redirect("/404");
  }
  let isOwner;
  if (!cube.cubeOwner?.toString() && !req.user?._id) {
    isOwner = false;
  } else {
    isOwner = cube.cubeOwner?.toString() === req.user?._id;
  }
  res.render("cubes/details", { cube, isOwner });
});

router.get("/:cubeId/attach-accessory",isAuthenticated, async (req, res) => {
  const cube = await getOne(req.params.cubeId).lean();
  const accessories = await getOthers(cube.accessories).lean();
  let hasAccessories = accessories.length > 0;
  res.render("./accessory/attach", { cube, accessories, hasAccessories });
});

router.post("/:cubeId/attach-accessory", isAuthenticated,async (req, res) => {
  const { accessory: accessoryId } = req.body;

  const cubeId = req.params.cubeId;

  await attachAccessory(cubeId, accessoryId);

  res.redirect(`/cubes/${cubeId}/details`);
});

router.get("/:cubeId/edit", isAuthenticated,async (req, res) => {
  const cube = await getOne(req.params.cubeId).lean();
  const options = getDifficultyLevelViewData(cube.difficultyLevel);

  res.render("cubes/edit", { cube, options });
});

router.post("/:cubeId/edit", isAuthenticated,async (req, res) => {
  const cubeData = req.body;
  await updateCube(req.params.cubeId, cubeData);

  res.redirect(`/cubes/${req.params.cubeId}/details`);
});

router.get("/:cubeId/delete", isAuthenticated,async (req, res) => {
  const cube = await getOne(req.params.cubeId).lean();
  const options = getDifficultyLevelViewData(cube.difficultyLevel);
  res.render("cubes/delete", { cube, options });
});

router.post("/:cubeId/delete", isAuthenticated,async (req, res) => {
  await deleteCube(req.params.cubeId);

  res.redirect("/");
});

module.exports = router;
