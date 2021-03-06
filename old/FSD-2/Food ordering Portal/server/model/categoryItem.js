const mongoose = require('mongoose')
const categoryItemSchema = new mongoose.Schema(
    {
        categoryId:{
            type:mongoose.Schema.ObjectId,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        }
    }
)

module.exports = mongoose.model('CategoryItem',categoryItemSchema)