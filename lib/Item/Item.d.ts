import { RPGEntity } from "../RPGEntity";
export declare class Item extends RPGEntity {
    private _canBeUsed;
    private _canBeEquipped;
    private quantity;
    private maxQuantity;
    canBeUsed(setToValue?: boolean): Item | boolean;
    canBeEquipped(setToValue?: boolean): Item | boolean;
    setQuantity(q: number): Item;
    getQuantity(): number;
    adjustQuantity(amount: number): Item;
}
