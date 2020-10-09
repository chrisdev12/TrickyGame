const express = require('express');
const response = require('../server/responses');
const router = express.Router();

router.get('/', (req, res) => response.success(res, 201, 'working'));

module.exports = router;
