//Parent
import { Drop } from './Drop';

//Behaviours
import { iCollidable } from '../Behaviour/iCollidable';
import { GiveAmmo } from './Bonus/GiveAmmo';

export class AmmoBox extends Drop {

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
        this.z_dropSpeed = 100;    
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
        this.animations.add('fall', [0], 1, true);
        this.animations.add('getMe', [1, 2, 1, 2], 2);
    }

    protected setBonusValue(): void
    {
        this.z_bonusValue = new GiveAmmo(this);
    }

    protected dropCollision(collidedWithType: string, collidedAgainst?: iCollidable): void
    {
        if (collidedWithType === "paddle")
        {
            this.killDrop();
        }
    }

}


