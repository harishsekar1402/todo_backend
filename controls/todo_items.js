const getAllToDoItems = (request, response) => {
    response.send("List of all todo items 👋👋👋");
};
const createNewToDoItem = (request, response) => {
    // response.send("Create new todo item ");
    response.json(request.body)
}

module.exports = { getAllToDoItems, createNewToDoItem };