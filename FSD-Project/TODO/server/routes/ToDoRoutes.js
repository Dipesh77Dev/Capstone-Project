const { Router } = require('express');

const router = Router();

const { getToDo, saveToDo, updateToDo, deleteToDo } = require('../controller/ToDoController');

router.get("/getAll", getToDo);
router.post("/add", saveToDo);
router.put("/updatePurchaseStatus", updateToDo);
router.delete("/deleteGroceryItem", deleteToDo);

module.exports = router;