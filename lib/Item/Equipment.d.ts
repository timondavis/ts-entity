import { Item } from "./Item";
export declare class Equipment extends Item {
    private statusEffects;
    private type;
    getType(): string;
    getStatusEffects(): {
        [key: string]: number;
    };
    getStatusEffect(key: string): number;
    setType(type: string): Equipment;
    setStatusEffect(key: string, value: number): Equipment;
    updateStatusEffect(key: string, value: number): Equipment;
    adjustStatusEffect(key: string, value: number): Equipment;
}
