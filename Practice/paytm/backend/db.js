const {mongoose,Schema, model} = require("mongoose")
const {MONGO_URI} = require("./config")


const userSchema = new Schema({
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

const accountSchema = new Schema({
    userId: {
            type: Schema.Types.ObjectId, 
            ref: "User",
            required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const User = new model("User", userSchema)
const Account = new model("Account", accountSchema)

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
    Account,
    dbConnection
}