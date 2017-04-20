import { iBallMovement } from './iBallMovement';
import { Ball } from '../Ball';

export class NoBallMovement implements iBallMovement {

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
        this.additionalXVelocity = 0;
        this.additionalYVelocity = 0;
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
            this.additionalXVelocity,
            this.additionalYVelocity
        );
    }
}


