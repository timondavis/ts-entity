import {Character} from "./Character";
import {MovementBehavior} from "../Behavior/MovementBehavior";
import {CombatBehavior} from "../Behavior/CombatBehavior";

export class NPC extends Character {

    private movementBehavior: MovementBehavior;
    private combatBehavior: CombatBehavior;

    public getMovementBehavior(): MovementBehavior {
        return this.movementBehavior;
    }

    public getCombatBehavior(): CombatBehavior {
        return this.combatBehavior;
    }

    public setMovementBehavior( movementBehavior: MovementBehavior ) : NPC {

        this.movementBehavior = movementBehavior;
        return this;
    }

    public setCombatBehavior( combatBehavior: CombatBehavior ) : NPC {

        this.combatBehavior = combatBehavior;
        return this;
    }
}