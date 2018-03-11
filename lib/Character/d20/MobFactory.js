"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mob_1 = require("../Mob");
var D20MobFactory = /** @class */ (function () {
    function D20MobFactory() {
    }
    D20MobFactory.prototype.generate = function () {
        var mob = new Mob_1.Mob();
        mob.setName("Halfling Slinger");
        mob.setStat('STR', 12);
        mob.setStat('DEX', 18);
        mob.setStat('CON', 10);
        mob.setStat('WIS', 11);
        mob.setStat('INT', 10);
        mob.setStat('CHA', 14);
        mob.setStat('Initiative', 4);
        mob.setStat('Perception', 5);
        mob.setStat('HP', 22);
        mob.setStat('FortituteSave', 12);
        mob.setStat('Reflex', 15);
        mob.setStat('Will', 13);
        return mob;
    };
    return D20MobFactory;
}());
exports.D20MobFactory = D20MobFactory;
