module.exports = (user) => {
  return user.starfaringCompanions.map(c => ({
    id: c.characterData?.id || null,

    name: c.characterData?.name?.get?.() || "Unknown",

    level: c.level,
    ascension: c.ascension,
    eidolons: c.eidolons,

    lightCone: c.lightCone
      ? {
          name: c.lightCone.lightConeData?.name?.get?.() || "Unknown",
          level: c.lightCone.level
        }
      : null
  }));
};