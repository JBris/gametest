import { AssetRouter } from './AssetRouter';
import { SpriteManager } from '../Objects/Sprite/SpriteManager';

export class AssetLoader {

    /*=============================
    **Fields**
    =============================*/
    private _game: Phaser.Game;
    private _spriteManager: SpriteManager;

    /*=============================
    **Constructors
    =============================*/
    constructor(game: Phaser.Game) {
        this._game = game;
        this._spriteManager = new SpriteManager(game);
    }
    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/
    loadSpriteSheet(name: string, fileType: string) {
        this._game.load.spritesheet(name, AssetRouter.spriteRoute + name + fileType, this._spriteManager.FrameData[name]['x'], this._spriteManager.FrameData[name]['y']);
    }

    loadImage(name: string, fileType: string) 
    {
        this._game.load.image(name, AssetRouter.backgroundRoute + name + fileType);
    }

    loadAudio(name: string, fileType: string, altFileType:string) 
    {
        this._game.load.audio(name, [AssetRouter.mpg3SoundRoute + name + fileType, AssetRouter.oggSoundRoute + name + fileType]);

    }
  
    
}


