

const express = require('express')
const router = express.Router();
const  mongoose = require("mongoose")
const User = require("../model/n")
const bcrypt = require("bcrypt")
// .exports = router ;
router.get(`/`, async (req, res) => {
    const UserList = await User.find();
    res.send(UserList);
})

// module.exports=router

router.post(`/signup`, (req, res, next) => {
    console.log(req);
    const user = new User({
        _id: new mongoose.Type.ObjectId,
        name : req.body.name,
        profile : req.body.profile
    })

    user.save().then((createdUser => res.status(201).json(createdUser))
    ).catch((err) => {
        res.status(500).json({
            error: err,
            sucess: false,
        })
    })
})

module.exports = router