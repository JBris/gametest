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
    collide(collidedWithType: string, collidedWithSprite: iCollidable, paddleVelocityX: number): void
    {
        this.collideAgainstBall(collidedWithType, collidedWithSprite, paddleVelocityX);
    }

    protected collideAgainstBall(collidedWithType: string, collidedWithSprite: iCollidable, paddleVelocityX: number): void {

        //animations

        if (collidedWithType === "paddle" && this.z_ball.animations.getAnimation('ball-to-paddle'))
        {
            this.ballAgainstPaddleVelocityChange(paddleVelocityX);
            this.z_ball.animations.play('ball-to-paddle');
        }

        if (collidedWithType === "brick" && this.z_ball.animations.getAnimation('ball-to-brick'))
            this.z_ball.animations.play('ball-to-brick');
           
        if (collidedWithType === "boss" && this.z_ball.animations.getAnimation('ball-to-boss'))
            this.z_ball.animations.play('ball-to-boss');

        if (collidedWithType === "hurt" && this.z_ball.animations.getAnimation('hurt'))
            this.z_ball.animations.play('hurt');

        if (this.z_ball.game.cache.checkSoundKey('ball-to-paddle')) this.z_ball.game.sound.play('ball-to-paddle');

        if (collidedWithSprite !== undefined)
            this.damageEnemy(collidedWithType, collidedWithSprite);
    }

    protected damageEnemy(collidedWithType: string, collidedWithSprite: iCollidable): void
    {
        //damage against enemy
        if (collidedWithType === "brick" || collidedWithType === "boss") {
            let totalHealthDamage = this.healthDamageValue + this.z_ball.BasePhysicalDamage;
            let totalShieldDamage = this.shieldDamageValue + this.z_ball.BaseShieldDamage;
            collidedWithSprite.receiveCollisionDamage(totalHealthDamage, totalShieldDamage);
        }
       
    }

    protected ballAgainstPaddleVelocityChange(paddleVelocityX): void
    {
        let diff: number = 0;
        if (this.z_ball.x < paddleVelocityX) {
            //  left side
            diff = paddleVelocityX - this.z_ball.x;
            this.z_ball.body.velocity.x = (-5 * diff);
        }
        else if (this.z_ball.x > paddleVelocityX) {
            //  right side
            diff = this.z_ball.x - paddleVelocityX;
            this.z_ball.body.velocity.x = (5 * diff);
        }
        else {
            //random
            this.z_ball.body.velocity.x = 1 + Math.random() * 5;
        }
    }
}


