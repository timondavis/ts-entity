import {Item} from "./Item";

export class Equipment extends Item {

    private statusEffects : { [key:string] : number };
    private type : string;

    public getType(): string {

        return this.type;
    }

    public getStatusEffects() : { [key:string]: number } {

        return this.statusEffects;
    }

    public getStatusEffect( key: string ) : number {

        return this.statusEffects[key];
    }

    public setType( type: string ) : Equipment {

        this.type = type;
        return this;
    }

    public setStatusEffect( key: string, value: number ) : Equipment {

        if( Object.keys( this.statusEffects ).indexOf( key ) > -1 ) {
            throw ( "Cannot set value of existing status effect.  Use updateStatusEffect instead." );
        }

        this.statusEffects[key] = value;
        return this;
    }

    public updateStatusEffect( key: string, value: number ) : Equipment {

       this.statusEffects[key] = value;
       return this;
    }

    public adjustStatusEffect( key: string, value: number ) : Equipment {

        if ( Object.keys( this.statusEffects ).indexOf( key ) == -1 ) {

            throw("Cannot adjust value of non-existing status effect.  Set first with setStatusEffect." );
        }

        this.statusEffects[key] += value;
        return this;
    }
}
