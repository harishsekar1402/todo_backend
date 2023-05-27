const getAllToDoItems = (request, response) => {
    response.send("List of all todo items 👋👋👋");
};

const createNewToDoItem = (request, response) => {
    response.json(request.body);
};

const updateAToDoItem = (request, response) => {
    response.send(`Updating item with id ${request.params.id}`);
};

const deleteAToDoItem = (request, response) => {
    response.send(`Deleting item with id ${request.params.id}`);
};

module.exports = { getAllToDoItems, createNewToDoItem, updateAToDoItem, deleteAToDoItem };