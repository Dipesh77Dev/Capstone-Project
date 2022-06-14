// initializing db
const Item = require('../models/item.js');

// save item data/insert item
exports.create = (req, res) => {
    const item = new Item({
        groceryItem : req.body.groceryItem,
        isPurchased : req.body.isPurchased
    })
    item.save(item)
    .then(
        data => { res.json({"result":"Success"});}
    )
    .catch( 
        err => { res.status(500).send(err) }
    )
};

// get all the items
exports.find = (req, res) => {
    Item.find()
    .then(
        data => { res.send(data) }
    )
    .catch(
        err => { res.status(500).send(err)}
    )
};

// update the item status
exports.updateOne = (req, res) => {
    const updatedItem = new Item({
        _id : req.body._id,
        isPurchased : req.body.isPurchased
    })
    Item.updateOne(updatedItem) 
    // Item.updateOne(req.body)
    .then(
        data =>{
            res.json({"result" : "success"});
        }
    )
    .catch(
        err => {
            res.status(500).send(err)
        }
    )
}

exports.deleteOne =(req, res) => {
    // res.json("deleteById")
    Item.deleteOne(req.body)
    .then(
        data => {
            // if(!data){
            //     res.send("No data has been found");
            // }else{
            // res.send(data + "documents deleted")
            res.json({"result" : "success"});
        }
    )
    .catch(
        err =>{
            res.status(500).send(err)
        }
    )
}

// db.collection.deleteOne()
// Delete at most a single document that match a specified filter even though multiple documents may match the specified filter.

// db.collection.deleteMany()
// Delete all documents that match a specified filter.

// db.collection.remove()
// Delete a single document or all documents that match a specified filter.