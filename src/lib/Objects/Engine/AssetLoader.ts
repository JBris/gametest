import { AssetRouter } from './AssetRouter';

export class AssetLoader {

    /*=============================
    **Fields**
    =============================*/
    private _game: Phaser.Game;

    /*=============================
    **Constructors
    =============================*/
    constructor(game: Phaser.Game) {
        this._game = game;
    }
    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/
    loadSpriteSheet(name: string, fileType: string, frameWidth:number,frameHeight : number) {
        this._game.load.spritesheet(name, AssetRouter.spriteRoute + name +"."+ fileType, frameWidth, frameHeight);
    }

    loadLogos(name: string, fileType: string, frameWidth: number, frameHeight: number) {
        this._game.load.spritesheet(name, AssetRouter.logoRoute + name + "." + fileType, frameWidth, frameHeight);
    }

    loadButtons(name: string, fileType: string, frameWidth: number, frameHeight: number) {
        this._game.load.spritesheet(name, AssetRouter.buttonRoute + name + "." + fileType, frameWidth, frameHeight);
    }

    loadImage(name: string, fileType: string) 
    {
        this._game.load.image(name, AssetRouter.backgroundRoute + name + "." + fileType);
    }

    loadSound(name: string, fileType: string, altFileType:string) 
    {
        this._game.load.audio(name, [AssetRouter.mpg3SoundRoute + name + fileType, AssetRouter.oggSoundRoute + name + "." + altFileType]);

    }

    loadMusic(name: string, fileType: string, altFileType: string) {
        this._game.load.audio(name, [AssetRouter.mpg3MusicRoute + name + fileType, AssetRouter.oggMusicRoute + name + "." + altFileType]);

    }
}


