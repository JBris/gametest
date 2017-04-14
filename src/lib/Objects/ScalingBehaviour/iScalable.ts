export interface iScalable  {

    /*=============================
    **Fields**
    =============================*/

    xScaleValue: number;
    yScaleValue: number;

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/
    setScale(xScaleValue: number, yScaleValue:number);
    scaleGameElement(game : Phaser.Game );
}


