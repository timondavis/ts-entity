import {Item} from "./Item";

export class Equipment extends Item {

    private statusEffects : { [key:string] : number } = {};
    private type : string = "";
    private equipsTo: string = "";

    public constructor() {

        super();
        this.canBeEquipped( true );
    }

    public getType(): string {

        return this.type;
    }

    public getEquipsTo() : string {

        return this.equipsTo;
    }

    public getStatusEffects() : { [key:string]: number } {

        return this.statusEffects;
    }

    public getStatusEffect( key: string ) : number {

        return this.statusEffects[key];
    }

    public setEquipsTo( area: string ) : Equipment {

        this.equipsTo = area;
        return this;
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
