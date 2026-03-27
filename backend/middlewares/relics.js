const { RelicModel } = require('../models/starRailParser');

module.exports = (user) => {
  return (user.starfaringCompanions || []).map(c => ({
    characterName: c.characterData?.name?.get?.(),
    relics: (c.relics || []).map(r => new RelicModel(r))
  }));
};