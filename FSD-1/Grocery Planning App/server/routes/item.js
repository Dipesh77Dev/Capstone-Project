// const express = require('express');

const Item = require('../models/item');

// const router = express.Router();
const router = require('express').Router();

/*const itemController = require('../controller/item.js');
router.post('/add', itemController.create);
router.get('/getAll', itemController.find);
router.put('/updatePurchaseStatus', itemController.update);
router.delete('/deleteGroceryItem', itemController.deleteOne);
*/

// add Items 
router.post('/add', async(req, res) => {
    try{
        const item = await new Item({
            groceryItem : req.body.groceryItem,
            isPurchased : req.body.isPurchased
        })
        item.save(item)
        // const result = await item.create(req.body);
        res.json({"result":"Success"});
        }
        catch(err){
            res.status(500).send(err)
        }
})

// Get all items
router.get('/getAll', async(req, res) => {
    const find = await Item.find()
    res.send(find);
})

// router.patch('/updatePurchaseStatus', async(req,res) => {
//     try{
//         const update = await details.findByIdAndUpdate({_id:req.params.id}, 
//             {$set:{isPurchased:req.body.isPurchased}}
//             )
//         res.send(update);
//         // res.json({"result":"Success"});
//         }
//         catch(err){
//             res.send(err)
//         }
// })

router.put('/updatePurchaseStatus/', async(req,res) => {
    const updatedItem = await new Item({
        _id : req.body.id,
        isPurchased:req.body.isPurchased
    })
    Item.findByIdAndUpdate(updatedItem)
    .then(
        data =>{
            res.json({"result" : "success"});
            // res.send(updatedItem);
        }
    )
    .catch(
        err =>{
            res.status(500).send(err)
        })
})

router.delete('/deleteGroceryItem', async(req, res) => {
    try{
        const deleteData = await new Item({
            _id : req.body.id
        })
        Item.findByIdAndRemove(deleteData);
        res.json({"result" : "success"});
        // res.send(deleteData);
       }
       catch(err){
          res.send(err)
       }
})

// module.exports = router;
exports.router = router;