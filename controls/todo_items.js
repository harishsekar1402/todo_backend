const getAllToDoItems = (request, response) => {
    response.send("List of all todo items");
};

module.exports = { getAllToDoItems };