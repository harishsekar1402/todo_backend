const express = require('express')
const router = express.Router()

router.get('/api/v1/', (request, response) => {
    response.send('List of the items')
});

module.exports = router;
