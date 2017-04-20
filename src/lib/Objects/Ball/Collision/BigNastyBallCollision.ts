import { aBallCollision } from './aBallCollision';
import { Ball } from '../Ball';

export class BigNastyBallCollision extends aBallCollision {

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
        this.healthDamageValue = 3;
        this.shieldDamageValue = 1;
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


