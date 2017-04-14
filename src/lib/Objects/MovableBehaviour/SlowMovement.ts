import { Move } from './Move';

export class SlowMovement extends Move {

    /*=============================
    **Fields**
    =============================*/
    private _defaultVelocityX: number = -50;
    private _defaultVelocityY: number = -200;

    /*=============================
    **Constructors**
    =============================*/
    constructor(velocityX?: number, velocityY?: number) {
        super(velocityX, velocityY);

        if (velocityX === null) this.baseVelocityX = this._defaultVelocityX;
        if (velocityX === null) this.baseVelocityY = this._defaultVelocityY;
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

    ballMove(obj: Phaser.Sprite, velocityX?: number, velocityY?: number) {
        if (velocityX === null)
            velocityX = this.baseVelocityX * 0.85;
           
        if (velocityY === null)
            velocityY = this.baseVelocityY * 0.85;

        obj.body.velocity.set(velocityX, velocityY);
    }
 
}


