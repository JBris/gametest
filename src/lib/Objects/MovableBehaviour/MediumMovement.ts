import { Move } from './Move';

export class MediumMovement extends Move {

    /*=============================
    **Fields**
    =============================*/
    private _defaultVelocityX: number = -75;
    private _defaultVelocityY: number = -300;

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
    get DefaultVelocityX() : number
    {
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
            velocityX = this.baseVelocityX;
           
        if (velocityY === null)
            velocityY = this.baseVelocityY;

        obj.body.velocity.set(velocityX, velocityY);
    }
 
}


