//Behaviours
import { BrickHealth } from './BrickHealth';

//Brick
import { Brick } from '../Brick';

export class HighBrickHealth extends BrickHealth {

    /*=============================
    **Fields**

    /*=============================
    **Constructors
    =============================*/

    constructor(brick: Brick)
    {
        super(brick);
        this.totalHealthValue = 7;
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
        let totalDamage = healthDamage + Math.ceil(shieldDamage * 0.1);
        this.brickDamageCheck(totalDamage);
    }

}


