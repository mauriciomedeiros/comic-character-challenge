const mongoose = require('mongoose');

const CharacterSchema = mongoose.Schema({
  marvelCharacterId: Number,
  name: String,
  description: String,
  thumbnail: String,
  comics: Array,
});

module.exports = mongoose.model('Character', CharacterSchema);
