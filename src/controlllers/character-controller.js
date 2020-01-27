const CharacterService = require('../services/character-service');

module.exports = {
  async list(req, res) {
    const characters = await CharacterService.getAll();
    return res.json({ characters });
  },

  async getComics(req, res) {
    const marvelCharacterId = req.params.id;
    const comics = await CharacterService.getComicsById(marvelCharacterId);
    return res.json({ comics: comics.comics });
  },
};
