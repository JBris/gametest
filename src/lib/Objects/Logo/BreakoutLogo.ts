import { iScalable } from '../ScalingBehaviour/iScalable';

export abstract class BreakoutLogo extends Phaser.Sprite implements iScalable {

    /*=============================
    **Fields**
    =============================*/

    xScaleValue: number = 0.15;
    yScaleValue: number = 0.15;

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Phaser.Game, x: number, y: number, key: string, frame?: string | number, xScaleValue?: number, yScaleValue?:number){
        super(game,x,y,key,frame);
        this.xScaleValue = xScaleValue;
        this.yScaleValue = yScaleValue;
        this.enableFeatures();
        this.scaleGameElement(this.game);
        this.anchor.set(0.5, 0.5);
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters

    /*=============================
    **Methods**
    =============================*/
    setScale(xScaleValue: number, yScaleValue: number) {
        this.xScaleValue = xScaleValue;
        this.yScaleValue = yScaleValue;
    }

    abstract enableFeatures(): void;

    scaleGameElement(game: Phaser.Game)
    {
        this.width = game.world.width * this.xScaleValue;
        this.height = game.world.height * this.yScaleValue;
    }
}


