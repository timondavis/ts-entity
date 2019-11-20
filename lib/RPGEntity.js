"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RPGEntity = /** @class */ (function () {
    function RPGEntity() {
        this.stats = {};
        this.name = '';
        this.description = '';
    }
    RPGEntity.prototype.getName = function () {
        return this.name;
    };
    RPGEntity.prototype.getDescription = function () {
        return this.description;
    };
    RPGEntity.prototype.getStats = function () {
        return this.stats;
    };
    RPGEntity.prototype.getStat = function (name) {
        if (Object.keys(this.stats).indexOf(name) == -1) {
            return null;
        }
        return this.stats[name];
    };
    RPGEntity.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RPGEntity.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    RPGEntity.prototype.setStat = function (key, value) {
        if (Object.keys(this.stats).indexOf(key) > -1) {
            throw ("Cannot set an existing stat.  Use updateStat instead.");
        }
        this.stats[key] = value;
        return this;
    };
    RPGEntity.prototype.updateStat = function (key, value) {
        this.stats[key] = value;
        return this;
    };
    RPGEntity.prototype.adjustStat = function (key, value) {
        if (Object.keys(this.stats).indexOf(key) == -1) {
            throw ("Cannot adjust a non-existing stat.  Use setState to initialzie the value first.");
        }
        this.stats[key] += value;
        return this;
    };
    RPGEntity.prototype.setCallback = function (event, callback) {
        if (Object.keys(this.eventCallbacks).indexOf(event) !== -1) {
            throw ("Cannot overwrite existing callbacks on an RPGEntity.  Remove the existing callback first with" +
                " removeCallback");
        }
        this.eventCallbacks[event] = callback;
        return this;
    };
    RPGEntity.prototype.removeCallback = function (event) {
        delete this.eventCallbacks[event];
    };
    RPGEntity.prototype.executeCallback = function (event, entities) {
        if (Object.keys(this.eventCallbacks).indexOf(event) !== -1) {
            this.eventCallbacks[event](event, entities);
        }
        return this;
    };
    return RPGEntity;
}());
exports.RPGEntity = RPGEntity;
