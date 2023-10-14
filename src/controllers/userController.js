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
    // console.log(error);
    // let errorMessages = [];
    // if(error.name === 'ValidationError'){
    //   Object.keys(error.errors).forEach((key)=>{
    //     errorMessages.push(error.errors[key].message)
    //     // errorMessages[index] = error.errors[key].message
    //   })
    // }
    // console.log(errorMessages);
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
