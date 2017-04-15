export interface iMovable {

    /*=============================
    **Fields**
    =============================*/
    movableSprite: Phaser.Sprite;
    baseVelocityX: number;
    baseVelocityY: number;
    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/
    move(velocityX?: number, velocityY?: number);
 
}


