import { iParameterList } from './iParameterList';

export class SpriteParameterList implements iParameterList{

    /*=============================
    **Fields**
    =============================*/
    game: Phaser.Game;
    x: number;
    y: number;
    key: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture;
    frame: string | number;

    /*=============================
    **Properties**
    =============================*/
    constructor(game: Phaser.Game, x: number, y: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number)
    {
        this.game = game;
        this.x = x;
        this.y = y;
        this.key = key;
        this.frame = frame;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters

    /*=============================
    **Methods**
    =============================*/
    setParameters(x: number, y: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number)
    {
        this.x = x;
        this.y = y;
        this.key = key;
        this.frame = frame;
    }
}


