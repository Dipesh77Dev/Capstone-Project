const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    groceryItem : {
        type : String,
        required : true,
        // unique : true
    },
    isPurchased : {
        type : Boolean,
        // required : true
    }
});

module.exports = mongoose.model("Item", itemSchema);