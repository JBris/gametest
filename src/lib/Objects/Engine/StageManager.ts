export class StageManager
{
    /*=============================
    **Fields**
    =============================*/
    private _game: Phaser.Game;

    //randomized music
    private _musicList: Array<string>;
    private _playedMusic: Array<string>;

    //randomized background
    private _backgroundList: Array<string>;
    private _seenbackground: Array<string>;

    //randomized enemies
    private _enemyList: Array<string>;

    //randomized bosses
    private _bossList: Array<string>;
    private _foughtBosses: Array<string>;

    private _currentStage: number;

    //non-randomized elements
    private _titleScreenBackground: string;
    private _titleScreenMusic: string;

    private _fetusScreenBackground: string;
    private _fetusScreenMusic: string;

    /*=============================
    **Constructors**
    =============================*/
    constructor(game :Phaser.Game)
    {
        this._game = game;

        this._musicList = new Array<string>();
        this._playedMusic = new Array<string>();

        this._backgroundList = new Array<string>();
        this._seenbackground = new Array<string>();

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

    get TitleScreenBackground(): string
    { return this._titleScreenBackground; }

    get TitleScreenMusic(): string
    { return this._titleScreenMusic; }

    get FetusScreenBackground(): string
    { return this._fetusScreenBackground; }

    get FetusScreenMusic(): string
    { return this._fetusScreenMusic; }

    //setters

    set MusicList(val: Array<string>)
    { this._musicList = val; }

    set BackgroundList(val: Array<string>) 
    { this._backgroundList = val; }

    set BossList(val: Array<string>)
    { this._bossList = val; }

    set CurrentStage(val: number)
    { this._currentStage = val; }

    set TitleScreenBackground(val: string)
    { this._titleScreenBackground = val; }

    set TitleScreenMusic(val: string)
    { this._titleScreenMusic = val; }

    set FetusScreenBackground(val: string)
    { this._fetusScreenBackground = val; }

    set FetusScreenMusic(val: string)
    { this._fetusScreenMusic = val; }

    /*=============================
    **Methods**
    =============================*/
    getLevelBoss() : string
    {
        return this.getRandomizedListElement(this._bossList, this._foughtBosses);
    }

    getLevelBackground(): string {
        return this.getRandomizedListElement(this._backgroundList, this._seenbackground);
    }

    getLevelMusic(): string {
        return this.getRandomizedListElement(this._musicList, this._playedMusic);
    }

    randomiseGameWorld(): void
    {
        this.shuffleList(this._musicList);
        this.shuffleList(this._backgroundList);
        this.shuffleList(this._bossList);
    }

    getRandomizedListElement(fullList : Array<string>, emptyList : Array<string>) : string
    {
        if (fullList.length > 0) {
            let selectedElement: string = fullList.pop();
            emptyList.push(selectedElement);
            return selectedElement;
        }

        else fullList = emptyList;
        emptyList = [];
        this.shuffleList(fullList);

        if (fullList.length > 0) return this.getRandomizedListElement(fullList, emptyList);
        else return "";
    }

    //Using Durstenfeld shuffle algorithm.
    shuffleList(array : Array<string>) : void
    {
        for (let i: number = array.length - 1; i > 0; i--)
        {
            let j : number = Math.floor(Math.random() * (i + 1));
            let temp: string = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

    }
}