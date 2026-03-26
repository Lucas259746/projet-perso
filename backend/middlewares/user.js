module.exports = (user) => {
  return {
    uid: user.uid,
    nickname: user.nickname,
    level: user.level,
    worldLevel: user.equilibriumLevel,
    // On évite de renvoyer l'objet 'friends' complet pour la sécurité
    friendCount: user.friends?.length || 0,
    achievements: user.achievementCount,
  };
};