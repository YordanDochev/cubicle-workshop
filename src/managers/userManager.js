const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')

const secret = 'qZX5Fo0aUl1z4J6DRQr130rQ39CsE9'

exports.register = async (userData) => {
    
    User.create(userData)
}

exports.login = async (username,password) => {
    const user = await User.findOne({username});

    if(!user){
        throw new Error ('Do not have register user with this username or password')
    }

    const isValid = await bcrypt.compare(password,user.password)

    if(!isValid){
        throw new Error ('Do not have register user with this username or password')
    }

    const payload = {
        _id: user._id,
        username: user.username
    }

    const token = await jwt.sign(payload,secret,{expiresIn:'2d'})

    return token;
}