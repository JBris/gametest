import { iCollidable } from '../../Behaviour/iCollidable';
import { iDamagesHealth } from '../../Behaviour/iDamagesHealth';
import { iDamagesShield } from '../../Behaviour/iDamagesShield';

import { Ball } from '../Ball';

export abstract class aBallCollision implements iCollidable, iDamagesHealth, iDamagesShield {

    /*=============================
    **Fields**
    =============================*/
    protected z_ball: Ball;
    healthDamageValue: number = 0;
    shieldDamageValue: number = 0;

    /*=============================
     **Constructors**
    =============================*/
    constructor(ball: Ball) {
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
    collide(collidedWith: string): void
    {
        this.collideAgainstBall(collidedWith);
    }

    protected collideAgainstBall(collidedWith: string): void {

        if (collidedWith === "paddle" && this.z_ball.animations.getAnimation('ball-to-paddle'))
            this.z_ball.animations.play('ball-to-paddle');

        if (collidedWith === "brick" && this.z_ball.animations.getAnimation('ball-to-brick'))
            this.z_ball.animations.play('ball-to-brick');

        if (collidedWith === "boss" && this.z_ball.animations.getAnimation('ball-to-boss'))
            this.z_ball.animations.play('ball-to-boss');

        if (collidedWith === "hurt" && this.z_ball.animations.getAnimation('hurt'))
            this.z_ball.animations.play('hurt');

        if (this.z_ball.game.cache.checkSoundKey('ball-to-paddle')) this.z_ball.game.sound.play('ball-to-paddle');
    }
}


