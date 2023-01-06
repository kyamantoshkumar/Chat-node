
const mongooes = require("mongoose")
const authRouter = require("../routes/auth")
const  loginSchema = new mongooes.Schema({
   
  email: {
    type: String,
    unique: true,
    require: [true, "Please Enter User email"]
  },

  password: {
    type: String,
    unique: true,
    require: [true, "Please Enter User Password"]
  }
})

// We are crreateingba new Collevtion
const  LoginFile = new mongooes.model("Login", loginSchema)
module.exports = LoginFile;