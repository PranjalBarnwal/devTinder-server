const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    unique:true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: String,
  },
  gender: {
    type: String,
    validate(value){
        if(!["male","female","others"].includes(value)){
            throw new Error("Gender is not valid");
        }
    }
  },
  photoURL: {
    type: String,
  },
  about: {
    type: String,
    default:"This is my about default section"
  },
  skills:{
    type:[String],
  }
},{
    timestamps:true
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
