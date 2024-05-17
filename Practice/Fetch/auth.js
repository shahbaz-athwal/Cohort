const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shahbaz_athwal:Shah1906@cluster0.i5ib7ip.mongodb.net/",{dbName:"Cohort"})

const User = mongoose.model('users',{
  name : String,
  email : String,
  password : String
});

const app = express();
app.use(express.json());


function userExists(username, password) {
  
  
}

app.post("/signup", async function(req, res){
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
 
  const existingUser = await User.findOne({ email : email });
  if (existingUser){
    return res.status(400).send("User already exist.")
  }

  const user = new User({
    name : name,
    email : email,
    password : password
  });

  user.save();

  res.json({
    msg : "Success",
    user,
  })
})

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.status(200).json("hi")
    // return a list of users other than this username
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)