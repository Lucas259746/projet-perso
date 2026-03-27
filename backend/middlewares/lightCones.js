const { LightConeModel } = require('../models/starRailParser');

module.exports = (user) => {
  const cones = [];
  (user.starfaringCompanions || []).forEach(c => {
    if (c.lightCone) {
      cones.push({
        owner: c.characterData?.name?.get?.(),
        ...new LightConeModel(c.lightCone)
      });
    }
  });
  return cones;
};