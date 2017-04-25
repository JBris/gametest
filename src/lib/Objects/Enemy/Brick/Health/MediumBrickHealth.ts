//Behaviours
import { BrickHealth } from './BrickHealth';

//Brick
import { Brick } from '../Brick';

export class MediumBrickHealth extends BrickHealth {

    /*=============================
    **Fields**

    /*=============================
    **Constructors
    =============================*/

    constructor(brick: Brick)
    {
        super(brick);
        this.totalHealthValue = 4;
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
        let totalDamage = healthDamage + Math.ceil(shieldDamage * 0.4);
        this.brickDamageCheck(totalDamage);
    }

}


