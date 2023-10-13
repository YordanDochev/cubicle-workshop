const router = require("express").Router();
const userManager = require("../managers/userManager");

router.get("/register", (req, res) => {
  res.render("users/register");
});

router.post("/register", async (req, res) => {
  const { username, password, repeatPassword } = req.body;
  const user = await userManager.getOneUser(username)
  if(!user){
    await userManager.register({ username, password, repeatPassword });
    res.redirect("/users/login");
  }else{
    throw new Error ('The username is already used')
  }

});

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const token = await userManager.login(username, password);

  res.cookie("Auth", token, { httpOnly: true });

  res.redirect("/");
});

router.get("/logout", (req, res) => {
  res.clearCookie("Auth");
  res.redirect("/");
});

module.exports = router;
