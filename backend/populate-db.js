const CharacterService = require('./src/services/character-service');

// module.exports = {
//   async initialize() {
//     console.log('Find and save data infos to marvel.......');
//     await CharacterService.findAndSeveCharactes();
//     console.log('end integration');
//   },
// };

(async function initialize() {
  console.log('Find and save data infos to marvel.......');
  await CharacterService.findAndSeveCharactes();
  console.log('end integration');
})();
