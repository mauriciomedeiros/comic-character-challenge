module.exports = {
  wrapper(marvelCharacterId, name, description, thumbnail, comics) {
    return {
      marvelCharacterId,
      name,
      description,
      thumbnail,
      comics,
    };
  },
};
