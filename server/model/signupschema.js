const mongoose = require("mongoose");

const signupschema = mongoose.Schema({
    organization:{
        type: String,
        required: true,
    },
    certificate:{
        type: String,
        required: true,
        unique:true,
    },
  organizationName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  smartcontract:{
    type: String,
    required:true,
    unique: true,
  }
});


module.exports = mongoose.model("signup", signupschema);
