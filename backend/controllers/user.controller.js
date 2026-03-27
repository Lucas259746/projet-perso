const { StarRail } = require("starrail.js");

const getUserData = require('../middlewares/user');
const getStarfaringCompanions = require('../middlewares/starfaringCompanions');
const getLightCones = require('../middlewares/lightCones');
const getRelics = require('../middlewares/relics');
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
    console.log(getUserData(user))
    console.log(getStats(user))
    console.log(getStarfaringCompanions(user))
    //res.json(cleanForJSON(responseData));

  } catch (error) {
    // Si l'utilisateur n'existe pas ou profil privé
    res.status(404).json({
      message: "Utilisateur non trouvé ou profil privé",
      error: error.message
    });
  }
};