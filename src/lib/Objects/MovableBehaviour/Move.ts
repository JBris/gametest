import { iMovable } from './iMovable';

export abstract class Move implements iMovable {

    /*=============================
    **Fields**
    =============================*/
    baseVelocityX: number;
    baseVelocityY: number;

    /*=============================
    **Constructors**
    =============================*/
    constructor(velocityX?:number, velocityY?:number)
    {
        this.baseVelocityX = velocityX;
        this.baseVelocityY = velocityY;
    }
    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

    move(obj: Phaser.Sprite, velocityX?: number, velocityY?: number) {
        this.ballMove(obj, velocityX, velocityY);
    }

    abstract ballMove(obj: Phaser.Sprite, velocityX?: number, velocityY?: number)
}


