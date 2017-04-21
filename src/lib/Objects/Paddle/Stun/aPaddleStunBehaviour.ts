import { iStunnable } from '../../Behaviour/iStunnable';
import { Paddle } from '../Paddle';

export abstract class aPaddleStunBehaviour implements iStunnable {

    /*=============================
    **Fields**
    =============================*/
    protected z_paddle: Paddle;
    stunDuration: number;//seconds
    isCurrentlyStunned: boolean;
    isImmuneToStun: boolean;
    alphaIntensity: number;

    /*=============================
    **Constructors**
    =============================*/
    constructor(paddle : Paddle)
    {
        this.z_paddle = paddle;
        this.alphaIntensity = 0.5;
        this.isCurrentlyStunned = false;
        this.stunDuration = 0;
        this.isImmuneToStun = false;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters


    //setters

    /*=============================
    **Methods**
    =============================*/
    stunMe(): void {
        if (!this.isCurrentlyStunned && !this.isImmuneToStun)
        {
            this.isCurrentlyStunned = true;
            this.z_paddle.alpha = this.alphaIntensity;
            if (this.z_paddle.animations.getAnimation('hurt')) this.z_paddle.animations.play('hurt');
            this.z_paddle.game.time.events.add(Phaser.Timer.SECOND * this.stunDuration + this.z_paddle.BaseStunDuration, this.unStunMe, this);
        }
    }

    unStunMe(): void {
        this.isCurrentlyStunned = false;
        this.z_paddle.alpha = 1;
        if (this.z_paddle.animations.getAnimation('idle')) this.z_paddle.animations.play('idle');
    }
}


