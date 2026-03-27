class LightConeModel {
  constructor(lc) {
    if (!lc) return null;
    this.id = lc.lightConeData?.id;
    this.name = lc.lightConeData?.name?.get?.() || "Unknown";
    this.level = lc.level;
    this.ascension = lc.ascension;
    this.superimposition = lc.superimposition?.level || 1;
    this.rarity = lc.lightConeData?.stars;
  }
}

class RelicModel {
  constructor(r) {
    if (!r) return null;
    this.id = r.relicData?.id;
    this.name = r.relicData?.name?.get?.() || "Unknown";
    this.level = r.level;
    this.rarity = r.relicData?.stars;
    
    // Statistique principale
    this.mainStat = {
      name: r.mainAffix?.type?.name?.get?.() || "Unknown",
      value: r.mainAffix?.value
    };

    // Statistiques secondaires (subAffixes)
    this.subStats = (r.subAffixes || []).map(s => ({
      name: s.type?.name?.get?.() || "Unknown",
      value: s.value,
      count: s.rolls // Nombre d'améliorations sur cette stat
    }));
  }
}

class CharacterModel {
  constructor(c) {
    this.id = c.characterData?.id;
    this.name = c.characterData?.name?.get?.() || "Unknown";
    this.level = c.level;
    this.rarity = c.characterData?.stars;
    this.eidolons = c.eidolons;
    this.ascension = c.ascension;

    // Combat & Type
    this.path = c.characterData?.path?.name?.get?.();
    this.element = c.characterData?.combatType?.name?.get?.();

    // Équipement
    this.lightCone = c.lightCone ? new LightConeModel(c.lightCone) : null;
    this.relics = (c.relics || []).map(r => new RelicModel(r));

    // Traces (Skill Tree) - On filtre pour ne garder que les activées
    this.traces = (c.skillTreeNodes || [])
      .filter(node => node.level > 0)
      .map(node => ({
        id: node.id,
        level: node.level
      }));

    // Statistiques finales (Overall Stats)
    // On extrait les stats clés : HP, ATK, DEF, SPD, CRIT Rate, CRIT DMG
    this.finalStats = (c.stats?.overallStats?.values || []).map(s => ({
      name: s.type?.name?.get?.(),
      value: s.value
    }));
  }
}

module.exports = { CharacterModel, LightConeModel, RelicModel };