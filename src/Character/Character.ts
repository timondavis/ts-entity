import {RPGEntity} from "../RPGEntity";
import {Item} from "../Item/Item";
import {Equipment} from "../Item/Equipment";

export class Character extends RPGEntity {

    private status: string[] = [];
    private powers: { [key:string] : { ( source: Character, target: Character ) : void } } = {};
    private blockedPowers : string[] = [];
    private inventory: Item[];
    private equipped: { [key:string] : Equipment } = {};

    public getStatus() : string[] {

        return this.status
    }

    public getPowers() : { [key:string] : { ( source: Character, target: Character ) : void } } {

        return this.powers;
    }

    public getEquipment() : { [key:string] : Equipment } {

        return this.equipped;
    }

    public getInventory() : Item[] {
        return this.inventory;
    }

    public addToInventory( item : Item ): Character {

        this.inventory.push( item );
        return this;
    }

    public removeFromInventory( item: Item ): Character {

        const itemIndex = this.inventory.indexOf( item );

        if ( itemIndex == -1 ) { return this; }

        this.inventory.splice( itemIndex, 1 );
        return this;
    }

    public equip( item: Equipment ): Character {

        if( Object.keys( this.equipped ).indexOf( item.getType() ) !== -1 ) {
            throw( "Cannot equip item, type already claimed" );
        }

        this.equipped[item.getType()] = item;
        return this;
    }

    public unequip( itemType: string ): Character {

        delete this.equipped[itemType];
        return this;
    }


    public setPower( name: string, powerCallback : { ( source: Character, target: Character ) : void } ) : RPGEntity {

        this.powers[name] = powerCallback;
        return this;
    }

    public blockPower( name: string ) : Character {

        if ( this.blockedPowers.indexOf( name ) == -1 ) {

            this.blockedPowers.push( name );
        }

        return this;
    }

    public unblockPower( name: string ) {

        const powerIndex = this.blockedPowers.indexOf( name );

        if ( powerIndex == -1 ) {
            return this;
        }

        this.blockedPowers = this.blockedPowers.splice( powerIndex, 1 );
    }

    public removePower( name: string ) {

        delete this.powers[name];
    }

    public setStatus( status: string ) : Character {

        this.status.push( status );
        return this;
    }

    public removeStatus( status: string ) : Character {

        const statusIndex = this.status.indexOf( status );

        if ( statusIndex == -1 ) { return this; }
        this.status = this.status.splice( statusIndex, 1 );

        return this;
    }

    public usePower( name: string, target: Character ) {

        if ( Object.keys( this.powers ).indexOf( name ) == -1 ) {

            throw( "Power invoked on character does not exist" );
        }

        this.powers[name]( this, target );
    }
}