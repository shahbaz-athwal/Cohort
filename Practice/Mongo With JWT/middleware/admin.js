const jwt = require("jsonwebtoken");

const secret = require("../secret.js")

function adminMiddleware(req, res, next) {
    const auth = req.headers.authorization;
    words = auth.split(" ");
    token = words[1];

    const decodedValue = jwt.verify(token, secret);
    if(decodedValue.username){
        next();
    } else{
        res.status(403).json({
            msg: "User not authorized",
        })
    }
}

module.exports = adminMiddleware;