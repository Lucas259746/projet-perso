module.exports = (user) => {
  return {
    username: user.enkaProfile?.username,
    bio: user.enkaProfile?.bio,
    avatar: user.enkaProfile?.avatar,
    url: user.enkaProfile?.url
  };
};