import {RPGEntity} from "../RPGEntity";

export class Item extends RPGEntity{

    private _canBeUsed = false;
    private _canBeEquipped = false;

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
}