//Parent
import { Drop } from './Drop';

//Behaviours
import { iCollidable } from '../Behaviour/iCollidable';
import { GivePoints } from './Bonus/GivePoints';

export class Lemon extends Drop {

    /*=============================
    **Fields**
    =============================*/
    /*=============================
    **Constructors
    =============================*/

    constructor(game: Phaser.Game, x: number, y: number,
        key: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number)
    {
        super(game, x, y, key, frame); 
        this.z_dropSpeed = 200;    
        this.z_pointValue = 100;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters

    /*=============================
    **Methods**
    =============================*/

    protected initAnimations(): void
    {
        this.animations.add('fall', [0, 1, 0, 1], 4, true);
        this.animations.add('getMe', [2, 3, 2, 3], 2);
    }

    protected setBonusValue(): void
    {
        this.z_bonusValue = new GivePoints(this);
    }

    protected dropCollision(collidedWithType: string, collidedAgainst?: iCollidable): void
    {
        if (collidedWithType === "paddle" || collidedWithType === "ball")
        {
            this.killDrop();
        }
    }

}


