import { AssetRouter } from './AssetRouter';

export class AssetLoader {

    /*=============================
    **Fields**
    =============================*/
    private _game: Phaser.Game;
    private _assetRouter: AssetRouter;

    /*=============================
    **Constructors
    =============================*/
    constructor(game: Phaser.Game, assetRouter : AssetRouter) {
        this._game = game;
        this._assetRouter = assetRouter;
    }
    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/
    loadSpriteSheet(name: string, fileType: string, frameWidth:number,frameHeight : number) {
        this._game.load.spritesheet(name, this._assetRouter.SpriteRoute + name +"."+ fileType, frameWidth, frameHeight);
    }

    loadLogos(name: string, fileType: string, frameWidth: number, frameHeight: number) {
        this._game.load.spritesheet(name, this._assetRouter.LogoRoute + name + "." + fileType, frameWidth, frameHeight);
    }

    loadButtons(name: string, fileType: string, frameWidth: number, frameHeight: number) {
        this._game.load.spritesheet(name, this._assetRouter.ButtonRoute + name + "." + fileType, frameWidth, frameHeight);
    }

    loadImage(name: string, fileType: string) 
    {
        this._game.load.image(name, this._assetRouter.BackgroundRoute + name + "." + fileType);
    }

    loadSound(name: string, fileType: string, altFileType:string) 
    {
        this._game.load.audio(name, [this._assetRouter.Mpg3SoundRoute + name + fileType, this._assetRouter.OggSoundRoute + name + "." + altFileType]);

    }

    loadMusic(name: string, fileType: string, altFileType: string) {
        this._game.load.audio(name, [this._assetRouter.Mpg3MusicRoute + name + fileType, this._assetRouter.OggMusicRoute + name + "." + altFileType]);

    }
}


