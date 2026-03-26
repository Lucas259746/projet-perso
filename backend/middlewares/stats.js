module.exports = (user) => {
  return {
    achievements: user.achievementCount,
    characters: user.characterCount,
    lightCones: user.lightConeCount,
    relics: user.relicCount,
    books: user.bookCount,
    music: user.musicCount,
    // On extrait la valeur numérique si possible
    simulatedUniverse: user.simulatedUniverse?.world || 0 
  };
};