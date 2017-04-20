import { iPaddleCollisionBehaviour } from './iPaddleCollisionBehaviour';

import { Paddle } from '../Paddle';

export class NormalPaddleCollisionBehaviour implements iPaddleCollisionBehaviour {

    /*=============================
    **Fields**
    =============================*/
    paddle: Paddle;

    /*=============================
    **Constructors**
    =============================*/
    constructor(paddle: Paddle)
    {
        this.paddle = paddle;
    }
    /*=============================
    **Properties**
    =============================*/
    //getters


    //setters

    /*=============================
    **Methods**
    =============================*/
    collide(collidedWith: string, spriteCollidedAgainst: Phaser.Sprite): void
    {
        if (collidedWith === "ball") this.paddleCollidesWithBall(spriteCollidedAgainst);
        if (collidedWith === "projectile") this.paddle.PaddleMovement.stunMe();
    }

    paddleCollidesWithBall(ball: Phaser.Sprite): void
    {
        let diff: number = 0;
        if (ball.x < this.paddle.x) {
            //  left side
            diff = this.paddle.x - ball.x;
            ball.body.velocity.x = (-5 * diff);
        }
        else if (ball.x > this.paddle.x) {
            //  right side
            diff = ball.x - this.paddle.x;
            ball.body.velocity.x = (5 * diff);
        }
        else {
            //random
            ball.body.velocity.x = 1 + Math.random() * 5;
        }
    }

}


