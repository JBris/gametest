import { Config } from './Config';

export class BreakoutConfig extends Config{

    /*=============================
    **Fields**
    =============================*/

    private _defaultWidth:          number = window.innerWidth * window.devicePixelRatio;
    private _defaultHeight:         number = window.innerHeight * window.devicePixelRatio;
    private _defaultRenderer:       number  = Phaser.AUTO;
    private _defaultAspect_ratio:   number =  this._defaultWidth / this._defaultHeight;
    private _defaultTransparent:    boolean= false;
    private _defaultAntialias:      boolean= false;
    private _defaultNumberOfLives:  number = 5 ;
    private _defaultNumberOfStages: number = 3;
    private _defaultFrameSize :     number = 64;
    private _defaultOrientation:    number = 0;

    /*=============================
    **Constructors**
    =============================*/
    constructor(width?: number, height?: number, renderer?: number, aspect_ratio?: number, transparent?: boolean, antialias?: boolean,
        playerNumberOfLives?: number, numberOfStages?: number, defaultFrameSize?: number, orientation?: number)
    {
        super(width, height, renderer, aspect_ratio, transparent, antialias, playerNumberOfLives, numberOfStages, defaultFrameSize, orientation);
        this.setBreakoutDefaults();
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/
    setBreakoutDefaults() {

        if (this.z_width === null || this.z_width === undefined)
            this.z_width = this._defaultWidth;
        if (this.z_height === null || this.z_height ===undefined)
            this.z_height = this._defaultHeight;
        if (this.z_renderer === null || this.z_renderer === undefined)
            this.z_renderer = this._defaultRenderer;
        if (this.z_aspect_ratio === null || this.z_aspect_ratio === undefined)
            this.z_aspect_ratio = this._defaultAspect_ratio;
        if (this.z_transparent === null || this.z_transparent === undefined)
            this.z_transparent = this._defaultTransparent;
        if (this.z_antialias === null || this.z_antialias === undefined)
            this.z_antialias = this._defaultAntialias;
        if (this.z_playerNumberOfLives === null || this.z_playerNumberOfLives === undefined)
            this.z_playerNumberOfLives = this._defaultNumberOfLives;
        if (this.z_numberOfStages === null || this.z_numberOfStages === undefined)
            this.z_numberOfStages = this._defaultNumberOfStages;
        if (this.z_frameSize === null || this.z_frameSize === undefined)
            this.z_frameSize = this._defaultFrameSize;
        if (this.z_orientation === null || this.z_orientation === undefined)
            this.z_orientation = this._defaultOrientation;
    }
}