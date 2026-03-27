// models/StarRailParser.js

class CharacterModel {
  constructor(c) {
    this.id = c.characterData?.id;
    this.name = c.characterData?.name?.get?.() || "Unknown";
    this.rarity = c.characterData?.rarity;
    this.level = c.level;
    this.promotion = c.ascension;
    this.rank = c.eidolons?.length || 0; // Eidolons débloqués
    
    // Éléments et Chemins
    this.element = {
      id: c.characterData?.element?.id,
      name: c.characterData?.element?.name?.get?.()
    };
    this.path = {
      id: c.characterData?.path?.id,
      name: c.characterData?.path?.name?.get?.()
    };

    // Extraction des Traces (Skills)
    this.skills = (c.skills || []).map(s => ({
      id: s.id,
      name: s.skillData?.name?.get?.(),
      level: s.level,
      maxLevel: s.skillData?.maxLevel,
      type: s.skillData?.typeText?.get?.()
    }));

    this.lightCone = c.lightCone ? new LightConeModel(c.lightCone) : null;
    this.relics = (c.relics || []).map(r => new RelicModel(r));
  }
}

class LightConeModel {
  constructor(lc) {
    this.id = lc.lightConeData?.id;
    this.name = lc.lightConeData?.name?.get?.() || "Unknown";
    this.level = lc.level;
    this.rank = lc.superimposition;
    this.rarity = lc.lightConeData?.rarity;
    this.promotion = lc.ascension;
  }
}

class RelicModel {
  constructor(r) {
    this.id = r.relicData?.id;
    this.name = r.relicData?.name?.get?.() || "Unknown";
    this.level = r.level;
    this.rarity = r.relicData?.rarity;
    this.mainStat = {
      type: r.mainAffix?.type,
      name: r.mainAffix?.name?.get?.(),
      value: r.mainAffix?.value
    };
    this.subStats = (r.subAffixes || []).map(s => ({
      name: s.name?.get?.(),
      value: s.value,
      rolls: s.rolls
    }));
  }
}

module.exports = { CharacterModel, LightConeModel, RelicModel };