import { aPaddleStunBehaviour } from './aPaddleStunBehaviour';

import { Paddle } from '../Paddle';

export class ShortPaddleStunLength  extends aPaddleStunBehaviour {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors**
    =============================*/
    constructor(paddle: Paddle) {
        super(paddle);
        this.stunDuration = 0.2;
    }
    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Properties**
    =============================*/
    //getters


    //setters

    /*=============================
    **Methods**
    =============================*/

}


