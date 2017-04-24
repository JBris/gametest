//Behaviours
import { BrickShield } from './BrickShield';

//Brick
import { Brick } from '../Brick';

export class MediumBrickShield extends BrickShield {

    /*=============================
    **Fields**

    /*=============================
    **Constructors
    =============================*/

    constructor(brick: Brick)
    {
        super(brick);
        this.totalShieldValue = 5;
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
        let totalDamage = shieldDamage + Math.ceil(0.5 * healthDamage);
        this.brickShieldDamageCheck(totalDamage);
    }

}


