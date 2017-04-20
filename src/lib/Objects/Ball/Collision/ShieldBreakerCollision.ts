import { aBallCollision } from './aBallCollision';
import { Ball } from '../Ball';

export class ShieldBreakerCollision extends aBallCollision {

    /*=============================
    **Fields**
    =============================*/
    healthDamageValue: number;
    shieldDamageValue: number;

    /*=============================
    **Constructors**
    =============================*/
    constructor(ball : Ball)
    {
        super(ball);
        this.healthDamageValue = 1;
        this.shieldDamageValue = 3;
    }
    /*=============================
    **Properties**
    =============================*/
    //getters


    //setters

    /*=============================
    **Methods**
    =============================*/

}


