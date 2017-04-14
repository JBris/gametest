import { BreakoutLogo } from './BreakoutLogo';

export class Title extends BreakoutLogo {

    /*=============================
    **Fields**
    =============================*/
    /*=============================
    **Constructors
    =============================*/

    constructor(game : Phaser.Game, x: number, y : number, key :string , frame? : string | number, xScaleValue?: number, yScaleValue?:number, callback?:Function) {
        super(game,x,y,key,frame,xScaleValue,yScaleValue);
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters

    /*=============================
    **Methods**
    =============================*/

    enableFeatures():void
    {
        this.animations.add('flash', [0, 1, 2, 1, 0], 24);
        this.animations.play('flash', 24, true);
    }
}


