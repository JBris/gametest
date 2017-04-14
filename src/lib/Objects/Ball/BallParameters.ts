import { iBreakoutParameters } from '../Engine/iBreakoutParameters';
import { iMovable } from '../MovableBehaviour/iMovable';

export class BallParameters implements iBreakoutParameters{

    /*=============================
    **Fields**
    =============================*/
    game: Phaser.Game;
    x: number;
    y: number;
    key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture;
    frame?: string | number;
    private _movementType: iMovable;
    private _damage: number;
    private _relativeScalingXValue: number;
    private _relativeScalingYValue: number;
    private _baseVelocityX: number;
    private _baseVelocityY: number;

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Phaser.Game, x: number, y: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture,
        frame?: string | number, movementType?: iMovable, damage?: number, relativeScalingXValue?: number,
        _relativeScalingYValue?: number, baseVelocityX?: number, baseVelocityY?: number) 
    {
        this.game = game;
        this.x = x;
        this.y = y;
        this.key = key;
        this.frame = frame;
        this._movementType = movementType;
        this._damage = damage;
        this._relativeScalingXValue = relativeScalingXValue;
        this._baseVelocityX = baseVelocityX;
        this._baseVelocityY = baseVelocityY;
    
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    get MovementType(): iMovable
    { return this._movementType; }

    get Damage(): number
    { return this._damage; }

    get RelativeScalingXValue(): number
    { return this._relativeScalingXValue; }

    get RelativeScalingYValue(): number
    { return this._relativeScalingYValue; }
 
    get BaseVelocityX(): number
    { return this._baseVelocityX; }

    get BaseVelocityY(): number
    { return this._baseVelocityY; }
    //setters

    set MovementType(val: iMovable)
    { this._movementType = val; }

    set Damage(val: number)
    { this._damage = val; }

    set RelativeScalingXValue(val: number)
    { this._relativeScalingXValue = val; }

    set RelativeScalingYValue(val: number)
    { this._relativeScalingYValue = val; }

    set BaseVelocityX(val: number)
    { this._baseVelocityX = val; }

    set BaseVelocityY(val: number)
    { this._baseVelocityY = val; }

    /*=============================
    **Methods**
    =============================*/

}


