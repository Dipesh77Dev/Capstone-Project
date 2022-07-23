//const mongo = require('mongoose')

//mongo.connect('mongodb+srv://deepak08:qwerty123@cluster0.q06cc7h.mongodb.net/?retryWrites=true&w=majority')

// mongo.connect('mongodb://127.0.0.1:27017/?retryWrites=true&w=majority')
// mongo.connection.once('open',()=>{console.log('connected to mongoDB server')})

const mongoose = require('mongoose');
//const dotenv = require('dotenv')
 
//dotenv.config();
const connectDB = async () => {
    console.log('trying to connect')
   try {
       const conn = await mongoose.connect('mongodb://127.0.0.1:27017/test', {
           useUnifiedTopology: true,
           useNewUrlParser: true,
           // useCreateIndex: true,
       })
       console.log(`MongoDB Connected: ${conn.connection.host}`)
   } catch (error) {
       console.error(`Error: ${error.message}`)
       process.exit(1)
   }
}
 
module.exports = connectDB