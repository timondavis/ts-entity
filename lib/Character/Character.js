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
var RPGEntity_1 = require("../RPGEntity");
var EquipmentCollection_1 = require("../Item/EquipmentCollection");
var Character = /** @class */ (function (_super) {
    __extends(Character, _super);
    function Character() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.status = [];
        _this.powers = {};
        _this.blockedPowers = [];
        _this.inventory = [];
        _this.equipped = {};
        return _this;
    }
    Character.prototype.getStatus = function () {
        return this.status;
    };
    Character.prototype.getPowers = function () {
        return this.powers;
    };
    Character.prototype.getEquipment = function () {
        return this.equipped;
    };
    Character.prototype.getEquippedByLocation = function (location) {
        var _this = this;
        var current;
        Object.keys(this.equipped).forEach(function (key, index) {
            current = _this.equipped[key];
            if (current.getEquipsTo() == location) {
                return current;
            }
        });
        return false;
    };
    Character.prototype.getEquippedCollectionByType = function (type) {
        var _this = this;
        var equipped = [];
        var current;
        Object.keys(this.equipped).forEach(function (key, index) {
            current = _this.equipped[key];
            if (current.getType() == type) {
                equipped.push(current);
            }
        });
        return new EquipmentCollection_1.EquipmentCollection(equipped);
    };
    Character.prototype.getInventory = function () {
        return this.inventory;
    };
    Character.prototype.addToInventory = function (item) {
        this.inventory.push(item);
        return this;
    };
    Character.prototype.removeFromInventory = function (item) {
        var itemIndex = this.inventory.indexOf(item);
        if (itemIndex == -1) {
            return this;
        }
        this.inventory.splice(itemIndex, 1);
        return this;
    };
    Character.prototype.equip = function (item) {
        if (Object.keys(this.equipped).indexOf(item.getType()) !== -1) {
            throw ("Cannot equip item, type already claimed");
        }
        this.equipped[item.getType()] = item;
        return this;
    };
    Character.prototype.unequip = function (itemType) {
        delete this.equipped[itemType];
        return this;
    };
    Character.prototype.setPower = function (name, powerCallback) {
        this.powers[name] = powerCallback;
        return this;
    };
    Character.prototype.blockPower = function (name) {
        if (this.blockedPowers.indexOf(name) == -1) {
            this.blockedPowers.push(name);
        }
        return this;
    };
    Character.prototype.unblockPower = function (name) {
        var powerIndex = this.blockedPowers.indexOf(name);
        if (powerIndex == -1) {
            return this;
        }
        this.blockedPowers = this.blockedPowers.splice(powerIndex, 1);
    };
    Character.prototype.removePower = function (name) {
        delete this.powers[name];
    };
    Character.prototype.setStatus = function (status) {
        this.status.push(status);
        return this;
    };
    Character.prototype.removeStatus = function (status) {
        var statusIndex = this.status.indexOf(status);
        if (statusIndex == -1) {
            return this;
        }
        this.status = this.status.splice(statusIndex, 1);
        return this;
    };
    Character.prototype.usePower = function (name, target) {
        if (Object.keys(this.powers).indexOf(name) == -1) {
            throw ("Power invoked on character does not exist");
        }
        this.powers[name](this, target);
    };
    return Character;
}(RPGEntity_1.RPGEntity));
exports.Character = Character;
