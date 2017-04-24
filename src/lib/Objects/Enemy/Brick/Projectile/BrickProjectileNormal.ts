//Parent
import { BrickProjectile } from './BrickProjectile';

export class BrickProjectileNormal extends BrickProjectile{

    /*=============================
    **Fields**
    =============================*/        
    /*=============================
    **Constructors
    =============================*/

    constructor(game: Phaser.Game, x: number, y: number,
        key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number) {
        super(game, x, y, key, frame);
        this.z_projectileSpeed = -650;
 
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


