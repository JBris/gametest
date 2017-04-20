import { iBallMovement } from './iBallMovement';
import { Ball } from '../Ball';

export class SlowBallMovement implements iBallMovement {

    /*=============================
    **Fields**
    =============================*/
    ball: Ball;
    additionalXVelocity: number;
    additionalYVelocity: number;
    /*=============================
    **Constructors**
    =============================*/
    constructor(ball: Ball) {
        this.ball = ball;
        this.additionalXVelocity = -20;
        this.additionalYVelocity = -75;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters


    //setters

    /*=============================
    **Methods**
    =============================*/

    move(): void {
        this.ball.body.velocity.set(
            this.ball.BaseXVelocity + this.additionalXVelocity,
            this.ball.BaseYVelocity + this.additionalYVelocity
        );
    }
}


