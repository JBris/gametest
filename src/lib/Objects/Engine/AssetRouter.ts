export class AssetRouter {

    /*=============================
    **Fields**
    =============================*/
    private _mpg3SoundRoute : string;
    private _mpg3MusicRoute: string;
    private _oggSoundRoute: string;
    private _oggMusicRoute: string;
    private _spriteRoute: string;
    private _backgroundRoute: string;
    private _logoRoute: string;
    private _buttonRoute: string;

    /*=============================
    **Constructors
    =============================*/
    constructor()
    {
         this._mpg3SoundRoute = 'assets/sound/mpg3/';
         this._mpg3MusicRoute = 'assets/music/mpg3/';
         this._oggSoundRoute = 'assets/sound/ogg/';
         this._oggMusicRoute = 'assets/music/ogg/';
         this._spriteRoute = 'assets/img/sprites/';
         this._backgroundRoute = 'assets/img/backgrounds/';
         this._logoRoute = 'assets/img/logos/';
         this._buttonRoute = 'assets/img/buttons/';
    }
    /*=============================
    **Properties**
    =============================*/

    //getters

    get Mpg3SoundRoute(): string
    { return this._mpg3SoundRoute; }

    get Mpg3MusicRoute(): string
    { return this._mpg3MusicRoute; }

    get OggSoundRoute(): string
    { return this._oggSoundRoute; }

    get OggMusicRoute(): string
    { return this._oggMusicRoute; }

    get SpriteRoute(): string
    { return this._spriteRoute; }

    get BackgroundRoute(): string
    { return this._backgroundRoute; }

    get LogoRoute(): string
    { return this._logoRoute; }

    get ButtonRoute(): string
    { return this._buttonRoute; }

    //setters

    /*=============================
    **Methods**
    =============================*/

  
    
}


