import { AssetScaler } from '../Engine/AssetScaler';
import { AssetBooter } from '../Engine/AssetBooter';
import { Breakout } from '../../Breakout';

export class Preload extends Phaser.State {
    private loadingSound: Phaser.Sound;
    constructor() {
        super();
        }

    preload() {
       document.title = "preloading..."
        //this.game.add.image(this.game.world.centerX, this.game.world.centerX, '1st-sky');
        //sprites
       /*this.game.load.spritesheet('ball', AssetBooter.spriteRoot + 'ball.png', AssetScaler.spriteScaleRatio, AssetScaler.spriteScaleRatio);
        this.game.load.spritesheet('blue-brick', AssetBooter.spriteRoot + 'blue-brick.png', AssetScaler.spriteScaleRatio, AssetScaler.spriteScaleRatio);
        this.game.load.spritesheet('bullet', AssetBooter.spriteRoot + 'bullet.png', AssetScaler.spriteScaleRatio, AssetScaler.spriteScaleRatio);
        this.game.load.spritesheet('gold-brick', AssetBooter.spriteRoot + 'gold-brick.png', AssetScaler.spriteScaleRatio, AssetScaler.spriteScaleRatio);
        this.game.load.spritesheet('green-brick', AssetBooter.spriteRoot + 'green-brick.png', AssetScaler.spriteScaleRatio, AssetScaler.spriteScaleRatio);
        this.game.load.spritesheet('paddle', AssetBooter.spriteRoot + 'paddle.png', AssetScaler.spriteScaleRatio, AssetScaler.spriteScaleRatio);
        this.game.load.spritesheet('shadow', AssetBooter.spriteRoot + 'shadow.png', AssetScaler.spriteScaleRatio, AssetScaler.spriteScaleRatio);
        this.game.load.spritesheet('shadow', AssetBooter.spriteRoot + 'shadow.png', AssetScaler.spriteScaleRatio, AssetScaler.spriteScaleRatio);
        this.game.load.spritesheet('skullface', AssetBooter.spriteRoot + 'skullface.png', AssetScaler.spriteScaleRatio, AssetScaler.spriteScaleRatio);

        //backgrounds
        this.game.load.image('2nd-sky', AssetBooter.backgroundRoot + '2nd-sky.jpg');
        this.game.load.image('3rd-sky', AssetBooter.backgroundRoot + '3rd-sky.jpg');
        this.game.load.image('final-sky', AssetBooter.backgroundRoot + 'final-sky.jpg');

        //sound effects
        this.game.load.audio('ball-to-boss', [AssetBooter.soundRoot + 'mpg3/ball-to-boss.mpg3', AssetBooter.soundRoot + 'ogg/ball-to-boss.ogg']);
        this.game.load.audio('ball-to-brick', [AssetBooter.soundRoot + 'mpg3/ball-to-brick.mpg3', AssetBooter.soundRoot + 'ogg/ball-to-brick.ogg']);
        this.game.load.audio('ball-to-paddle', [AssetBooter.soundRoot + 'mpg3/ball-to-paddle.mpg3', AssetBooter.soundRoot + 'ogg/ball-to-paddle.ogg']);
        this.game.load.audio('evil-laugh', [AssetBooter.soundRoot + 'mpg3/evil-laugh.mpg3', AssetBooter.soundRoot + 'ogg/evil-laugh.ogg']);
        this.game.load.audio('evil-laugh-short', [AssetBooter.soundRoot + 'mpg3/evil-laugh-short.mpg3', AssetBooter.soundRoot + 'ogg/evil-laugh-short.ogg']);

        //music
        this.game.load.audio('opening', [AssetBooter.musicRoot + 'mpg3/opening_glorious_morning.mpg3', AssetBooter.musicRoot + 'ogg/opening_glorious_morning.ogg']);
        this.game.load.audio('stage', [AssetBooter.musicRoot + 'mpg3/stage_electrical_adventures.mpg3', AssetBooter.musicRoot + 'ogg/stage_electrical_adventures.ogg']);
        this.game.load.audio('boss', [AssetBooter.musicRoot + 'mpg3/boss_Endgame.mpg3', AssetBooter.musicRoot + 'ogg/boss_Endgame.ogg']);
        this.game.load.audio('final', [AssetBooter.musicRoot + 'mpg3/final_parago.mpg3', AssetBooter.musicRoot + 'ogg/final_parago.ogg']);
        this.game.load.image('1st-sky', AssetBooter.backgroundRoot + '1st-sky.jpg');*/

    }

    create() {
                //this.loadingSound = this.game.add.sound('loading', 1, true);

      //  this.loadingSound.destroy;
      //  this.game.state.start("MainMenu");
    }
}
