export class AssetScaler {

    /*=============================
    **Fields**
    =============================*/
    static readonly spriteScaleRatio: number = window.devicePixelRatio / 3;

    /*=============================
    **Constructors
    =============================*/

    constructor() {    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

    static scaleSprite(sprite: Phaser.Sprite) {
        sprite.scale.setTo(this.spriteScaleRatio, this.spriteScaleRatio);

       /* this._width = window.innerWidth * window.devicePixelRatio;
        this._height = window.innerHeight * window.devicePixelRatio;
        game.scale.setGameSize(this._width, this._height);

        this._aspect_ratio = this._width / this._height;

        if (this._aspect_ratio > 1) scale_ratio = this._height / 2048;
        else scale_ratio = this._width / 2048;

        //game.ball.scale.set(scale_ratio);*/
    } 

    static scaleBackground(background: Phaser.Image, game: Phaser.Game)
    {
        background.scale.setTo
        (
            game.width / background.width,
            game.height / game.height
        )
    }
    
}


