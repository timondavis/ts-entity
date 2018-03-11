import {Item} from "./Item/Item";

export class RPGEntity {

    private stats : { [key:string] : number };
    private name: string;
    private description: string;

    private eventCallbacks: { [key:string] : { ( event: string, entities?: RPGEntity[] ): void } };

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getStats() : { [key:string] : number } {

        return this.stats;
    }

    public getStat( key: string ): number {

        return this.stats[key];
    }

    public setName( name: string ) : RPGEntity {

        this.name = name;
        return this;
    }

    public setDescription( description: string ) : RPGEntity {
        this.description = description;
        return this;
    }


    public setStat( key: string, value: number ): RPGEntity {

        if ( Object.keys( this.stats ).indexOf( key ) > -1 ) {
            throw( "Cannot set an existing stat.  Use updateStat instead." );
        }

        this.stats[key] = value;
        return this;
    }

    public updateStat( key: string, value: number): RPGEntity {

        this.stats[key] = value;
        return this;
    }

    public adjustStat( key: string, value: number) : RPGEntity {

        if ( Object.keys( this.stats ).indexOf( key ) == -1 ) {
            throw( "Cannot adjust a non-existing stat.  Use setState to initialzie the value first." );
        }

        this.stats[key] += value;
        return this;
    }

    public setCallback( event: string, callback: {( event: string, entities?: RPGEntity[] ) : void} ) : RPGEntity {

        if ( Object.keys( this.eventCallbacks ).indexOf( event ) !== -1 ) {
            throw ("Cannot overwrite existing callbacks on an RPGEntity.  Remove the existing callback first with" +
                " removeCallback");
        }

        this.eventCallbacks[event] = callback;
        return this;
    }

    public removeCallback( event: string ) {

        delete this.eventCallbacks[event];
    }

    public executeCallback( event: string, entities: RPGEntity[] ) : RPGEntity {

        if ( Object.keys( this.eventCallbacks ).indexOf( event ) !== -1 ) {

            this.eventCallbacks[event]( event, entities );
        }

        return this;
    }

}