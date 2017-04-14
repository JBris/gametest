export interface iMovable {

    /*=============================
    **Fields**
    =============================*/
    baseVelocityX: number;
    baseVelocityY: number;
    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/
    move(obj : Phaser.Sprite, velocityX?: number, velocityY?: number);
 
}


