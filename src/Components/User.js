const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: [true, "Please Enter User Id"],
  },

  name: {
    type: String,
    unique: true,
    required: [true, "Please Enter User Name"],
  },

  profile: {
    type: String,
    select: false,
    required: [true, "Please Enter User Profile"],
  },

});

export const User = mongoose.model("User", userSchema);