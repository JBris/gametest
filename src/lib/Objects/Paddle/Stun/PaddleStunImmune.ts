import { aPaddleStunBehaviour } from './aPaddleStunBehaviour';

import { Paddle } from '../Paddle';

export class PaddleStunImmune  extends aPaddleStunBehaviour {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors**
    =============================*/
    constructor(paddle: Paddle) {
        super(paddle);
        this.stunDuration = 0;
        this.isImmuneToStun = true;
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


