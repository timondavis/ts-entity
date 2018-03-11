import {Equipment} from "./Equipment";

export class Weapon extends Equipment {

    public constructor() {

        super();

        this.setStat( "Damage", 0 );
        this.setType( "Weapon" );
    }
}