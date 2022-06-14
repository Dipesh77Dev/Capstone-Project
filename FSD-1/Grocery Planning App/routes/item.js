// const express = require('express');
// const router = express.Router();
const router = require('express').Router();

const itemController = require('../controller/item.js');

router.post('/add', itemController.create);
router.get('/getAll', itemController.find);
router.put('/updatePurchaseStatus', itemController.updateOne);
router.delete('/deleteGroceryItem', itemController.deleteOne);

// module.exports = router;
exports.router = router;