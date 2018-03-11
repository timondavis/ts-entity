import {Mob} from "../Mob";
import {RPGUtil} from "../../RPGUtil";

export class D20MobFactory {

    public generate(): Mob {

        const mob = new Mob();

        mob.setName( "Halfling Slinger" );

        mob.setStat( 'STR', 12 );
        mob.setStat( 'DEX', 18 );
        mob.setStat( 'CON', 10 );
        mob.setStat( 'WIS', 11 );
        mob.setStat( 'INT', 10 );
        mob.setStat( 'CHA', 14 );

        mob.setStat( 'Initiative', 4 );
        mob.setStat( 'Perception', 5 );
        mob.setStat( 'HP', 22 );
        mob.setStat( 'FortituteSave', 12 );
        mob.setStat( 'Reflex', 15 );
        mob.setStat( 'Will', 13 );


        return mob;
    }
}