const router = require("express").Router();
const userManager = require("../managers/userManager");
const {extractErrorMessages} = require("../utils/errorHelper")

router.get("/register", (req, res) => {
  res.render("users/register");
});

router.post("/register", async (req, res) => {
  const { username, password, repeatPassword } = req.body;

  try {
    await userManager.register({ username, password, repeatPassword });

    res.redirect("/users/login");
  } catch (error) {
    console.log(error);
    const errorMessages = extractErrorMessages(error)
    res.status(404).render("users/register",{errorMessages});
  }
});

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await userManager.login(username, password);
    res.cookie("Auth", token, { httpOnly: true });
    res.redirect("/");
    
  } catch (error) {
    res.render("users/login",{errorMessage:error.message});
  }


});

router.get("/logout", (req, res) => {
  res.clearCookie("Auth");
  res.redirect("/");
});

module.exports = router;
