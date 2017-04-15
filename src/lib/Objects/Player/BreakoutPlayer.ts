import { iPlayer } from './iPlayer';

export class BreakoutPlayer implements iPlayer {

    /*=============================
    **Fields**
    =============================*/

    name: string;
    score: number;
    lives: number;
    level: number;
    description?: string;

    /*=============================
    **Constructors**
    =============================*/

    constructor(name:string, score:number, lives:number, level:number, description ?:string) {
        this.name = name;
        this.score = score;
        this.lives = lives;
        this.level = level;
        this.description = description;
    }

    /*=============================
    **Properties**
    =============================*/


    /*=============================
    **Methods**
    =============================*/
}



