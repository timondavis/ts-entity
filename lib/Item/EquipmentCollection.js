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
var Equipment_1 = require("./Equipment");
var EquipmentCollection = /** @class */ (function (_super) {
    __extends(EquipmentCollection, _super);
    function EquipmentCollection(equipmentCollection) {
        var _this = _super.call(this) || this;
        _this.collection = [];
        _this.collection = equipmentCollection;
        return _this;
    }
    EquipmentCollection.prototype.getStat = function (name) {
        var value = 0;
        var current;
        for (var i = 0; i < this.collection.length; i++) {
            current = this.collection[i];
            if (Object.keys(current.getStats()).indexOf(name) != -1) {
                value += current.getStat(name);
            }
        }
        return value;
    };
    EquipmentCollection.prototype.getType = function () {
        if (this.collection.length < 1) {
            return "";
        }
        var type = this.collection[0].getType();
        for (var i = 1; i < this.collection.length; i++) {
            if (this.collection.length[i].getType() != type) {
                return 'mixed';
            }
        }
        return type;
    };
    EquipmentCollection.prototype.getEquipsTo = function () {
        if (this.collection.length < 1) {
            return "";
        }
        var equipsTo = this.collection[0].getEquipsTo();
        for (var i = 1; i < this.collection.length; i++) {
            if (this.collection.length[i].getEquipsTo() != equipsTo) {
                return 'mixed';
            }
        }
        return equipsTo;
    };
    EquipmentCollection.prototype.getStatusEffects = function () {
        var totalCollection = {};
        var _loop_1 = function (i) {
            var statusEffects = this_1.collection[i].getStatusEffects();
            Object.keys(statusEffects).forEach(function (key) {
                if (Object.keys(statusEffects.indexOf(key) == -1)) {
                    totalCollection[key] = statusEffects[key];
                }
                else {
                    totalCollection[key] += statusEffects[key];
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.collection.length; i++) {
            _loop_1(i);
        }
        return totalCollection;
    };
    EquipmentCollection.prototype.getStatusEffect = function (key) {
        throw ("Cannot get status effects of equipment collection");
    };
    EquipmentCollection.prototype.setEquipsTo = function (area) {
        for (var i = 0; i < this.collection.length; i++) {
            this.collection[i].setEquipsTo(area);
        }
        return this;
    };
    EquipmentCollection.prototype.setType = function (type) {
        for (var i = 0; i < this.collection.length; i++) {
            this.collection[i].setType(type);
        }
        return this;
    };
    EquipmentCollection.prototype.setStatusEffect = function (key, value) {
        for (var i = 0; i < this.collection.length; i++) {
            this.collection[i].setStatusEffect(key, value);
        }
        return this;
    };
    EquipmentCollection.prototype.updateStatusEffect = function (key, value) {
        for (var i = 0; i < this.collection.length; i++) {
            this.collection[i].updateStatusEffect(key, value);
        }
        return this;
    };
    EquipmentCollection.prototype.adjustStatusEffect = function (key, value) {
        for (var i = 0; i < this.collection.length; i++) {
            this.collection[i].adjustStatusEffect(key, value);
        }
        return this;
    };
    EquipmentCollection.prototype.add = function (item) {
        this.collection.push(item);
        return this;
    };
    EquipmentCollection.prototype.remove = function (item) {
        for (var i = 0; i < this.collection.length; i++) {
            if (this.collection[i] == item) {
                this.collection.splice(i, 1);
            }
        }
        return this;
    };
    EquipmentCollection.prototype.getCollection = function () {
        return this.collection;
    };
    EquipmentCollection.prototype.getAtIndex = function (index) {
        return this.collection[index];
    };
    return EquipmentCollection;
}(Equipment_1.Equipment));
exports.EquipmentCollection = EquipmentCollection;
