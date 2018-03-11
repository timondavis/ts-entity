"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = require("./Item");
var Equipment = /** @class */ (function (_super) {
    __extends(Equipment, _super);
    function Equipment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Equipment.prototype.getType = function () {
        return this.type;
    };
    Equipment.prototype.getStatusEffects = function () {
        return this.statusEffects;
    };
    Equipment.prototype.getStatusEffect = function (key) {
        return this.statusEffects[key];
    };
    Equipment.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    Equipment.prototype.setStatusEffect = function (key, value) {
        if (Object.keys(this.statusEffects).indexOf(key) > -1) {
            throw ("Cannot set value of existing status effect.  Use updateStatusEffect instead.");
        }
        this.statusEffects[key] = value;
        return this;
    };
    Equipment.prototype.updateStatusEffect = function (key, value) {
        this.statusEffects[key] = value;
        return this;
    };
    Equipment.prototype.adjustStatusEffect = function (key, value) {
        if (Object.keys(this.statusEffects).indexOf(key) == -1) {
            throw ("Cannot adjust value of non-existing status effect.  Set first with setStatusEffect.");
        }
        this.statusEffects[key] += value;
        return this;
    };
    return Equipment;
}(Item_1.Item));
exports.Equipment = Equipment;
