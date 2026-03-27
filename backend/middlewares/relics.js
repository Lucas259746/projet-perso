const { RelicModel } = require('../models/starRailParser');

module.exports = (user) => {
  return (user.starfaringCompanions || []).map(c => ({
    character: c.characterData?.name?.get?.() || "Unknown",
    relics: (c.relics || []).map(r => new RelicModel(r))
  }));
};