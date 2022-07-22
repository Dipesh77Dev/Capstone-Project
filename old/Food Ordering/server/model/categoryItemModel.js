const mongoose = require("mongoose");
const categoryItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }, 
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("CategoryItem", categoryItemSchema);
