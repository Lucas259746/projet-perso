module.exports = (user) => {
  const companions = user.starfaringCompanions || [];
  
  return companions.map(c => ({
    character: c.characterData?.name || "Unknown",
    relics: (c.relics || []).map(r => ({
      name: r.relicData?.name || "Unknown",
      level: r.level,
      mainStat: {
        name: r.mainAffix?.name || "Unknown",
        value: r.mainAffix?.value || 0
      }
    }))
  }));
};