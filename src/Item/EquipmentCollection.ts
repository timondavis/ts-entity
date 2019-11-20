import {Equipment} from "./Equipment";

export class EquipmentCollection extends Equipment {

    private collection: Equipment[] = [];

    public constructor( equipmentCollection: Equipment[] ) {

        super();
        this.collection = equipmentCollection;
    }

    public getStat( name: string ): number {

        let value = 0;
        let current: Equipment;

        for ( let i = 0 ; i < this.collection.length ; i++ ) {

            current = this.collection[i];

            if ( Object.keys( current.getStats() ).indexOf( name ) != -1 ) {

                value += current.getStat( name );
            }
        }

        return value;
    }

    public getType(): string {

        if ( this.collection.length < 1 ) { return ""; }

        let type: string = this.collection[0].getType();

        for ( let i = 1 ; i < this.collection.length ; i++ ) {

            if ( this.collection.length[i].getType() != type ) {
                return 'mixed';
            }
        }

        return type;
    }

    public getEquipsTo() : string {

        if ( this.collection.length < 1 ) { return ""; }

        let equipsTo: string = this.collection[0].getEquipsTo();

        for ( let i = 1 ; i < this.collection.length ; i++ ) {

            if ( this.collection.length[i].getEquipsTo() != equipsTo ) {
                return 'mixed';
            }
        }

        return equipsTo;
    }

    public getStatusEffects() : { [key:string]: number } {

        let totalCollection: { [key:string]: number } = {};

        for ( let i = 0 ; i < this.collection.length; i++ ) {

            let statusEffects = this.collection[i].getStatusEffects();

            Object.keys( statusEffects ).forEach( ( key: string ) => {

                if ( Object.keys( statusEffects.indexOf( key ) == -1 ) ) { totalCollection[key] = statusEffects[key]; }
                else { totalCollection[key] += statusEffects[key] }
            });
        }

        return totalCollection;
    }

    public getStatusEffect( key: string ) : number {

        throw( "Cannot get status effects of equipment collection" );
    }

    public setEquipsTo( area: string ) : Equipment {

        for ( let i = 0 ; i < this.collection.length ; i++ ) {

           this.collection[i].setEquipsTo( area );
        }
        return this;
    }

    public setType( type: string ) : Equipment {

        for ( let i = 0 ; i < this.collection.length ; i++ ) {

            this.collection[i].setType( type );
        }
        return this;
    }

    public setStatusEffect( key: string, value: number ) : Equipment {

        for ( let i = 0 ; i < this.collection.length ; i++ ) {

            this.collection[i].setStatusEffect( key, value );
        }

        return this;
    }

    public updateStatusEffect( key: string, value: number ) : Equipment {

        for( let i = 0 ; i < this.collection.length ; i++ ) {

            this.collection[i].updateStatusEffect( key, value );
        }

        return this;
    }

    public adjustStatusEffect( key: string, value: number ) : Equipment {

        for( let i = 0 ; i < this.collection.length ; i++ ) {

            this.collection[i].adjustStatusEffect( key, value );
        }

        return this;
    }

    public add( item: Equipment ): Equipment {

        this.collection.push( item );
        return this;
    }

    public remove( item: Equipment ): Equipment {

        for ( let i = 0 ; i < this.collection.length ; i++ ) {

            if ( this.collection[i] == item ) {
                this.collection.splice( i, 1 );
            }
        }

        return this;
    }

    public getCollection() : Equipment[] {

        return this.collection;
    }

    public getAtIndex( index: number ) {

        return this.collection[index];
    }
}