import { aBallMovement } from './aBallMovement';
import { Ball } from '../Ball';

export class NoBallMovement extends aBallMovement {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors**
    =============================*/
    constructor(ball: Ball) {
        super(ball);
        this.z_additionalXVelocity = 0;
        this.z_additionalYVelocity = 0;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters


    //setters

    /*=============================
    **Methods**
    =============================*/

    protected moveBall(): void {
        this.z_ball.body.velocity.set(
            this.z_additionalXVelocity,
            this.z_additionalYVelocity
        );
    }
}

