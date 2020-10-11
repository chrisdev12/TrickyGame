const express = require('express');
const router = express.Router();
const { success, error } = require('../server/responses');
const Game = require('../business/game/index');
const gameFinished = require('../middlewares/game/gameFinished');

router.get('/:page?', (req, res) => {
  Game.getAll(req)
    .then((result) => success(res, 202, result))
    .catch((err) => error(res, 404, err));
});

router.get('/:id', (req, res) => {
  Game.getOne(req)
    .then((result) => success(res, 200, result))
    .catch(() => error(res, 404, 'Not found'));
});

router.post('/', (req, res) => {
  Game.newOne(req)
    .then((result) => success(res, 201, result))
    .catch((err) => error(res, 500, err));
});

router.put('/:id', gameFinished, (req, res) => {
  Game.editOne(req)
    .then((result) => success(res, 200, result))
    .catch((err) => error(res, 500, err));
});

router.put('/verifyWinner/:id', (req, res) => {
  Game.verifyWinner(req)
    .then((result) => (result ? success(res, 200, result) : error(res, 404, 'not winner found')))
    .catch((err) => error(res, 500, err));
});

router.patch('/end/:id', (req, res) => {
  Game.endOne(req)
    .then(() => success(res, 200, 'Game finished'))
    .catch((err) => error(res, 500, err));
});

module.exports = router;
