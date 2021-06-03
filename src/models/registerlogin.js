const mongoose = require("mongoose");

const registerUser = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 3,
  },
  cpassword: {
    type: String,
    required: true,
    minLength: 3,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Register = mongoose.model("Registerationdata", registerUser);

module.exports = Register;
