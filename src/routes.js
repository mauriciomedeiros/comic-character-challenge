const { Router } = require('express');
const CharacterController = require('./controlllers/character-controller');

const route = Router();

module.exports = {
  initialize() {
    route.get('/marvel/characters', CharacterController.list);
    route.get('/marvel/pop', CharacterController.pop);
    // route.get('/marvel/characters/:id/comics', CharacterController.detail);

    return route;
  },
};
