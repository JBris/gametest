export class BreakoutScalingManager extends Phaser.ScaleManager {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Phaser.Game, width: string | number, height: string | number) {
        super(game, width, height);
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

    scaleGameScreen() {
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.refresh();
    }

    scaleBreakoutBackground(background: Phaser.Image)
    {
        background.scale.setTo
        (
            this.game.width / background.width,
            this.game.height / background.height
        )
    }
}




  
    



