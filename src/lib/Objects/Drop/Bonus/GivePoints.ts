//Parent
import { Drop } from '../Drop';

//Behaviours
import { iProvidesBonus } from '../../Behaviour/iProvidesBonus';

//Player
import { iPlayer } from '../../Player/iPlayer';

export class GivePoints implements iProvidesBonus {

    /*=============================
    **Fields**
    =============================*/
    private _drop: Drop;
    private _pointDebouncer: number = 0;

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
    giveBonus(recipient: iPlayer, bonusValue : number): void
    {
        if (this._pointDebouncer < this._drop.game.time.now)
        {
            recipient.score += bonusValue;
            if (this._drop.game.cache.checkSoundKey("ding")) this._drop.game.sound.play("ding");
        }
        this._pointDebouncer = this._drop.game.time.now + 1000;
    }
}


