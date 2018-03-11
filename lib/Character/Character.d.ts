import { RPGEntity } from "../RPGEntity";
export declare class Character extends RPGEntity {
    private status;
    private powers;
    private blockedPowers;
    getStatus(): string[];
    getPowers(): {
        [key: string]: {
            (source: Character, target: Character): void;
        };
    };
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
