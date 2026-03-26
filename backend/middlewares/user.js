
module.exports = (user) => {
  return {
    uid: user.uid,
    nickname: user.nickname,
    level: user.level,
    worldLevel: user.equilibriumLevel,
    region: user._data.region,
    friends: user.friends,
    achievements: user.achievementCount,
  };
};
