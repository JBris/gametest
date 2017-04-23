import { Breakout } from '../../../../Breakout';

//Behaviours
import { BreakoutGroup } from '../../Group/BreakoutGroup';

//projectileTypes
import { PaddleProjectileSingle } from './PaddleProjectileSingle';
import { PaddleProjectileMulti } from './PaddleProjectileMulti';
import { PaddleProjectileSpread } from './PaddleProjectileSpread';

export class PaddleProjectileGroup extends BreakoutGroup {

    /*=============================
    **Fields**
    =============================*/
    private _paddle: Phaser.Sprite;

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Breakout, paddle : Phaser.Sprite)
    {
        super(game);
        this._paddle = paddle;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters
    //setters

    /*=============================
    **Methods**
    =============================*/

    protected createBreakoutGroup(key: string | string[], groupSize?: number, frame? : any): void
    {
        if (!groupSize) groupSize = 40;
        if (!frame) frame = 0;

        if (key === "bullet-player-single") this.classType = PaddleProjectileSingle;
        else if (key === "bullet-player-multi") this.classType = PaddleProjectileMulti;
        else if (key === "bullet-player-spread") this.classType = PaddleProjectileSpread;
        else this.classType = Phaser.Sprite;

        this.createMultiple(groupSize, key, frame);

        if (this.classType !== Phaser.Sprite) this.setAll('Paddle', this._paddle);
        this.initGroupValues();
    }

}


