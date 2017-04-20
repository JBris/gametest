import { iMovable } from '../../Behaviour/iMovable';
import { iStunnable } from '../../Behaviour/iStunnable';

import { Paddle } from '../Paddle';

export interface iPaddleMovement extends iMovable, iStunnable {

    /*=============================
    **Fields**
    =============================*/
    paddle: Paddle;
    offscreenBufferDistance: number;

    /*=============================
    **Constructors**
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


