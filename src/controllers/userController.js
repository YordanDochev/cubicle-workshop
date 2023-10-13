const router = require('express').Router();
const userManager = require('../managers/userManager')

router.get('/register',(req,res)=>{
    res.render('users/register');
})

router.post('/register',async (req,res)=>{
    const {username, password, repeatPassword} = req.body;
    
    await userManager.register({username,password,repeatPassword})

    res.redirect('/users/login')
})

router.get('/login',(req,res)=>{
    res.render('users/login')

})

router.post('/login',async(req,res)=>{
    const {username,password} = req.body
    
    const token = await userManager.login(username,password)
    console.log(token);

    res.cookie('Auth',token,{httpOnly:true})

    res.redirect('/')
})

router.get('/logout',(req,res)=>{
    res.clearCookie('Auth')
    res.redirect('/')
})

module.exports = router;