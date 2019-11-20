"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var D20Character_1 = require("../../Character/d20/D20Character");
var Equipment_1 = require("../../Item/Equipment");
var D20CharacterPowers_1 = require("../../Power/D20CharacterPowers");
describe('D20CharacterPower', function () {
    it('Test it out', function () {
        var player = D20Character_1.D20CharacterFactory.generate({ 'HP': 20 });
        var goblin = D20Character_1.D20CharacterFactory.generate({ 'HP': 5 });
        player.setPower('attack', D20CharacterPowers_1.D20CharacterPowers.attack);
        goblin.setPower('attack', D20CharacterPowers_1.D20CharacterPowers.attack);
        var sword = new Equipment_1.Equipment();
        var helm = new Equipment_1.Equipment();
        var breastPlate = new Equipment_1.Equipment();
        sword.setStatusEffect('STR', 1);
        sword.setStat('DamageMin', 6);
        sword.setStat('DamageMax', 12);
        sword.setStat('Damage+', 2);
        sword.setType('Weapon');
        helm.setStat('Defense', 3);
        helm.setType('Armor');
        helm.setEquipsTo('Head');
        breastPlate.setStat('Defense', 2);
        breastPlate.setType('Armor');
        breastPlate.setEquipsTo('Body');
        player.equip(sword);
        player.equip(breastPlate);
        goblin.equip(sword);
        goblin.equip(helm);
        while (player.getStat('HP') > 0 && goblin.getStat('HP') > 0) {
            console.log("Player Attacks");
            player.usePower('attack', goblin);
            console.log("Player: " + player.getStat('HP'));
            console.log("Goblin: " + goblin.getStat('HP'));
            console.log("\n");
            console.log("\n");
            if (goblin.getStat('HP') > 0) {
                console.log("Goblin Attacks");
                goblin.usePower('attack', player);
                console.log("Player: " + player.getStat('HP'));
                console.log("Goblin: " + goblin.getStat('HP'));
                console.log("\n");
                console.log("\n");
            }
        }
    });
});
