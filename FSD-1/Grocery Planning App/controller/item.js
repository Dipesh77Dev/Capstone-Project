// initializing db
const Item = require('../models/item.js');

// save item data/insert item
exports.create = async(req, res) => {
    const item = await new Item({
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
exports.find = async(req, res) => {
    await Item.find()
    .then(
        data => { res.send(data) }
    )
    .catch(
        err => { res.status(500).send(err)}
    )
};

// update the item status
exports.updateOne = async(req, res) => {
    const updatedItem = await new Item({
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

exports.deleteOne = async (req, res) => {
    // res.json("deleteById")
    await Item.deleteOne(req.body)
    .then(
        data => {
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

/*
router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
});

// @route   POST api/items
//@desc     Create Item
//@access   Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save()
        .then(item => res.json(item));
});

// @route   DELETE api/items
//@desc     DELETE Item
//@access   Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove()
            .then(() => res.json({success: true}))
        )
        .catch(err => err.status(404).json({success: false}));
});
*/