import { Breakout } from '../../../Breakout';

export class ScoreCalculator {

    /*=============================
    **Fields**
    =============================*/
    private _game: Breakout;
    private _scoreMultiplier: number;

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Breakout)
    {
        this._game = game;
        this._scoreMultiplier = 1;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters
    get ScoreMultiplier() : number
    { return this._scoreMultiplier; }
 

    //setters
    set ScoreMultiplier(val: number)
    { this._scoreMultiplier = val; }

    /*=============================
    **Methods**
    =============================*/
    calculatePoints(resetMultiplier : boolean, basePointValue : number) : number
    {
        if (this._scoreMultiplier <= 1) return basePointValue;

        let awardedPoints = basePointValue;
        if (!resetMultiplier) awardedPoints *= 2;

        awardedPoints *= this._scoreMultiplier;

        //if the player gets long Multiplier chains...
        if (this._scoreMultiplier < 8) return awardedPoints;
        if (this._scoreMultiplier >= 8 && this._scoreMultiplier < 16 ) return awardedPoints * 1.2;
        if (this._scoreMultiplier >= 16 && this._scoreMultiplier < 24) return awardedPoints * 1.4;
        if (this._scoreMultiplier >= 24 && this._scoreMultiplier < 32) return awardedPoints * 1.6;
        if (this._scoreMultiplier >= 32 && this._scoreMultiplier < 40) return awardedPoints * 1.8;
        if (this._scoreMultiplier >= 40) return awardedPoints * 2;
    }

    makeMultiplierComment(): string
    {
        if (this._scoreMultiplier === 8) return "AMAZING!";
        if (this._scoreMultiplier === 16) return "INCREDIBLE!!";
        if (this._scoreMultiplier === 24) return "UNSTOPPABLE!!!";
        if (this._scoreMultiplier === 32 ) return "IMPOSSIBLE!!!!";
        if (this._scoreMultiplier === 40 ) return "GODLIKE!!!!!";
        return "";
    }

}


