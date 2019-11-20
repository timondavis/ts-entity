import {RPGEntity} from "../RPGEntity";

export class Item extends RPGEntity{

    private _canBeUsed = false;
    private _canBeEquipped = false;
    private quantity = 1;
    private maxQuantity = -1;

    public canBeUsed( setToValue?: boolean ) : Item | boolean  {

        if ( setToValue ) {

            this._canBeUsed = setToValue;
            return this;
        }

        return this._canBeUsed;
    }

    public canBeEquipped( setToValue? : boolean ) : Item | boolean {

        if ( setToValue ) {
            this._canBeEquipped = setToValue;
            return this;
        }

        return this._canBeEquipped;
    }

    public setQuantity( q : number ) : Item {

        if (this.maxQuantity >= 0 && this.maxQuantity <= q) {
            return this;
        }

        this.quantity = q;
        return this;
    }

    public getQuantity() : number {

        return this.quantity;
    }

    public adjustQuantity( amount: number ) : Item {

        if ( this.quantity - amount <= 0 ) {
            this.quantity = 0;
            return this;
        }

        if ( this.maxQuantity >= 0 && this.quantity + amount > this.maxQuantity ) {
           this.quantity = this.maxQuantity;
           return this;
        }

        this.quantity += amount;
        return this;
    }

}