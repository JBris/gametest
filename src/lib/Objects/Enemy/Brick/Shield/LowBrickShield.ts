//Behaviours
import { BrickShield } from './BrickShield';

//Brick
import { Brick } from '../Brick';

export class LowBrickShield extends BrickShield {

    /*=============================
    **Fields**

    /*=============================
    **Constructors
    =============================*/

    constructor(brick: Brick)
    {
        super(brick);
        this.totalShieldValue = 2;
        if (this.z_brick.BaseShield !== undefined) this.totalShieldValue += this.z_brick.BaseShield;
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
        let totalDamage = shieldDamage + Math.ceil(0.7 * healthDamage);
        this.brickShieldDamageCheck(totalDamage);
    }

}


