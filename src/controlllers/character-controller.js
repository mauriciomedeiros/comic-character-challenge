const axios = require('axios');

const CharacterService = require('../services/character-service');

const CharacterSchema = require('../schemas/character-schema');

module.exports = {
  async list(req, res) {
    const characters = await CharacterService.getAll();
    return res.json({ characters });
  },

  async pop(req, res) {
    const characters = await axios.default.get(
      'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=bce7b1e856554ab646ff3497dfed63bf&hash=1e8b1665568466c52cbeb82b081b7608&limit=100'
    );
    const a = characters.data;
    const b = {
      marvelCharacterId: a.data.results[0].id,
      name: a.data.results[0].name,
      description: null,
      thumbnail: null,
      comics: null,
    };
    const ad = await CharacterSchema.create(b);

    return res.json(a);
  },
};
