const mongoose = require('mongoose');
const { Schema } = mongoose;
const GameSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [2, 'El nombre del juego es muy corto'],
    },
    players: ['PlayerSchema'],
    finished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('GameSchema', GameSchema);
