export abstract class Config {

    /*=============================
    **Fields**
    =============================*/

    protected z_width: number;
    protected z_height: number;
    protected z_renderer: number;
    protected z_aspect_ratio: number;
    protected z_transparent: boolean;
    protected z_antialias: boolean;
    protected z_playerNumberOfLives: number;
    protected z_numberOfStages: number;
    protected z_frameSize: number;
    protected z_orientation: number;

    /*=============================
    **Constructors**
    =============================*/
    constructor(width?: number, height?: number, renderer?: number, aspect_ratio?: number, transparent?: boolean, antialias?: boolean, 
        playerNumberOfLives?: number, numberOfStages?: number, defaultFrameSize?: number, orientation?:number)
    {
        this.z_width = width;
        this.z_height = height;
        this.z_renderer = renderer;
        this.z_aspect_ratio = aspect_ratio;
        this.z_transparent = transparent;
        this.z_antialias = antialias;
        this.z_playerNumberOfLives = playerNumberOfLives;
        this.z_numberOfStages = numberOfStages;
        this.z_frameSize = defaultFrameSize;
        this.z_orientation = orientation;
    }

    /*=============================
    **Properties**
    =============================*/

    //getters
    get Width(): number
    {
        return this.z_width;
    }

    get Height(): number {
        return this.z_height;
    }

    get Renderer(): number {
        return this.z_renderer;
    }

    get AspectRatio(): number {
        return this.z_aspect_ratio;
    }

    get Transparent() :boolean
    {
        return this.z_transparent;
    }

    get AntiAlias() :boolean
    {
        return this.z_antialias;
    }

    get PlayerNumberOfLives(): number
    {
        return this.z_playerNumberOfLives;
    }

    get NumberOfStages(): number {
        return this.z_numberOfStages;
    }

    get DefaultFrameSize(): number {
        return this.z_frameSize;
    }

    get Orientation(): number {
        return this.z_orientation;
    }

    //setters

    set Width(val: number) {
        this.z_width = val;
    }

    set Height(val: number) {
        this.z_height = val;
    }

    set Renderer(val: number) {
        this.z_renderer = val;
    }

    set AspectRatio(val: number) {
        this.z_aspect_ratio = val;
    }

    set Transparent(val: boolean) {
        this.z_transparent = val;
    }

    set AntiAlias(val: boolean) {
        this.z_antialias = val;
    }

    set PlayerNumberOfLives(val: number) {
        this.z_playerNumberOfLives = val;
    }

    set NumberOfStages(val: number) {
        this.z_numberOfStages = val;
    }

    set DefaultFrameSize(val: number) {
        this.z_frameSize = val;
    }

    set Orientation(val: number) {
        this.z_orientation = val;
    }

    /*=============================
    **Methods**
    =============================*/
}