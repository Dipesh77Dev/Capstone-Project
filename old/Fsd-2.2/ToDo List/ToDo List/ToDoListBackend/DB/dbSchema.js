const mongoonse = require('mongoose')
const dbSchema = new mongoonse.Schema(
    {
        
        GroceryItem:{
            type:String,
            required:true
        },
        isPurchased:{
            type:Boolean,
            required:true
        }
    }
)

module.exports = mongoonse.model('details',dbSchema)