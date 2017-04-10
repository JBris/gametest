import { Breakout } from '../src/Breakout';

export class Config {

    /*=============================
    **Fields**
    =============================*/

    private _width:         number = window.innerWidth * window.devicePixelRatio;
    private _height:        number = window.innerHeight * window.devicePixelRatio;
    private _renderer: string = "Phaser.CANVAS";
    private _aspect_ratio: number = this._width / this._height;
    private _transparent:   boolean= false;
    private _antialias:     boolean= false;
    private _numberOfLives: number = 5 ;
    private _numberOfStages: number = 3;

    /*=============================
    **Constructors**
    =============================*/
    constructor() {
    }

    /*=============================
    **Properties**
    =============================*/

    //getters
    getWidth() {
        return this._width;
    }

    getHeight() {
        return this._height;
    }

    getRenderer() {
        return this._renderer;
    }

    getTransparent() {
        return this._transparent;
    }

    getAntiAlias() {
        return this._antialias;
    }

    getnumberOfLives() {
        return this._numberOfLives;
    }

    //readonly
    getnumberOfStages() { 
        return this._numberOfStages;
    }

    //setters
    setWidth(val:number) {
        this._width = val;
    }

    setHeight(val:number) {
        this._height = val;
    }

    setRenderer(val:string) {
        this._renderer = val;
    }

    setTransparent(val:boolean) {
        this._transparent = val;
    }

    setAntiAlias(val:boolean) {
        this._antialias = val;
    }

    setnumberOfLives(val:number) {
        this._numberOfLives = val;
    }


    /*=============================
    **Methods**
    =============================*/

    //Scale for different screen sizes. Both portrait and landscape
    public scaleScreen(game: Breakout) {
        var scale_ratio: number = 0;
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.refresh();

        this._width = window.innerWidth * window.devicePixelRatio;
        this._height = window.innerHeight * window.devicePixelRatio;
        game.scale.setGameSize(this._width, this._height);

        this._aspect_ratio = this._width / this._height;
      
        if (this._aspect_ratio > 1) scale_ratio = this._height / 2048;
        else scale_ratio = this._width / 2048;

        //game.ball.scale.set(scale_ratio);
    }
}