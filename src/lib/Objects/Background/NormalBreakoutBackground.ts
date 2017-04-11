import { Background } from './Background';

export class NormalBreakoutBackground extends Background {

    /*=============================
    **Fields**
    =============================*/
    /*=============================
    **Constructors
    =============================*/

    constructor(game :Phaser.Game, x:number,y:number,key: string | Phaser.RenderTexture |Phaser.BitmapData|PIXI.Texture,frame? : string | number) {
        super(game, x, y, key,frame);
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/   

}


