export class ScalingManager extends Phaser.ScaleManager{

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

    scaleGameScreen(): void
    {
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.refresh();
    }

    scaleBreakoutBackground(background: Phaser.Image) :void
    {
        background.scale.setTo
        (
            this.game.width / background.width,
            this.game.height / background.height
        )
    }

    scaleGameElements(game: Phaser.Game, elements: Array<any>, xScaleValue: number, yScaleValue: number) {
        let ratio = window.innerWidth / innerHeight;

        for (let element of elements)
        {
            element.width = game.world.width * xScaleValue;
            element.height = game.world.height * yScaleValue * ratio;
        }
    }

}




  
    



