export class StageManager
{
    /*=============================
    **Fields**
    =============================*/
    private _game: Phaser.Game;
    private _musicList: Array<string>;
    private _backgroundList: Array<string>;
    private _bossList: Array<string>;
    private _foughtBosses: Array<string>;
    private _currentStage: number;
    /*=============================
    **Constructors**
    =============================*/
    constructor(game :Phaser.Game)
    {
        this._game = game;
        this._musicList = new Array<string>();
        this._backgroundList = new Array<string>();
        this._bossList = new Array<string>();
        this._foughtBosses = new Array<string>();
        this._currentStage = 0;
    }
    /*=============================
    **Properties**
    =============================*/
    //getters
    get MusicList(): Array<string>
    { return this._musicList;  }

    get BackgroundList(): Array<string>
    { return this._backgroundList; }

    get BossList(): Array<string>
    { return this._bossList; }

    get CurrentStage(): number
    { return this._currentStage; }

    //setters

    set MusicList(val: Array<string>)
    { this._musicList = val; }

    set BackgroundList(val: Array<string>) 
    { this._backgroundList = val; }

    set BossList(val: Array<string>)
    { this._bossList = val; }

    set CurrentStage(val: number)
    { this._currentStage = val; }

    /*=============================
    **Methods**
    =============================*/
    getLevelBoss() : string
    {
        if (this._bossList.length > 0) {
            let selectedBoss: string = this._bossList.pop();
            this._foughtBosses.push(selectedBoss);   
            return selectedBoss;
        }

        else this._bossList = this._foughtBosses;
        this._foughtBosses = [];
        this.shuffleBosses();

        if (this._bossList.length > 0) return this.getLevelBoss();
        else return "";
    }

    //Using Durstenfeld shuffle algorithm.
    shuffleBosses() : void
    {
        for (let i: number = this._bossList.length - 1; i > 0; i--)
        {
            let j : number = Math.floor(Math.random() * (i + 1));
            let temp: string = this._bossList[i];
            this._bossList[i] = this._bossList[j];
            this._bossList[j] = temp;
        }

    }
}