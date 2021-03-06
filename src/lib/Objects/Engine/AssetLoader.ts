import { AssetRouter } from './AssetRouter';
import { Breakout } from '../../../Breakout';

export class AssetLoader {

    /*=============================
    **Fields**
    =============================*/
    private _game: Breakout;

    /*=============================
    **Constructors
    =============================*/
    constructor(game: Breakout) {
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

    loadBossSpriteSheet(name: string, fileType: string, frameWidth: number, frameHeight: number, addToRandomPool :boolean) {
        this._game.load.spritesheet(name, AssetRouter.spriteRoute + name + "." + fileType, frameWidth, frameHeight);
        if (addToRandomPool) this._game.BreakoutWorld.stageManager.BossList.push(name);

    }

    loadLogos(name: string, fileType: string, frameWidth: number, frameHeight: number) {
        this._game.load.spritesheet(name, AssetRouter.logoRoute + name + "." + fileType, frameWidth, frameHeight);
    }

    loadButtons(name: string, fileType: string, frameWidth: number, frameHeight: number) {
        this._game.load.spritesheet(name, AssetRouter.buttonRoute + name + "." + fileType, frameWidth, frameHeight);
    }

    loadImage(name: string, fileType: string, addToRandomPool: boolean) 
    {
        this._game.load.image(name, AssetRouter.backgroundRoute + name + "." + fileType);
        if (addToRandomPool) this._game.BreakoutWorld.stageManager.BackgroundList.push(name);
    }

    loadSound(name: string, fileType: string, altFileType:string) 
    {
        this._game.load.audio(name, [AssetRouter.mpg3SoundRoute + name + fileType, AssetRouter.oggSoundRoute + name + "." + altFileType]);

    }

    loadMusic(name: string, fileType: string, altFileType: string, addToRandomPool: boolean) {
        this._game.load.audio(name, [AssetRouter.mpg3MusicRoute + name + fileType, AssetRouter.oggMusicRoute + name + "." + altFileType]);
        if (addToRandomPool) this._game.BreakoutWorld.stageManager.MusicList.push(name);
    }
}


