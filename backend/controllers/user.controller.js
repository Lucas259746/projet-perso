const { StarRail } = require("starrail.js");

const getUserData = require('../middlewares/user');
const getStarfaringCompanions = require('../middlewares/starfaringCompanions');
const getLightCones = require('../middlewares/lightCones');
const getRelics = require('../middlewares/relics');
const getStats = require('../middlewares/stats');

const client = new StarRail();

/**
 * Fonction de nettoyage pour supprimer les références circulaires
 * et convertir les BigInt en String (souvent requis pour Star Rail)
 */
const cleanForJSON = (obj) => {
    return JSON.parse(
        JSON.stringify(obj, (key, value) => {
            // Empêche de sérialiser le client ou les timers s'ils traînent
            if (key === 'client' || key === '_idleNext' || key === '_idlePrev') return undefined;
            // Gère les grands nombres d'ID de Star Rail
            if (typeof value === 'bigint') return value.toString();
            return value;
        })
    );
};

exports.fetchUser = async (req, res) => {
  try {
    const uid = req.params.uid;

    // Appel au SDK
    const user = await client.fetchUser(uid);

    // Construction de votre objet de réponse via vos middlewares
    const responseData = {
      user: getUserData(user),
      stats: getStats(user),
      starfaringCompanions: getStarfaringCompanions(user),
      lightCones: getLightCones(user),
      relics: getRelics(user)
    };

    // NETTOYAGE CRITIQUE avant l'envoi
    const safeData = cleanForJSON(responseData);

    res.json(safeData);

  } catch (error) {
    console.error("Détails de l'erreur:", error);
    res.status(500).json({
      message: "Erreur API",
      error: error.message
    });
  }
};