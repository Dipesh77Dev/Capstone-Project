const itemModel = require("../model/itemModel");
const categoryItemModel = require("../model/categoryItemModel");

// get Food Item
module.exports.getFoodItem = async(req, res) => {
    const FoodItem = await itemModel.find();
    res.send(FoodItem);
}

// get Category Item
module.exports.getCatItem = async(req, res) => {
    const CategoryItem = await categoryItemModel.find();
    res.send(CategoryItem);
}

// add to Food Items
module.exports.addFoodItem = (req, res) => {
    const { name, image } = req.body;
    itemModel
    .create({ name, image })
    // .then(() => res.set(201).send("Added Successfully..."))
    // .then( data => { res.json({"result":"Success"})})
    .then( data =>  {res.send(data)})
    .catch((err) => console.log(err))
};   

// add to category item 
module.exports.addCategoryItem = (req, res) => {
    const { catId, name, image, price, description } = req.body;
    categoryItemModel
    .create({ catId, name, image, price, description })
    // .then(() => res.set(201).send("Added Successfully..."))
    // .then( data => { res.json({"result":"Success"})})
    .then( data =>  {res.send(data)})
    .catch((err) => console.log(err));
} 

// add to Cart
module.exports.addToCart = (req, res) => {
    const { _id, name, image, price, description } = req.body;
    categoryItemModel
    .create({ _id, name, image, price, description })
    // .then(() => res.set(201).send("Added Successfully..."))
    .then( data => { res.json({"result":"Success"})})
    .catch((err) => console.log(err));
}     

// delete cart by id
module.exports.removeCart = (req, res) => {
    const { _id } = req.body;
    categoryItemModel
    .findByIdAndDelete(_id)
    // .then(() => res.set(201).send("Deleted Successfully..."))
    .then( data => { res.json({"result":"Success"})})
    .catch((err) => console.log(err));
}

module.exports.deleteData = (req, res) => {

}