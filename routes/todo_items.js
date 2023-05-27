const express = require('express')
const router = express.Router()
const {getAllToDoItems} = require('../controls/todo_items')
router.get("/",getAllToDoItems)
// , (request, response) => {
//     response.send('List of the items')
// });

module.exports = router;
