module.exports = (user) => {
  return user.starfaringCompanions.map(c => ({
    character: c.characterData?.name?.get?.() || "Unknown",

    relics: c.relics?.map(r => ({
      name: r.relicData?.name?.get?.() || "Unknown",
      level: r.level,

      mainStat: {
        name: r.mainAffix?.name?.get?.() || "Unknown",
        value: r.mainAffix?.value || 0
      }
    })) || []
  }));
};