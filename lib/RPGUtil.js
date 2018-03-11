"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RPGUtil = /** @class */ (function () {
    function RPGUtil() {
    }
    RPGUtil.d = function (amount, sides) {
        var output = 0;
        for (var i = 0; i < amount; i++) {
            output += Math.floor(Math.random() * sides) + 1;
        }
        return output;
    };
    return RPGUtil;
}());
exports.RPGUtil = RPGUtil;
