const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config');


const isAuthorized = (req, res, next) => {
    const header = req.headers.authorization
    if (!header || !header.startsWith("Bearer ")) {
        return res.status(403).json({})
    }
    token = header.split(" ")[1]

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        req.userId = decoded.userId
        next()
    } catch (error) {
        return res.status(403).json({});
    }
}

module.exports = {
    isAuthorized
}