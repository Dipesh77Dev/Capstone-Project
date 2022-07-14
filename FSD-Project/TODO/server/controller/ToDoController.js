const ToDoModel = require("../models/ToDoModel");

// get 
module.exports.getToDo = async(req, res) => {
    const Todo = await ToDoModel.find();
    res.send(Todo);
}

// save
module.exports.saveToDo = (req, res) => {
    const { groceryItem, isPurchased } = req.body;
    ToDoModel
    .create({groceryItem, isPurchased})
    // .then(() => res.set(201).send("Added Successfully..."))
    .then( data => { res.json({"result":"Success"})})
    .catch((err) => console.log(err));
}     

// update
module.exports.updateToDo = (req, res) => {
    const { _id, groceryItem, isPurchased } = req.body;
    ToDoModel
    .findByIdAndUpdate(_id, { groceryItem,isPurchased })
    // .then(() => res.set(201).send("Updated Successfully..."))
    .then( data => { res.json({"result":"Success"})})
    .catch((err) => console.log(err));
}

// delete
module.exports.deleteToDo = (req, res) => {
    const { _id } = req.body;
    ToDoModel
    .findByIdAndDelete(_id)
    // .then(() => res.set(201).send("Deleted Successfully..."))
    .then( data => { res.json({"result":"Success"})})
    .catch((err) => console.log(err));
}