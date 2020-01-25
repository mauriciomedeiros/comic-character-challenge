// const axios = require('axios');

const CharacterSchema = require('../schemas/character-schema');

module.exports = {
  async getAll() {
    const characters = await CharacterSchema.find();
    return characters;
  },
};
