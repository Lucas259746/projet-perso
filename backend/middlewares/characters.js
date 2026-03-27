
const { StarRail } = require("starrail.js");
const client = new StarRail({ defaultLanguage: "en" });

const characters = client.getAllCharacters();

for (const character of characters) {
    const name = character.name.get();
    const combatType = character.combatType.name.get();

    console.log(`"${name}" - ${combatType}`);
}
