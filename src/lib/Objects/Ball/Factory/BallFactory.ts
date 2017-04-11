import { FastBall } from '../FastBall';
import { BigBall } from '../BigBall';
import { SlowBall } from '../SlowBall';
import { NormalBall } from '../NormalBall';
import { Ball } from '../Ball';

export class BallFactory extends Phaser.GameObjectFactory
{
    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Fields**
    =============================*/

    private _ballType: number;
    /*=============================
    **Constructors
    =============================*/

    constructor(game: Phaser.Game, x?: number, y?: number, ballType?: number, relativeScalingXValue?: number, relativeScalingYValue?: number, baseVelocityX?: number, baseVelocityY?: number,
        key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number )
    {
        super(game);
        this._ballType = ballType;

        this.createBall(x,y, relativeScalingXValue,relativeScalingYValue,baseVelocityX,baseVelocityY,key,frame);
    }

    createBall(game: Phaser.Game, x?: number, y?: number, ballType?: number, relativeScalingXValue?: number, relativeScalingYValue?: number, baseVelocityX?: number, baseVelocityY?: number,
        key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number): Ball
    {
        if (this._ballType === 1)
            new FastBall(this.game, x, y, relativeScalingXValue, relativeScalingYValue, baseVelocityX, baseVelocityY, key, frame);

        if (this._ballType === 2)
            return new BigBall(this.game, x, y, relativeScalingXValue, relativeScalingYValue, baseVelocityX, baseVelocityY, key, frame);

        if (this._ballType === 3)
            return new SlowBall(this.game, x, y, relativeScalingXValue, relativeScalingYValue, baseVelocityX, baseVelocityY, key, frame);

        return new NormalBall(this.game, x, y, relativeScalingXValue, relativeScalingYValue, baseVelocityX, baseVelocityY, key, frame);
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/
}