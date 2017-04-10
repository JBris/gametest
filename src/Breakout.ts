export class Breakout extends Phaser.Game {


    /*=============================
    **Fields**
    =============================*/
    private _gameName: string;
    private _gameDescription: string;
    private _playerName: string;

    /*=============================
    **Constructors
    =============================*/

    constructor() {
        super();
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

    setOptions()//Options are ideally alterable at run-time
    {

    }

    preload() {


        //sprites


        //sound effects
        this.load.audio('ball-to-boss', ['assets/sound/mpg3/ball-to-boss.mpg3', 'assets/sound/ogg/ball-to-boss.ogg']);
        this.load.audio('ball-to-brick', ['assets/sound/mpg3/ball-to-brick.mpg3', 'assets/sound/ogg/ball-to-brick.ogg']);
        this.load.audio('ball-to-paddle', ['assets/sound/mpg3/ball-to-paddle.mpg3', 'assets/sound/ogg/ball-to-paddle.ogg']);
        this.load.audio('evil-laugh', ['assets/sound/mpg3/evil-laugh.mpg3', 'assets/sound/ogg/evil-laugh.ogg']);
        this.load.audio('evil-laugh-short', ['assets/sound/mpg3/evil-laugh-short.mpg3', 'assets/sound/ogg/evil-laugh-short.ogg']);

        //music
        this.load.audio('opening', ['assets/music/mpg3/opening_glorious_morning.mpg3', 'assets/music/ogg/opening_glorious_morning.ogg']);
        this.load.audio('stage', ['assets/music/mpg3/stage_electrical_adventures.mpg3', 'assets/music/ogg/stage_electrical_adventures.ogg']);
        this.load.audio('boss', ['assets/music/mpg3/boss_Endgame.mpg3', 'assets/music/ogg/boss_Endgame.ogg']);
        this.load.audio('final', ['assets/music/mpg3/final_parago.mpg3', 'assets/music/ogg/final_parago.ogg']);
    }    
    
}


