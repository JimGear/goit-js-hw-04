const atTheOldToad = {
  potions: [],
  getPotions() {
    return `List of all available potions`;
  },
  addPotion(potionName) {
    return `Adding ${potionName}`;
  },
  addPotion(potionName) {},
};

atTheOldToad.getPotions();
atTheOldToad.addPotion("Invisibility");
atTheOldToad.addPotion("Power potion");
