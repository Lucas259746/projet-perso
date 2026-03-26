const { StarRail } = require("starrail.js");

const getUserData = require('../middlewares/user');
const getStarfaringCompanions = require('../middlewares/starfaringCompanions');
const getLightCones = require('../middlewares/lightCones');
const getRelics = require('../middlewares/relics');
const getStats = require('../middlewares/stats');
const { get } = require("../app");

const client = new StarRail();

exports.fetchUser = async (req, res) => {
  try {
    const uid = req.params.uid;

    const user = await client.fetchUser(uid);
    //console.log(user);
    console.log(getUserData(user));
    console.log(getStarfaringCompanions(user));
    console.log(getLightCones(user));
    console.log(getRelics(user));
    console.log(getStats(user));
    res.json({
      user: getUserData(user),
      stats: getStats(user),
      starfaringCompanions: getStarfaringCompanions(user),
      lightCones: getLightCones(user),
      relics: getRelics(user)
    });



  } catch (error) {
    res.status(500).json({
      message: "Erreur API",
      error: error.message
    });
  }
};