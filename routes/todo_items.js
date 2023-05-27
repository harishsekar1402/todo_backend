const express = require('express')
const router = express.Router()

router.get("/", (request, response) => {
    response.send('List of the items')
});

module.exports = router;
