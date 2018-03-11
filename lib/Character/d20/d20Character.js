"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character_1 = require("../Character");
var RPGUtil_1 = require("../../RPGUtil");
var D20CharacterFactory = /** @class */ (function () {
    function D20CharacterFactory() {
    }
    D20CharacterFactory.generate = function (presets) {
        var character = new Character_1.Character();
        character.setStat('STR', RPGUtil_1.RPGUtil.d(4, 6));
        character.setStat('DEX', RPGUtil_1.RPGUtil.d(4, 6));
        character.setStat('CON', RPGUtil_1.RPGUtil.d(4, 6));
        character.setStat('WIS', RPGUtil_1.RPGUtil.d(4, 6));
        character.setStat('INT', RPGUtil_1.RPGUtil.d(4, 6));
        character.setStat('CHA', RPGUtil_1.RPGUtil.d(4, 6));
        Object.keys(presets).forEach(function (key, index) {
            character.updateStat(key, presets[key]);
        });
        return character;
    };
    return D20CharacterFactory;
}());
exports.D20CharacterFactory = D20CharacterFactory;
