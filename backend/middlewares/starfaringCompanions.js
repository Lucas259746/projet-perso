const { CharacterModel } = require('../models/starRailParser');

module.exports = (user) => {
  if (!user.starfaringCompanions) return [];
  return user.starfaringCompanions.map(c => new CharacterModel(c));
};