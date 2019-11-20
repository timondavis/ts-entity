import {Character} from "../Character/Character";

export class D20CharacterPowers {

    public static attack( source: Character, target: Character ) {

        // Get relevant equipped items
        const sourceWeapon = source.getEquippedCollectionByType( 'Weapon' ).getAtIndex(0 );
        const targetArmor = source.getEquippedCollectionByType( 'Armor' );

        // Get adjustments to attack and defense
        const attackBoost = ( source.getStat( 'DEX' ) - 9 ) % 3;
        const acBoost = targetArmor.getStat( 'Defense' );

        // Check to-hit
        const result = Math.floor( Math.random() * 20 ) + 1 + attackBoost;
        const minDamage = sourceWeapon.getStat( 'DamageMin' );
        const maxDamage = sourceWeapon.getStat( 'DamageMax' );
        let damage = 0;

        if ( result >= target.getStat( 'AC' ) + acBoost ) {

            damage = Math.floor( Math.random() * ( maxDamage - minDamage )  ) + 1;
            damage += minDamage;
            damage *= -1;
        }

        target.adjustStat( 'HP', damage );
    }
}