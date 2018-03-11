import { Character } from "../Character";
export declare class D20CharacterFactory {
    static generate(presets: {
        [key: string]: number;
    }): Character;
}
