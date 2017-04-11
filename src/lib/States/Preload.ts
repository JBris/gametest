import { Config } from '../../../config/Config';
import { ImageScaler } from '../Engine/ImageScaler';
import { AssetBooter } from '../Engine/AssetBooter';
import { Breakout } from '../../Breakout';

export class Preload extends Phaser.State {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor() {
        super();
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

    preload() {
        //sprites
        this.loadSprites();

        //logos
        this.loadLogos();

        //buttons
        this.loadButtons();

        //backgrounds
        this.loadBackgrounds();

        //sound effects
        this.loadSoundEffects();

        //music
        this.loadMusic();
    }

    create() {
        this.game.camera.fade(0x000000, 1500);
        this.camera.onFadeComplete.add(this.launchMainMenu ,this);
    }

    launchMainMenu()
    {
        this.game.state.start("MainMenu");
    }

    loadSprites()
    {
        this.game.load.spritesheet('ball', AssetBooter.spriteRoute + 'ball.png', Config.frameSize, Config.frameSize);
        this.game.load.spritesheet('blue-brick', AssetBooter.spriteRoute + 'blue-brick.png', Config.frameSize, Config.frameSize);
        this.game.load.spritesheet('bullet', AssetBooter.spriteRoute + 'bullet.png', Config.frameSize, Config.frameSize);
        this.game.load.spritesheet('gold-brick', AssetBooter.spriteRoute + 'gold-brick.png', Config.frameSize, Config.frameSize);
        this.game.load.spritesheet('green-brick', AssetBooter.spriteRoute + 'green-brick.png', Config.frameSize, Config.frameSize);
        this.game.load.spritesheet('paddle', AssetBooter.spriteRoute + 'paddle.png', Config.frameSize, Config.frameSize);
        this.game.load.spritesheet('shadow', AssetBooter.spriteRoute + 'shadow.png', Config.frameSize, Config.frameSize);
        this.game.load.spritesheet('skullface', AssetBooter.spriteRoute + 'skullface.png', Config.frameSize, Config.frameSize);
        this.game.load.spritesheet('teal-brick', AssetBooter.spriteRoute + 'teal-brick.png', Config.frameSize, Config.frameSize);
    }

    loadLogos()
    {
        this.game.load.spritesheet('title', AssetBooter.logoRoute + 'title.png', Config.frameSize, Config.frameSize);
    } 

    loadButtons()
    {
        this.game.load.spritesheet('play-button', AssetBooter.buttonRoute + 'play-button.png', Config.frameSize, Config.frameSize);
        this.game.load.spritesheet('restart-button', AssetBooter.buttonRoute + 'restart-button.png', Config.frameSize, Config.frameSize);
        this.game.load.spritesheet('off-button', AssetBooter.buttonRoute + 'off-button.png', Config.frameSize, Config.frameSize);
    }

    loadBackgrounds()
    {
        this.game.load.image('1st-sky', AssetBooter.backgroundRoute + '1st-sky.jpg');
        this.game.load.image('2nd-sky', AssetBooter.backgroundRoute + '2nd-sky.jpg');
        this.game.load.image('3rd-sky', AssetBooter.backgroundRoute + '3rd-sky.jpg');
        this.game.load.image('final-sky', AssetBooter.backgroundRoute + 'final-sky.jpg');
    }

    loadSoundEffects()
    {
        this.game.load.audio('ball-to-boss', [AssetBooter.mpg3SoundRoute + 'ball-to-boss.mpg3', AssetBooter.oggSoundRoute + 'ball-to-boss.ogg']);
        this.game.load.audio('ball-to-brick', [AssetBooter.mpg3SoundRoute + 'ball-to-brick.mpg3', AssetBooter.oggSoundRoute + 'ball-to-brick.ogg']);
        this.game.load.audio('ball-to-paddle', [AssetBooter.mpg3SoundRoute + 'ball-to-paddle.mpg3', AssetBooter.oggSoundRoute + 'ball-to-paddle.ogg']);
        this.game.load.audio('evil-laugh', [AssetBooter.mpg3SoundRoute + 'evil-laugh.mpg3', AssetBooter.oggSoundRoute + 'evil-laugh.ogg']);
        this.game.load.audio('evil-laugh-short', [AssetBooter.mpg3SoundRoute + 'evil-laugh-short.mpg3', AssetBooter.oggSoundRoute + 'evil-laugh-short.ogg']);
    }

    loadMusic()
    {
        this.game.load.audio('opening', [AssetBooter.mpg3MusicRoute + 'opening_glorious_morning.mpg3', AssetBooter.oggMusicRoute + 'opening_glorious_morning.ogg']);
        this.game.load.audio('stage', [AssetBooter.mpg3MusicRoute + 'stage_electrical_adventures.mpg3', AssetBooter.oggMusicRoute + 'stage_electrical_adventures.ogg']);
        this.game.load.audio('boss', [AssetBooter.mpg3MusicRoute + 'boss_Endgame.mpg3', AssetBooter.oggMusicRoute + 'boss_Endgame.ogg']);
        this.game.load.audio('final', [AssetBooter.mpg3MusicRoute + 'final_parago.mpg3', AssetBooter.oggMusicRoute + 'final_parago.ogg']);
    }
}
