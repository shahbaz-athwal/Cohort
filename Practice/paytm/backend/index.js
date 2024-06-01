const express = require("express");
const cors = require("cors") 
const rootRouter = require("./routes/indexRoute");
const userRouter = require("./routes/user");
const { dbConnection } = require("./db");

const app = express()
app.use(cors())
app.use(express.json())

dbConnection()

app.use("/api/v1", rootRouter)
app.use("/api/v1/user", userRouter)

app.listen(3000,() => {
    console.log("Port 3000")
})


