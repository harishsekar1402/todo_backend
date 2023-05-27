const express = require('express')
const router = express.Router()
const {getAllToDoItems,createNewToDoItem} = require('../controls/todo_items')


router.route('/').get(getAllToDoItems).post(createNewToDoItem)

module.exports = router;
