import { iCollidable } from '../../Behaviour/iCollidable';

import { Paddle } from '../Paddle';

export class NormalPaddleCollisionBehaviour implements iCollidable {

    /*=============================
    **Fields**
    =============================*/
    protected z_paddle: Paddle;

    /*=============================
    **Constructors**
    =============================*/
    constructor(paddle: Paddle)
    {
        this.z_paddle = paddle;
    }
    /*=============================
    **Properties**
    =============================*/
    //getters


    //setters

    /*=============================
    **Methods**
    =============================*/

    collide(collidedWithType: string): void
    {
        if (collidedWithType === "ball" && this.z_paddle.animations.getAnimation('paddle-to-ball'))
            this.z_paddle.animations.play('paddle-to-ball');

        if (collidedWithType === "projectile") this.z_paddle.StunBehaviour.stunMe();
    }

}


