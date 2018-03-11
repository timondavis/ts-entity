"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.prototype.getName = function () {
        return this.name;
    };
    Item.prototype.getDescription = function () {
        return this.description;
    };
    Item.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Item.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    return Item;
}());
exports.Item = Item;
