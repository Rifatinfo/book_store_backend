
const mongoose = require("mongoose");

const user = new mongoose.Schema({
  username: {
    type : String,
    require : true,
    unique : true,
  }, 
  email : {
    type : String,
    require : true,
    unique : true,
  },
  password: {
    type : String,
    require : true,
  },
  address: {
    type : String,
    require : true,
  }, 
  avatar: {
    type : String,
    default : "https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?3&t=st=1727777866~exp=1727778466~hmac=c872ec2fc38f5a287b141f4d01990874f17be83713ad0ebf1768fc2ab9ee88c7"
  },
  role: {
    type : String,
    default : "user",
    enum: ["user","admin"]
  },
  favourites : [
    {
    type : mongoose.Types.ObjectId,
    ref : "books", 
    }
  ],
  cart : [
    {
    type : mongoose.Types.ObjectId,
    ref : "books", 
    }
  ],
  orders : [
    {
    type : mongoose.Types.ObjectId,
    ref : "order", 
    }
  ],
},{timestamps: true})

module.exports = mongoose.model("user",user);