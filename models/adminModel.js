const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     username : {type:String , required: true},
     password : {type:String , required: true}
})

const adminModel = mongoose.model('admins' , userSchema)

module.exports = adminModel