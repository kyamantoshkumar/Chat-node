const mongoose = require ("mongooes")

const registrationSchema = new mongoose.Schema({
    id: {
        type: String,
        require: [true, "Please Enter User Id"]
    },
    name: {
        type: String,
        unique: true,
        require: [true, "Please Enter User Name"]
    },
    password: {
        type: String,
        uniquer: true,
        require: [true, "Plaese Enter User Profile"]
    }
})

export const Registration = mongoose.model("User", userSchema); 

