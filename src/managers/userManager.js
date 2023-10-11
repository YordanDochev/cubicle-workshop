const User = require('../model/User')

exports.register = (userData) => User.create(userData)