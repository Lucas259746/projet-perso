module.exports = (user) => {
  const cones = [];

  user.starfaringCompanions.forEach(c => {
    if (c.lightCone) {
      cones.push({
        name: c.lightCone.lightConeData.name.get(),
        level: c.lightCone.level,
        ascension: c.lightCone.ascension,
        superimposition: c.lightCone.superimposition,
        rarity: c.lightCone.lightConeData.rarity
      });
    }
  });

  return cones;
};