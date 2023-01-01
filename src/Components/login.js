const mongooes = require ("mongooes");

const  loginSchema = new mongooes.Schema({
   id: {
    type: String,
    unique: true,
    require: [true, "Please Enter User Id"]
   },
   
  name: {
    type: String,
    unique: true,
    require: [true, "Please Enter User Name"]
  },
  password: {
    type: String,
    unique: true,
    require: [true, "Please Enter User Password"]
  }
  
})

export const Login = mongooes.model("Login", loginSchema)