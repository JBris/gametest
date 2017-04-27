//Parent
import { Drop } from '../Drop';

//Behaviours
import { iProvidesBonus } from '../../Behaviour/iProvidesBonus';

//Player
import { iAttacks } from '../../Behaviour/iAttacks';

export class GiveAmmo implements iProvidesBonus {

    /*=============================
    **Fields**
    =============================*/
    private _drop: Drop;
    private _ammoDebouncer: number = 0;
    /*=============================
    **Constructors
    =============================*/

    constructor(drop : Drop)
    {
        this._drop = drop;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters

    /*=============================
    **Methods**
    =============================*/
    giveBonus(recipient: iAttacks): void
    {
        if (this._ammoDebouncer < this._drop.game.time.now) recipient.attack();
        this._ammoDebouncer = this._drop.game.time.now + 1000;
    }
}


