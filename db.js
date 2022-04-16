const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://dargaw999:darshan123@cluster0.njea3.mongodb.net/Rently1' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose