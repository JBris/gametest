import { Config } from '../../../config/Config';
import { ImageScaler } from '../Engine/ImageScaler';
import { AssetBooter } from '../Engine/AssetBooter';
import { Breakout } from '../../Breakout';

export class Preload extends Phaser.State {
    constructor() {
        super();
        }

    preload() {
        document.title = "preloading...";
        let background: Phaser.Image = this.game.add.image(0, 0, '1st-sky');
        ImageScaler.addScaledBackground(background, this.game);
        //sprites
        this.game.load.spritesheet('ball', AssetBooter.spriteRoute + 'ball.png', Config.frameSize, Config.frameSize);
        this.game.load.spritesheet('blue-brick', AssetBooter.spriteRoute + 'blue-brick.png', Config.frameSize, Config.frameSize);
        this.game.load.spritesheet('bullet', AssetBooter.spriteRoute + 'bullet.png', Config.frameSize, Config.frameSize);
        this.game.load.spritesheet('gold-brick', AssetBooter.spriteRoute + 'gold-brick.png', Config.frameSize, Config.frameSize);
        this.game.load.spritesheet('green-brick', AssetBooter.spriteRoute + 'green-brick.png', Config.frameSize, Config.frameSize);
        this.game.load.spritesheet('paddle', AssetBooter.spriteRoute + 'paddle.png', Config.frameSize, Config.frameSize);
        this.game.load.spritesheet('shadow', AssetBooter.spriteRoute + 'shadow.png', Config.frameSize, Config.frameSize);
        this.game.load.spritesheet('skullface', AssetBooter.spriteRoute + 'skullface.png', Config.frameSize, Config.frameSize);
        this.game.load.spritesheet('teal-brick', AssetBooter.spriteRoute + 'teal-brick.png', Config.frameSize, Config.frameSize);

        //backgrounds
        this.game.load.image('2nd-sky', AssetBooter.backgroundRoute + '2nd-sky.jpg');
        this.game.load.image('3rd-sky', AssetBooter.backgroundRoute + '3rd-sky.jpg');
        this.game.load.image('final-sky', AssetBooter.backgroundRoute + 'final-sky.jpg');

        //sound effects
        this.game.load.audio('ball-to-boss', [AssetBooter.mpg3SoundRoute + 'ball-to-boss.mpg3', AssetBooter.oggSoundRoute + 'ball-to-boss.ogg']);
        this.game.load.audio('ball-to-brick', [AssetBooter.mpg3SoundRoute + 'ball-to-brick.mpg3', AssetBooter.oggSoundRoute + 'ball-to-brick.ogg']);
        this.game.load.audio('ball-to-paddle', [AssetBooter.mpg3SoundRoute + 'ball-to-paddle.mpg3', AssetBooter.oggSoundRoute + 'ball-to-paddle.ogg']);
        this.game.load.audio('evil-laugh', [AssetBooter.mpg3SoundRoute + 'evil-laugh.mpg3', AssetBooter.oggSoundRoute + 'evil-laugh.ogg']);
        this.game.load.audio('evil-laugh-short', [AssetBooter.mpg3SoundRoute + 'evil-laugh-short.mpg3', AssetBooter.oggSoundRoute + 'evil-laugh-short.ogg']);

        //music
        this.game.load.audio('opening', [AssetBooter.mpg3MusicRoute + 'opening_glorious_morning.mpg3', AssetBooter.oggMusicRoute + 'opening_glorious_morning.ogg']);
        this.game.load.audio('stage', [AssetBooter.mpg3MusicRoute + 'stage_electrical_adventures.mpg3', AssetBooter.oggMusicRoute + 'stage_electrical_adventures.ogg']);
        this.game.load.audio('boss', [AssetBooter.mpg3MusicRoute + 'boss_Endgame.mpg3', AssetBooter.oggMusicRoute + 'boss_Endgame.ogg']);
        this.game.load.audio('final', [AssetBooter.mpg3MusicRoute + 'final_parago.mpg3', AssetBooter.oggMusicRoute + 'final_parago.ogg']);
    }

    create() {
      //  this.game.state.start("MainMenu");
    }
}
