import {CombatBehavior} from "./CombatBehavior";

export abstract class Behavior {


    private name: string;

    public getName() : string {
        return this.name;
    }

    public setName( name: string ) : Behavior {
        this.name = name;
        return this;
    }
}