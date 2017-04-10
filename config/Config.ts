import { Breakout } from '../src/Breakout';

export class Config{

    /*=============================
    **Fields**
    =============================*/

    static width:         number = window.innerWidth * window.devicePixelRatio;
    static height:        number = window.innerHeight * window.devicePixelRatio;
    static renderer:      number  = Phaser.AUTO;
    static aspect_ratio: number = Config.width / Config.height;
    static transparent:   boolean= false;
    static antialias:     boolean= false;
    static numberOfLives: number = 5 ;
    static readonly numberOfStages: number = 3;

    /*=============================
    **Constructors**
    =============================*/
    constructor() {
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

    //Scale for different screen sizes. Both portrait and landscape
    static scaleScreen(game: Breakout) {
        var scale_ratio: number = 0;
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.refresh();

        Config.width = window.innerWidth * window.devicePixelRatio;
        Config.height = window.innerHeight * window.devicePixelRatio;
        game.scale.setGameSize(Config.width, Config.height);

        Config.aspect_ratio = Config.width / Config.height;
      
        if (Config.aspect_ratio > 1) scale_ratio = Config.height / 2048;
        else scale_ratio = Config.width / 2048;

        //game.ball.scale.set(scale_ratio);
    }
}