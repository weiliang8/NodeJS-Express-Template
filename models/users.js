const mongoose = require("mongoose")

const accessRights = new mongoose.Schema({
  read: Boolean,
  write: Boolean,
})

const userSchema = new mongoose.Schema({
  name: String,
  role: String,
  email:{
      type:String,
      required:true,
    lowercase:true,
  },
  createdAt:{type: Date,
             default:()=> Date.now(),
             immutable:true},
  updatedAt:Date,
  access:accessRights,
})

module.exports = mongoose.model("User",userSchema)

