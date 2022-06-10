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
    const groceryItem = req.query.groceryItem
    var condition = groceryItem? { groceryitem : {$regex : new RegExp(groceryItem)}} : {}
    Item.find(condition)
    .then(
        data => { res.send(data) }
    )
    .catch(
        err => { res.status(500).send(err)}
    )
};

// update the item status
exports.update = (req, res) => {
    Item.findByIdAndUpdate(req.params.id)
    .then(
        data =>{
            // res.send(data);
            res.json({"result" : "success"});
        }
    )
    .catch(
        err => {
            res.status(500).send(err)
        }
    )
}