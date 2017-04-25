//Behaviours
import { BrickHealth } from './BrickHealth';

//Brick
import { Brick } from '../Brick';

export class LowBrickHealth extends BrickHealth {

    /*=============================
    **Fields**

    /*=============================
    **Constructors
    =============================*/

    constructor(brick: Brick)
    {
        super(brick);
        this.totalHealthValue = 1;
        if (this.z_brick.BaseHealth !== undefined) this.totalHealthValue += this.z_brick.BaseHealth;
        this.currentHealthValue = this.totalHealthValue;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters


    //setters


    /*=============================
    **Methods**
    =============================*/

    protected damageBrickHealth(healthDamage: number, shieldDamage: number): void
    {
        let totalDamage = healthDamage + shieldDamage;
        this.brickDamageCheck(totalDamage);
    }

}


