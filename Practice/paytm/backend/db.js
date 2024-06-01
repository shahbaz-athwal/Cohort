const mongoose = require("mongoose")
const {MONGO_URI} = require("./config")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    }

})

const User = new mongoose.model("User", userSchema)

const dbConnection = async () => {
    await mongoose
        .connect(MONGO_URI,{
        dbName: "paytm"
        })
        .then(() => {
            console.log("Connected to Database!")
        })

}


module.exports = {
    User,
    dbConnection
}