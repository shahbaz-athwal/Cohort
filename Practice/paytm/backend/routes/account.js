const express = require("express")
const { isAuthorized } = require("../middleware")
const { Account } = require("../db")
const zod = require("zod")
const  mongoose = require("mongoose")

const router = express.Router()

const transferBody = zod.object({
    to: zod.string(),
    amount: zod.number().min(0)
})

router.get("/balance", isAuthorized, async ( req, res ) => {
    console.log("hit")
    const account = await Account.findOne({ userId: req.userId})
    res.status(200).json({
        balance: account.balance
    })
})

router.post("/transfer", isAuthorized, async ( req, res ) => {
    const success = transferBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
          message: "Incorrect inputs",
        });
    }
    const session = await mongoose.startSession()
    session.startTransaction()
    const { amount, to } = req.body;
    const account = await Account.findOne({ userId: req.userId}).session(session)
    
    if (!account || account.balance < amount) {
        await session.abortTransaction()
        return res.status(400).json({
            message: "Insufficient funds."
        })
    }
    const toAccount = await Account.findOne({userId: to}).session(session)

    if (!toAccount) {
        await session.abortTransaction()
        return res.status(400).json({
            message: "Invalid account"
        })
    }

    await Account.updateOne({userId: req.userId},{
        $inc : { 
            balance: -amount
        }
    }).session(session)

    await Account.updateOne({userId: toAccount},{
        $inc : { 
            balance: amount
        }
    }).session(session)

    await session.commitTransaction()

    res.status(200).json({
        message: "Transaction successful."
    })
})

module.exports = router