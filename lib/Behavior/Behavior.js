"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Behavior = /** @class */ (function () {
    function Behavior() {
    }
    Behavior.prototype.getName = function () {
        return this.name;
    };
    Behavior.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    return Behavior;
}());
exports.Behavior = Behavior;
