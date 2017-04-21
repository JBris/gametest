import { aPaddleMovement } from './aPaddleMovement';

import { Paddle } from '../Paddle';

export class PaddleFollowsInputMovement extends aPaddleMovement {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors**
    =============================*/
    constructor(paddle: Paddle)
    {
        super(paddle);
    }

    /*=============================
    **Properties**
    =============================*/
    //getters


    //setters

    /*=============================
    **Methods**
    =============================*/
    protected paddleMovement(): void
    {
        if (!this.paddle.StunBehaviour.isCurrentlyStunned)
        {
            this.paddle.x = this.paddle.game.input.x || this.paddle.game.world.width * 0.5;
            if (this.paddle.x < this.offscreenBufferDistance) {
                this.paddle.x = this.offscreenBufferDistance;
            }
            else if (this.paddle.x > this.paddle.game.width - this.offscreenBufferDistance) {
                this.paddle.x = this.paddle.game.width - this.offscreenBufferDistance;
            }
        }
    }

}


