import { RPGEntity } from "../RPGEntity";
export declare class Item extends RPGEntity {
    private _canBeUsed;
    private _canBeEquipped;
    canBeUsed(setToValue?: boolean): Item | boolean;
    canBeEquipped(setToValue?: boolean): Item | boolean;
}
