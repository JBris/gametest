import { iPlayer } from './iPlayer';

export class BreakoutPlayer implements iPlayer {

    /*=============================
    **Fields**
    =============================*/

    name: string;
    score: number;
    lives: number;
    description?: string;

    /*=============================
    **Constructors**
    =============================*/

    constructor(name:string, score:number, lives:number, description ?:string) {
        this.name = name;
        this.score = score;
        this.lives = lives;
        this.description = description;
    }

    /*=============================
    **Properties**
    =============================*/


    /*=============================
    **Methods**
    =============================*/
}



