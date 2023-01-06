const mongooes = require("mongoose")

const regestrationSchema = new mongooes.Schema({
    name: {
        type: String,
        unique:true,
        require: [true, "Please Enter User name"]
    },

    email: {
        type: String,
        unique: true,
        require: [true, "Please Enter User email"]
    },

    password: {
        type: String,
        select: false,
        require: [true, "Plaese Enter User password"]
    },

    confirmPassword: {
        type: String,
        select: false,
        require: [true, "Plaese Enter User confirm oassword"]
    }
})

// export const Registration = mongoose.model("User", userSchema); 

// module.export.Regeestartion

const RegestrationFile =mongooes.model("User", regestrationSchema)
module.exports = RegestrationFile;
