import { iScalable } from '../ScalingBehaviour/iScalable';

export abstract class BreakoutButton extends Phaser.Button implements iScalable {

    /*=============================
    **Fields**
    =============================*/

    xScaleValue: number;
    yScaleValue: number;

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Phaser.Game, x?: number, y?: number, key?: string, xScaleValue?: number, yScaleValue?: number, callback?: Function, context?: any, overframe?: number,
    outframe?: number, downframe?:number, upframe?: number) {
        super(game,x,y,key,callback,context,overframe,outframe,downframe,upframe);

        this.xScaleValue = xScaleValue;
        this.yScaleValue = yScaleValue;

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

    scaleGameElement(game: Phaser.Game)
    {
        this.width = game.world.width * this.xScaleValue;
        this.height = game.world.height * this.yScaleValue;
    }
}


