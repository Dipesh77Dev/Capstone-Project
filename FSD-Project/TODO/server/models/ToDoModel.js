const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    groceryItem : {
        type : "String",
        required : true,
    },
    isPurchased : {
        type : "Boolean",
        required : true,
        default : false,
    }
});

module.exports = mongoose.model("ToDo", ToDoSchema);