const axios = require('axios');

const CharacterSchema = require('../schemas/character-schema');
const Character = require('../models/character');

const BASEURL = 'https://gateway.marvel.com:443/v1/public/';

// bad code, it's wrong
const getComic = async marvelCharacterId => {
  const comicsMarvel = await axios.default.get(
    `${BASEURL}/characters/${marvelCharacterId}/comics?ts=1&apikey=bce7b1e856554ab646ff3497dfed63bf&hash=1e8b1665568466c52cbeb82b081b7608&limit=50`
  );
  const comics = [];

  for (const element of comicsMarvel.data.data.results) {
    const c = {
      marvelComicId: element.id,
      title: element.title,
      alternativeDescription: element.variantDescription,
      description: element.description,
      pageNumber: element.pageCount,
      cover: `${element.thumbnail.path}.${element.thumbnail.extension}`,
    };
    comics.push(c);
  }
  return comics;
};

module.exports = {
  async getAll() {
    const characters = await CharacterSchema.find(
      {},
      { comics: 0, __v: 0, _id: 0 }
    );
    return characters;
  },

  async getComicsById(marvelCharacterId) {
    const comics = await CharacterSchema.find(
      { marvelCharacterId },
      { comics: 1, _id: 0 }
    );
    return comics[0];
  },

  async findAndSeveCharactes() {
    const containsCharacteres = await CharacterSchema.countDocuments();
    console.log(containsCharacteres);
    if (containsCharacteres !== 0) {
      return;
    }
    const characters = await axios.default.get(
      `${BASEURL}characters?ts=1&apikey=bce7b1e856554ab646ff3497dfed63bf&hash=1e8b1665568466c52cbeb82b081b7608&limit=20`
    );
    let c = [];
    for (const element of characters.data.data.results) {
      const comics = await getComic(element.id);
      c.push(
        Character.wrapper(
          element.id,
          element.name,
          element.description,
          `${element.thumbnail.path}.${element.thumbnail.extension}`,
          comics
        )
      );
    }
    await CharacterSchema.insertMany(c);
  },
};
