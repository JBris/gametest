//Behaviours
import { BrickShield } from './BrickShield';

//Brick
import { Brick } from '../Brick';

export class HighBrickShield extends BrickShield {

    /*=============================
    **Fields**

    /*=============================
    **Constructors
    =============================*/

    constructor(brick: Brick)
    {
        super(brick);
        this.totalShieldValue = 8;
        this.currentShieldValue = this.totalShieldValue;
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
        let totalDamage = shieldDamage + Math.ceil(0.1 * healthDamage);
        this.brickShieldDamageCheck(totalDamage);
    }

}


