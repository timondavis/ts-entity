import { Item } from "./Item";
export declare class Equipment extends Item {
    private statusEffects;
    private type;
    private equipsTo;
    constructor();
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
}
