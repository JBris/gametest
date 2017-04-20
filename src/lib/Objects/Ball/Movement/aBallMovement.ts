import { iMovable } from '../../Behaviour/iMovable';
import { Ball } from '../Ball';

export abstract class aBallMovement implements iMovable {

    /*=============================
    **Fields**
    =============================*/
    protected z_ball : Ball;
    protected z_additionalXVelocity : number;
    protected z_additionalYVelocity : number;

    /*=============================
    **Constructors**
    =============================*/
    constructor(ball : Ball)
    {
        this.z_ball = ball;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters


    //setters

    /*=============================
    **Methods**
    =============================*/
    move(): void
    {
        if (!this.z_ball.physicsEnabled) this.z_ball.physicsEnabled = true;
        this.moveBall();
    }

    protected abstract moveBall(): void;
}


