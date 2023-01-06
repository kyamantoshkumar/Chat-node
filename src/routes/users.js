





const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const User = require("../model/Login");
const bcrypt = require("bcrypt")
// const router = require("./user");
const jwt = require("jsonwebtoken");

router.post("/signup",(req, res, next) => {
    bcrypt.hash(req.body.password,10,(err, hash) => {
        if(err){
            return res.status(500).json({
                error:err
            })
        }
        else{
            const user = new User({
                _id: new mongoose.Type.ObjectId,
                username:req.body.username,
                password:hash,
                phone:req.body.phone,
                email:req.body.email,
                userType:req.body.userType
            })

            user.save()
            .then(result => {
                res.status(200).json({
                    new_user:result
                })
            })
            .catch(err => {
                res.status(500).json({
                    error:err
                })
            })
        }
    })
})

router.post("./user",(re, res, next) => {
   User.find({username: req.body.username})
   .exec()
   .then(user => {
    if(user.length < 1)
    {
        return res.status(401).json({
            msg: "user not exit"
        })
    }
    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if(!result){
            result.req.status(401).json({
              msg: 'password matching fail'
            })
        }
        if(result)
        {
          const token = jwt.sign({
            username:user[0].username,
            userType: user[0].userType,
            email:user[0].email,
          },
          'this is dummy text',
          {
            expireIn:"24hours"
          }
          )
          res.status(200).json({
            username:user[0].username,
            userType:user[0].userType,
            email:user[0].email,
            token:token
          })
        }
    })
   })
   .catch(err => {
    res.status(500).json({
        err:err
    })
   })
})
module.exports = router