import { iPaddleMovement } from './iPaddleMovement';

import { Paddle } from '../Paddle';

export class PaddleFollowsInputMovement implements iPaddleMovement {

    /*=============================
    **Fields**
    =============================*/
    paddle: Paddle;
    offscreenBufferDistance: number;
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
            this.paddle.x = this.paddle.game.input.x || this.paddle.game.world.width * 0.5;
            if (this.paddle.x < this.offscreenBufferDistance) {
                this.paddle.x = this.offscreenBufferDistance;
            }
            else if (this.paddle.x > this.paddle.game.width - this.offscreenBufferDistance) {
                this.paddle.x = this.paddle.game.width - this.offscreenBufferDistance;
            }
        }
    }

    stunMe(): void
    {
        this.isCurrentlyStunned = true;
        this.paddle.alpha = this.alphaIntensity;
        if (this.paddle.animations.getAnimation('hurt')) this.paddle.animations.play('hurt');
        this.paddle.game.time.events.add(Phaser.Timer.SECOND *
            this.stunDuration + this.paddle.BaseStunDuration, this.unStunMe, this);
    }

    unStunMe(): void
    {
        this.isCurrentlyStunned = false;
        this.paddle.alpha = 1;
        if(this.paddle.animations.getAnimation('idle')) this.paddle.animations.play('idle');
    }
}


