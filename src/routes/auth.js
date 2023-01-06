
const mongooes = require("mongoose")
const express = require("express")
const User = require("../model/Login");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { registerValidation, loginValidation } = require("../model/Validation");

//Router.use();
//REGISTER

const router = express.Router()
router.post("/register", async (req, res) => {
console.log("register");
  
  //Lets validate a data before we make a user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checking if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email Already Exists");

  //HASH THE PASSWORD
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create a New User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  //Lets validate a data before we make a user
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checking if the email exists in the database
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email is Not Found");

  //Check if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid Password");

  //Create  and assign a Token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
});

module.exports = router


// const router = require('express').Router();
// const User = require('../model/User');
// const { registerValidation } = require('../validation');

// router.post('/register', async (req, res) => {

// //Validate data before creating user

// // const { error } = schema.validate(req.body);
// const { error } = registerValidation(req.body);
// if(error) return res.status(400).send(error.details[0].message);


//     const user = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//         date: req.body.date
//     });
//     try {
//         const savedUser = await user.save();
//         res.send(savedUser);

//     }catch(err){
//         res.status(400).send(err);
//     }

// });

// router.post('/login')

// module.exports = router;