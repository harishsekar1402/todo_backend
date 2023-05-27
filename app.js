const express = require('express')
const app = express()
const PORT = 3500
const todo_item = require('./routes/todo_items')

app.get('/', (request, response) => {
    response.send("Working")
});

app.use('/api/v1/todo_items', todo_item)

app.listen(PORT, console.log("This server is running at http://localhost:3500"))