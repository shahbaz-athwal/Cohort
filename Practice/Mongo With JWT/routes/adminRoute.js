const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,User, Course } = require("../db/db.js");
const router = Router();
const jwt = require("jsonwebtoken");
const secret = require("../secret.js")

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: 'Admin created successfully'
    })
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await Admin.findOne({
        username, password
    })
     if (user) {
         const token = jwt.sign({
             username: username
         }, secret);
        
         res.json({
             token
         })
     } else {
        res.status(411).json({
            msg: "incorret credentials"
        })
     }
    
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;