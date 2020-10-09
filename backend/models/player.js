const mongoose = require('mongoose');
const { Schema } = mongoose;
const PlayerSchema = new Schema({
  name: { type: String, required: true },
  moves: { type: Array, required: true },
  inTurn: { type: Boolean, required: false },
});
const model = mongoose.model('Game', PlayerSchema);

module.exports = model;
