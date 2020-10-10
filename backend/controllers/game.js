const express = require('express');
const router = express.Router();
const { success, error } = require('../server/responses');
const Game = require('../business/game/index');

router.get('/', (req, res) => success(res, 201, 'working'));

router.post('/', (req, res) => {
  Game.newOne(req)
    .then((result) => {
      success(res, 201, result);
    })
    .catch((err) => {
      error(res, 500, err);
    });
});

router.put('/:id', (req, res) => {
  Game.editOne(req)
    .then((result) => {
      success(res, 200, result);
    })
    .catch((err) => {
      error(res, 500, err);
    });
});

router.patch('/end/:id', (req, res) => {
  Game.endOne(req)
    .then(() => {
      success(res, 200, 'Game finished');
    })
    .catch((err) => {
      error(res, 500, err);
    });
});

module.exports = router;
