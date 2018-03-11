import { Character } from "./Character";
import { MovementBehavior } from "../Behavior/MovementBehavior";
import { CombatBehavior } from "../Behavior/CombatBehavior";
export declare class NPC extends Character {
    private movementBehavior;
    private combatBehavior;
    getMovementBehavior(): MovementBehavior;
    getCombatBehavior(): CombatBehavior;
    setMovementBehavior(movementBehavior: MovementBehavior): NPC;
    setCombatBehavior(combatBehavior: CombatBehavior): NPC;
}
