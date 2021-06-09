const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        // console.log("token",token)
        const decoded = jwt.verify(token,'thisismynewcourse')
        // console.log("decoded",decoded)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        // console.log("useerrr",decoded,user)

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth