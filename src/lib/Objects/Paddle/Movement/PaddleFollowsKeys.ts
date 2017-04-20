import { iPaddleMovement } from './iPaddleMovement';

import { Paddle } from '../Paddle';

export class PaddleFollowsKeys implements iPaddleMovement {

    /*=============================
    **Fields**
    =============================*/
    paddle: Paddle;
    offscreenBufferDistance: number;
    private _cursors: Phaser.CursorKeys;
    stunDuration: number;//seconds
    isCurrentlyStunned: boolean;
    alphaIntensity: number;

    /*=============================
    **Constructors**
    =============================*/
    constructor(paddle: Paddle)
    {
        this.paddle = paddle;
        this.offscreenBufferDistance = 10;
        this._cursors = this.paddle.game.input.keyboard.createCursorKeys();
        this.isCurrentlyStunned = false;
        this.stunDuration = 0.05;
        this.alphaIntensity = 0.5;
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
        if (!this.isCurrentlyStunned)
        {
            if (this._cursors.left.isDown) {
                this.paddle.body.velocity.x = -200;
            }
            else if (this._cursors.right.isDown) {
                this.paddle.body.velocity.x = 200;
            }
        }    
    }

    stunMe(): void {
        this.isCurrentlyStunned = true;
        this.paddle.alpha = this.alphaIntensity;
        if (this.paddle.animations.getAnimation('hurt')) this.paddle.animations.play('hurt');
        this.paddle.game.time.events.add(Phaser.Timer.SECOND *
            this.stunDuration + this.paddle.BaseStunDuration, this.unStunMe, this);
    }

    unStunMe(): void {
        this.isCurrentlyStunned = false;
        this.paddle.alpha = 1;
        if (this.paddle.animations.getAnimation('idle')) this.paddle.animations.play('idle');
    }
}


