module.exports = (user) => {
  const cones = [];
  // Le SDK place les personnages dans starfaringCompanions
  const companions = user.starfaringCompanions || [];

  companions.forEach(c => {
    if (c.lightCone) {
      cones.push({
        name: c.lightCone.lightConeData.name, // Plus de .get() ici
        level: c.lightCone.level,
        ascension: c.lightCone.ascension,
        superimposition: c.lightCone.superimposition,
        rarity: c.lightCone.lightConeData.rarity
      });
    }
  });

  return cones;
};