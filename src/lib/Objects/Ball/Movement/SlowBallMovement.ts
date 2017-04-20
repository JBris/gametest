import { aBallMovement } from './aBallMovement';
import { Ball } from '../Ball';

export class SlowBallMovement extends aBallMovement {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors**
    =============================*/
    constructor(ball : Ball)
    {
        super(ball);
        this.z_additionalXVelocity = -20;
        this.z_additionalYVelocity = -175;
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
            this.z_ball.BaseXVelocity - this.z_additionalXVelocity,
            this.z_ball.BaseYVelocity - this.z_additionalYVelocity
        );
    }
}


