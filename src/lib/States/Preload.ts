import { Breakout } from '../../Breakout';
import { Ball } from '../Objects/Ball/Ball';
import { BallParameters } from '../Objects/Ball/BallParameters';

export class Preload extends Phaser.State {

    /*=============================
    **Fields**
    =============================*/
    private _game: Breakout;
    private _loadingSprite: Ball;

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Breakout) {
        super();
        this._game = game;
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

    preload() {

        this._loadingSprite = this._game.MegaFactory.ballFactory.createProduct("normal", new BallParameters(this.game, this.game.world.centerX,
            this.game.world.centerY, 'ball', 0));

        this._game.GameEngine.scalingManager.scaleGameElements(this.game,[this._loadingSprite],0.2,0.2);

        if (this._loadingSprite.animations.getAnimation('sleep') !== undefined && this._loadingSprite.animations.getAnimation('sleep') !== null)
            this._loadingSprite.animations.play('sleep', 24, true);

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
        this.game.camera.fade(0x000000, 3000);
        this.camera.onFadeComplete.add(this.launchMainMenu ,this);
    }

    launchMainMenu()
    {
      this.game.state.start("MainMenu", true, false, this._game);
    }

    loadSprites()
    {
        this._game.GameEngine.assetLoader.loadSpriteSheet('blue-brick', 'png',64,64);
        this._game.GameEngine.assetLoader.loadSpriteSheet('bullet', 'png', 64, 64);
        this._game.GameEngine.assetLoader.loadSpriteSheet('gold-brick', 'png', 64, 64);
        this._game.GameEngine.assetLoader.loadSpriteSheet('green-brick', 'png', 64, 64);
        this._game.GameEngine.assetLoader.loadSpriteSheet('paddle', 'png', 64, 64);
        this._game.GameEngine.assetLoader.loadSpriteSheet('shadow', 'png', 64, 64);
        this._game.GameEngine.assetLoader.loadSpriteSheet('skullface', 'png', 64, 64);;
        this._game.GameEngine.assetLoader.loadSpriteSheet('teal-brick', 'png', 64, 64);
    }

    loadLogos()
    {
        this._game.GameEngine.assetLoader.loadLogos('title', 'png', 250, 117);
    } 

    loadButtons()
    {
        this._game.GameEngine.assetLoader.loadButtons('play-button', 'png', 200, 200);
        this._game.GameEngine.assetLoader.loadButtons('restart-button', 'png', 200, 200);
        this._game.GameEngine.assetLoader.loadButtons('off-button', 'png', 220, 259);
        this._game.GameEngine.assetLoader.loadButtons('options-button', 'png', 200, 200);
        this._game.GameEngine.assetLoader.loadButtons('pause-button', 'png', 152, 250);

    }

    loadBackgrounds()
    {
        this._game.GameEngine.assetLoader.loadImage('1st-sky', 'jpg');
        this._game.GameEngine.assetLoader.loadImage('2nd-sky', 'jpg');
        this._game.GameEngine.assetLoader.loadImage('3rd-sky', 'jpg');
        this._game.GameEngine.assetLoader.loadImage('final-sky', 'jpg');
    }

    loadSoundEffects()
    {
        this._game.GameEngine.assetLoader.loadSound('ball-to-boss', 'mp3', 'ogg');
        this._game.GameEngine.assetLoader.loadSound('ball-to-brick', 'mp3', 'ogg');
        this._game.GameEngine.assetLoader.loadSound('ball-to-paddle', 'mp3', 'ogg');
        this._game.GameEngine.assetLoader.loadSound('evil-laugh', 'mp3', 'ogg');
        this._game.GameEngine.assetLoader.loadSound('evil-laugh-short', 'mp3', 'ogg');
    }

    loadMusic()
    {
        this._game.GameEngine.assetLoader.loadMusic('opening_glorious_morning', 'mp3', 'ogg');
        this._game.GameEngine.assetLoader.loadMusic('stage_electrical_adventures', 'mp3', 'ogg');
        this._game.GameEngine.assetLoader.loadMusic('boss_Endgame', 'mp3', 'ogg');
        this._game.GameEngine.assetLoader.loadMusic('final_parago', 'mp3', 'ogg');
    }
}
