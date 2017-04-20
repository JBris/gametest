import { iCollidable } from '../../Behaviour/iCollidable';

import { Paddle } from '../Paddle';

export abstract class aPaddleCollisionBehaviour implements iCollidable {

    /*=============================
    **Fields**
    =============================*/
    paddle: Paddle;

    /*=============================
    **Constructors**
    =============================*/

    /*=============================
    **Properties**
    =============================*/
    //getters


    //setters

    /*=============================
    **Methods**
    =============================*/
    paddleCollidesWithBall(ball : Phaser.Sprite): void;

}


