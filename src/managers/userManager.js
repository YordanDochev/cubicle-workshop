const User = require('../model/User')
const bcrypt = require('bcrypt')

exports.register = (userData) => User.create(userData)

exports.login = async (username,password) => {
    const user = await User.findOne({username});

    if(!user){
        throw new Error ('Do not have register user with this username or password')
    }

    const isValid = await bcrypt.compare(password,user.password)

    if(!isValid){
        throw new Error ('Do not have register user with this username or password')
    }

    return user;
}