import { Move } from './Move';

export class FastMovement extends Move {

    /*=============================
    **Fields**
    =============================*/
    private _defaultVelocityX: number = -100;
    private _defaultVelocityY: number = -400;

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
    //getters
    get DefaultVelocityX(): number {
        return this._defaultVelocityX;
    }

    get DefaultVelocitY(): number {
        return this._defaultVelocityY;
    }
    //setters

    set DefaultVelocityX(val: number) {
        this._defaultVelocityX = val;
    }

    set DefaultVelocitY(val: number) {
        this._defaultVelocityY = val;
    }
    /*=============================
    **Methods**
    =============================*/

    ballMove(obj: Phaser.Sprite, velocityX?: number, velocityY?: number) {
        if (velocityX === null)
            velocityX = this.baseVelocityX * 1.15;
           
        if (velocityY === null)
            velocityY = this.baseVelocityY * 1.15;

        obj.body.velocity.set(velocityX, velocityY);
    }
 
}


