export abstract class Config {

    /*=============================
    **Fields**
    =============================*/

    private _width:          number = window.innerWidth * window.devicePixelRatio;
    private _height:         number = window.innerHeight * window.devicePixelRatio;
    private _renderer:       number  = Phaser.AUTO;
    private _aspect_ratio:   number = this._width / this._height;
    private _transparent:    boolean= false;
    private _antialias:      boolean = false;
    private _playerNumberOfLives: number = 5 ;
    private _numberOfStages: number = 2;
    private _defaultFrameSize: number = 64;
    private _orientation: string;

    /*=============================
    **Constructors**
    =============================*/
    constructor(width?: number, height?: number, renderer?: number, aspect_ratio?: number, transparent?: boolean, antialias?: boolean, 
        playerNumberOfLives?: number, numberOfStages?: number, defaultFrameSize?: number, orientation?:string)
    {
        this._width = width;
        this._height = height;
        this._renderer = renderer;
        this._aspect_ratio = aspect_ratio;
        this._transparent = transparent;
        this._antialias = antialias;
        this._playerNumberOfLives = playerNumberOfLives;
        this._numberOfStages = numberOfStages;
        this._defaultFrameSize = defaultFrameSize;
        this._orientation = orientation;

    }

    /*=============================
    **Properties**
    =============================*/

    get Width(): number
    {
        return this._width;
    }

    get Height(): number {
        return this._height;
    }

    /*=============================
    **Methods**
    =============================*/
}