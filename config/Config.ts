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
    static frameSize :  number = 32;

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
}