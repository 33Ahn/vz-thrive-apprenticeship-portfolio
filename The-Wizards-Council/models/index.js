const { Spell } = require("./Spell");
const { Wizard } = require("./Wizard");

//One-To-Many Relationship
Wizard.hasMany(Spell, { as: "spells", foreignKey: "wizardId" });

module.exports = {
  Spell,
  Wizard,
};
