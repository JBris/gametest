//Behaviours
import { BrickShield } from './BrickShield';

//Brick
import { Brick } from '../Brick';

export class NoBrickShield extends BrickShield {

    /*=============================
    **Fields**

    /*=============================
    **Constructors
    =============================*/

    constructor(brick: Brick)
    {
        super(brick);
        this.totalShieldValue = 0;
        this.currentShieldValue = this.totalShieldValue;
        this.shieldDisabled = true;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters


    //setters


    /*=============================
    **Methods**
    =============================*/

    protected damageBrickShield(shieldDamage: number, healthDamage: number): void
    {
        this.totalShieldValue = 0;
        this.currentShieldValue = this.totalShieldValue;
        this.shieldDisabled = true;
    }

}


