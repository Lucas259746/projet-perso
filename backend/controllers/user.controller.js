const { StarRail } = require("starrail.js");

const getUserData = require('../middlewares/user');
const getStarfaringCompanions = require('../middlewares/starfaringCompanions');
const getLightCones = require('../middlewares/lightCones');
const getStats = require('../middlewares/stats');
 


const client = new StarRail({ language: "en" });

exports.fetchUser = async (req, res) => {
  try {
    const { uid } = req.params;
    
    // Validation basique de l'UID
    if (!uid || isNaN(uid)) {
      return res.status(400).json({ message: "UID invalide" });
    }

    const user = await client.fetchUser(uid);

    const responseData = {
      player: getUserData(user),
      stats: getStats(user),
      StarfaringCompanions: getStarfaringCompanions(user), 
    };

    res.json(responseData);

  } catch (error) {

    res.status(404).json({
      message: "Utilisateur non trouvé",
      error: error.message
    });
  }
};