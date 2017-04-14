import { iScalable } from '../ScalingBehaviour/iScalable';
import { ButtonParameters } from './ButtonParameters';

export abstract class BreakoutButton extends Phaser.Button implements iScalable {

    /*=============================
    **Fields**
    =============================*/

    xScaleValue: number;
    yScaleValue: number;

    /*=============================
    **Constructors
    =============================*/
    constructor(buttonParamaters: ButtonParameters) {
        super(buttonParamaters.game, buttonParamaters.x, buttonParamaters.y, buttonParamaters.key, buttonParamaters.Callback, buttonParamaters.Context,
            buttonParamaters.Overframe,buttonParamaters.Outframe,buttonParamaters.Downframe, buttonParamaters.Upframe);
        this.xScaleValue = buttonParamaters.RelativeScalingXValue;
        this.yScaleValue = buttonParamaters.RelativeScalingYValue;;
        this.anchor.set(0.5, 0.5);
        this.scaleGameElement(buttonParamaters.game);
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


