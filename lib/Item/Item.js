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
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._canBeUsed = false;
        _this._canBeEquipped = false;
        _this.quantity = 1;
        _this.maxQuantity = -1;
        return _this;
    }
    Item.prototype.canBeUsed = function (setToValue) {
        if (setToValue) {
            this._canBeUsed = setToValue;
            return this;
        }
        return this._canBeUsed;
    };
    Item.prototype.canBeEquipped = function (setToValue) {
        if (setToValue) {
            this._canBeEquipped = setToValue;
            return this;
        }
        return this._canBeEquipped;
    };
    Item.prototype.setQuantity = function (q) {
        if (this.maxQuantity >= 0 && this.maxQuantity <= q) {
            return this;
        }
        this.quantity = q;
        return this;
    };
    Item.prototype.getQuantity = function () {
        return this.quantity;
    };
    Item.prototype.adjustQuantity = function (amount) {
        if (this.quantity - amount <= 0) {
            this.quantity = 0;
            return this;
        }
        if (this.maxQuantity >= 0 && this.quantity + amount > this.maxQuantity) {
            this.quantity = this.maxQuantity;
            return this;
        }
        this.quantity += amount;
        return this;
    };
    return Item;
}(RPGEntity_1.RPGEntity));
exports.Item = Item;
