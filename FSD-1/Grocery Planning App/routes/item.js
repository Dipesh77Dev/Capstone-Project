// const express = require('express');
// const router = express.Router();
const router = require('express').Router();

const itemController = require('../controller/item.js');

router.post('/addItem', itemController.create);
router.get('/getAllItem', itemController.find);
router.put('/updatePurchaseStatus', itemController.update);

// module.exports = router;
exports.router = router;