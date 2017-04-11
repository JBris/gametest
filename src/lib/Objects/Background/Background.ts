export abstract class Background extends Phaser.Image {

    /*=============================
    **Fields**
    =============================*/
    /*=============================
    **Constructors
    =============================*/

    constructor(game :Phaser.Game, x:number,y:number,key: string | Phaser.RenderTexture |Phaser.BitmapData|PIXI.Texture,frame? : string | number) {
        super(game, x, y, key, frame);
 
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

    scaleBackground() {
        this.scale.setTo
        (
            this.game.width / this.width,
            this.game.height / this.height
        )
    } 

    centreBackgroundAnchor()
    {
        this.anchor.setTo(0.5,0.5);
    }   

}


