import {expect} from 'chai';
import 'mocha';
import {D20CharacterFactory} from "../../Character/d20/D20Character";
import {Equipment} from "../../Item/Equipment";
import {D20CharacterPowers} from "../../Power/D20CharacterPowers";

describe( 'D20CharacterPower', () => {

    it( 'Test it out', () => {

        let player = D20CharacterFactory.generate( { 'HP': 20 } );
        let goblin = D20CharacterFactory.generate( { 'HP': 5 } );

        player.setPower( 'attack', D20CharacterPowers.attack );
        goblin.setPower( 'attack', D20CharacterPowers.attack );

        let sword = new Equipment();
        let helm  = new Equipment();
        let breastPlate = new Equipment();

        sword.setStatusEffect( 'STR', 1 );
        sword.setStat( 'DamageMin', 6 );
        sword.setStat( 'DamageMax', 12 );
        sword.setStat( 'Damage+', 2 );
        sword.setType( 'Weapon' );

        helm.setStat( 'Defense', 3 );
        helm.setType( 'Armor' );
        helm.setEquipsTo( 'Head' );

        breastPlate.setStat( 'Defense', 2 );
        breastPlate.setType( 'Armor' );
        breastPlate.setEquipsTo( 'Body' );

        player.equip( sword );
        player.equip( breastPlate );
        goblin.equip( sword );
        goblin.equip( helm );


        while( player.getStat( 'HP' ) > 0 && goblin.getStat( 'HP' ) > 0 ) {

            console.log( "Player Attacks" );
            player.usePower( 'attack', goblin );
            console.log( "Player: " + player.getStat( 'HP' ) );
            console.log( "Goblin: " + goblin.getStat( 'HP' ) );
            console.log( "\n" );
            console.log( "\n" );

            if ( goblin.getStat( 'HP' ) > 0 ) {

                console.log( "Goblin Attacks");
                goblin.usePower( 'attack', player );
                console.log( "Player: " + player.getStat( 'HP' ) );
                console.log( "Goblin: " + goblin.getStat( 'HP' ) );
                console.log( "\n" );
                console.log( "\n" );
            }
        }
    });
});