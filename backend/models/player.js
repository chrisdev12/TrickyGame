const mongoose = require('mongoose');
const { Schema } = mongoose;
const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  moves: {
    type: Array,
    required: false,
  },
  inTurn: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model('PlayerSchema', PlayerSchema);
