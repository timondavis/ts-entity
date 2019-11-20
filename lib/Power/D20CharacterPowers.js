"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var D20CharacterPowers = /** @class */ (function () {
    function D20CharacterPowers() {
    }
    D20CharacterPowers.attack = function (source, target) {
        // Get relevant equipped items
        var sourceWeapon = source.getEquippedCollectionByType('Weapon').getAtIndex(0);
        var targetArmor = source.getEquippedCollectionByType('Armor');
        // Get adjustments to attack and defense
        var attackBoost = (source.getStat('DEX') - 9) % 3;
        var acBoost = targetArmor.getStat('Defense');
        // Check to-hit
        var result = Math.floor(Math.random() * 20) + 1 + attackBoost;
        var minDamage = sourceWeapon.getStat('DamageMin');
        var maxDamage = sourceWeapon.getStat('DamageMax');
        var damage = 0;
        if (result >= target.getStat('AC') + acBoost) {
            damage = Math.floor(Math.random() * (maxDamage - minDamage)) + 1;
            damage += minDamage;
            damage *= -1;
        }
        target.adjustStat('HP', damage);
    };
    return D20CharacterPowers;
}());
exports.D20CharacterPowers = D20CharacterPowers;
