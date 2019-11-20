import {Character} from "../Character";
import {RPGUtil} from "../../RPGUtil";

export class D20CharacterFactory {

    public static generate( presets: { [key:string] : number }) : Character {

        const character = new Character();

        character.setStat( 'STR', RPGUtil.d( 4, 6 ) );
        character.setStat( 'DEX', RPGUtil.d( 4, 6 ) );
        character.setStat( 'CON', RPGUtil.d( 4, 6 ) );
        character.setStat( 'WIS', RPGUtil.d( 4, 6 ) );
        character.setStat( 'INT', RPGUtil.d( 4, 6 ) );
        character.setStat( 'CHA', RPGUtil.d( 4, 6 ) );
        character.setStat( 'AC', 10 );


        Object.keys( presets ).forEach( function( key: string, index: number ) {
            character.updateStat( key, presets[key] );
        });

        return character;
    }
}