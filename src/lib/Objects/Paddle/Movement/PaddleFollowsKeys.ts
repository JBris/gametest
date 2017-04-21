import { aPaddleMovement } from './aPaddleMovement';

import { Paddle } from '../Paddle';

export class PaddleFollowsKeys extends aPaddleMovement {

    /*=============================
    **Fields**
    =============================*/
    private _cursors: Phaser.CursorKeys;
    /*=============================
    **Constructors**
    =============================*/
    constructor(paddle: Paddle) {
        super(paddle);
        this._cursors = this.paddle.game.input.keyboard.createCursorKeys();
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
            if (this._cursors.left.isDown) {
                this.paddle.body.velocity.x = -200;
            }
            else if (this._cursors.right.isDown) {
                this.paddle.body.velocity.x = 200;
            }

            if (this.paddle.x < this.offscreenBufferDistance) {
                this.paddle.x = this.offscreenBufferDistance;
            }
            else if (this.paddle.x > this.paddle.game.width - this.offscreenBufferDistance) {
                this.paddle.x = this.paddle.game.width - this.offscreenBufferDistance;
            }
        }    
    }

}


