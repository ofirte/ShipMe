const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const User = require('../modules/User')

module.exports = async(req, res, next) => {

     var token = req.header('Authorization')
    if(!token)
        return res.status(401).send({error: 'Not authorized to access this resource'})
    token=token.replace('Bearer ', '')
    const data = jwt.verify(token, keys.jwtKey)
    try {
        const user = await User.findOne({ _id: data._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}
