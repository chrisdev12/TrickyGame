const express = require('express');
const router = express.Router();
const response = require('../server/responses');
const { newGame } = require('../business/game/index');

router.get('/', (req, res) => response.success(res, 201, 'working'));

router.post('/', (req, res) => {
  newGame(req)
    .then((result) => {
      response.success(res, 201, result);
    })
    .catch((err) => {
      response.error(res, 500, err);
    });
});

module.exports = router;
