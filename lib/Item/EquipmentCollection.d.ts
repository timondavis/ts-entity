import { Equipment } from "./Equipment";
export declare class EquipmentCollection extends Equipment {
    private collection;
    constructor(equipmentCollection: Equipment[]);
    getStat(name: string): number;
    getType(): string;
    getEquipsTo(): string;
    getStatusEffects(): {
        [key: string]: number;
    };
    getStatusEffect(key: string): number;
    setEquipsTo(area: string): Equipment;
    setType(type: string): Equipment;
    setStatusEffect(key: string, value: number): Equipment;
    updateStatusEffect(key: string, value: number): Equipment;
    adjustStatusEffect(key: string, value: number): Equipment;
    add(item: Equipment): Equipment;
    remove(item: Equipment): Equipment;
    getCollection(): Equipment[];
    getAtIndex(index: number): Equipment;
}
