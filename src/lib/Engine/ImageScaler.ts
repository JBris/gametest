export class ImageScaler {

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

    static scaleSprite(sprite: Phaser.Sprite, game: Phaser.Game) {
        sprite.scale.setTo(this.spriteScaleRatio, this.spriteScaleRatio);

       /* game.width = window.innerWidth * window.devicePixelRatio;
        game.height = window.innerHeight * window.devicePixelRatio;
        game.scale.setGameSize(game.width, game.height);

        let aspect_ratio : number = game.width / game.height;
        let scale_ratio = 0;
        if (aspect_ratio > 1) scale_ratio = game.height / 2048;
        else scale_ratio = game.width / 2048;

        sprite.scale.set(scale_ratio);*/
    } 

    static setScaledGame(game : Phaser.Game)
    {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    }

    //Scale for different screen sizes. Both portrait and landscape
    static scaleScreen(game: Phaser.Game) {
        var scale_ratio: number = 0;
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.refresh();

        game.width = window.innerWidth * window.devicePixelRatio;
        game.height = window.innerHeight * window.devicePixelRatio;
        game.scale.setGameSize(game.width, game.height);

        let aspect_ratio : number = game.width / game.height;

        if (aspect_ratio > 1) scale_ratio = game.height / 2048;
        else scale_ratio = game.width / 2048;
    }

    static addScaledBackground(background: Phaser.Image, game: Phaser.Game)
    {
        background.scale.setTo
        (
            game.width / background.width,
            game.height / background.height
        )
    }
    
}


