//Parent
import { PaddleProjectile } from './PaddleProjectile';

//Paddle
import { Paddle } from '../Paddle';

//Params
import { SpriteParameterList } from '../../Factory/SpriteParameterList';

export class PaddleProjectileSingle extends PaddleProjectile{

    /*=============================
    **Fields**
    =============================*/        
    /*=============================
    **Constructors
    =============================*/

    constructor(game: Phaser.Game, x: number, y: number,
        key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number) {
        super(game, x, y, key, frame);
        this.healthDamageValue = 3;
        this.shieldDamageValue = 2;
        this.z_projectileSpeed = -550;
 
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters

    /*=============================
    **Methods**
    =============================*/

    protected initAnimations(): void {
        this.animations.add('explode', [2, 3, 2, 3], 2);
        this.animations.add('fly', [0, 1, 0, 1], 2, true);
       
    }
}


