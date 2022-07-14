const { Router } = require('express');

const router = Router();

const { getFoodItem, getCatItem, addFoodItem, addCategoryItem, addToCart, removeCart, deleteData } = require('../controller/itemController');

router.get("/foodItem", getFoodItem); // Home Page 
router.get("/categoryItem", getCatItem); // Sub-Home Page
router.post("/addFoodItem", addFoodItem); // add food item
router.post("/addCategoryItem", addCategoryItem); // add Category item
router.post("/addCart", addToCart);  // adding getFoodItem
router.delete("/removeFromCart", removeCart);
router.delete("/deleteData", deleteData);

module.exports = router;