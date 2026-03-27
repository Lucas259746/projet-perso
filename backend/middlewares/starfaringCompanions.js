const { CharacterModel } = require('../models/starRailParser');

module.exports = (user) => {
  // Le SDK retourne souvent les personnages dans 'starfaringCompanions'
  return (user.starfaringCompanions || []).map(c => new CharacterModel(c));
};