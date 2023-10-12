const {SECRET} = require('../config/const')
const jwt = require('../lib/jwt')

exports.auth = async (req,res,next) => {
    const token = req.cookies['Auth'];

    if(token){
        
        try {
            const user = await jwt.verify(token,SECRET)
            
            req.user = user;

            next();
        } catch (error) {
            res.clearCookie('Auth');
            res.redirect('/user/login');
        }
    }else{
        next();
    }

}