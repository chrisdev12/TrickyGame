const mongoose = require('mongoose');
const { Schema } = mongoose;
const PlayerSchema = require('./player');
const GameSchema = new Schema(
  {
    name: { type: String, required: true, minlength: [2, 'El nombre del juego es muy corto'] },
    players: [PlayerSchema],
  },
  {
    timestamps: true,
  },
);
const model = mongoose.model('Game', GameSchema);

module.exports = model;
