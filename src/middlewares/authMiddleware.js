const {SECRET} = require('../config/const')
const jwt = require('../lib/jwt')

exports.auth = async (req,res,next) => {
    const token = req.cookies['Auth'];

    if(token){
        
        try {
            const decodedToken = await jwt.verify(token,SECRET)
            
            req.user = decodedToken;

            next();
        } catch (error) {
            res.clearCookie('Auth');
            res.redirect('/user/login');
        }
    }else{
        next();
    }

}