import { RPGEntity } from "../RPGEntity";
import { Item } from "../Item/Item";
import { Equipment } from "../Item/Equipment";
import { EquipmentCollection } from "../Item/EquipmentCollection";
export declare class Character extends RPGEntity {
    private status;
    private powers;
    private blockedPowers;
    private inventory;
    private equipped;
    getStatus(): string[];
    getPowers(): {
        [key: string]: {
            (source: Character, target: Character): void;
        };
    };
    getEquipment(): {
        [key: string]: Equipment;
    };
    getEquippedByLocation(location: string): Equipment | boolean;
    getEquippedCollectionByType(type: string): EquipmentCollection;
    getInventory(): Item[];
    addToInventory(item: Item): Character;
    removeFromInventory(item: Item): Character;
    equip(item: Equipment): Character;
    unequip(itemType: string): Character;
    setPower(name: string, powerCallback: {
        (source: Character, target: Character): void;
    }): RPGEntity;
    blockPower(name: string): Character;
    unblockPower(name: string): this | undefined;
    removePower(name: string): void;
    setStatus(status: string): Character;
    removeStatus(status: string): Character;
    usePower(name: string, target: Character): void;
}
