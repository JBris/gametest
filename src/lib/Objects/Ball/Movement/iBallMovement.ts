import { iMovable } from '../../Behaviour/iMovable';
import { Ball } from '../Ball';

export interface iBallMovement extends iMovable {

    /*=============================
    **Fields**
    =============================*/
    ball : Ball;
    additionalXVelocity : number;
    additionalYVelocity : number;

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


