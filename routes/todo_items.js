const express = require('express')
const router = express.Router()
const {getAllToDoItems,createNewToDoItem,updateAToDoItem,deleteAToDoItem} = require('../controls/todo_items')


router.route('/').get(getAllToDoItems).post(createNewToDoItem)
router.route('/:id').get(updateAToDoItem)
router.route('/:id').delete(deleteAToDoItem)

module.exports = router;
