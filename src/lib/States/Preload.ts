import { AssetLoader } from '../Boot/AssetLoader';
import { BallFactory } from '../Objects/Ball/Factory/BallFactory';

export class Preload extends Phaser.State {

    /*=============================
    **Fields**
    =============================*/
    private _loadingSprite: Phaser.Sprite;
    private _ballFactory: BallFactory;
    private _assetLoader: AssetLoader;

    /*=============================
    **Constructors
    =============================*/

    constructor() {
        super();
        this._assetLoader = new AssetLoader(this.game);
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

    preload() {
        this._ballFactory = new BallFactory(this.game);
        this._loadingSprite = this._ballFactory.createBall(this.game.world.centerX, this.game.world.centerY,0,0.2,0.2,0,0,'ball');
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
        this.game.camera.fade(0x000000, 1500);
        this.camera.onFadeComplete.add(this.launchMainMenu ,this);
    }

    launchMainMenu()
    {
        this.game.state.start("MainMenu");
    }

    loadSprites()
    {
        this._assetLoader.loadSpriteSheet('blue-brick', 'png');
        this._assetLoader.loadSpriteSheet('bullet', 'png');
        this._assetLoader.loadSpriteSheet('gold-brick', 'png');
        this._assetLoader.loadSpriteSheet('green-brick', 'png');
        this._assetLoader.loadSpriteSheet('paddle', 'png');
        this._assetLoader.loadSpriteSheet('shadow', 'png');
        this._assetLoader.loadSpriteSheet('skullface', 'png');
        this._assetLoader.loadSpriteSheet('teal-brick', 'png');
    }

    loadLogos()
    {
        this._assetLoader.loadSpriteSheet('title', 'png');
        this._assetLoader.loadSpriteSheet('score', 'png');
        this._assetLoader.loadSpriteSheet('lives', 'png');
    } 

    loadButtons()
    {
        this._assetLoader.loadSpriteSheet('play-button', 'png');
        this._assetLoader.loadSpriteSheet('restart-button', 'png');
        this._assetLoader.loadSpriteSheet('off-button', 'png');
        this._assetLoader.loadSpriteSheet('options-button', 'png');
    }

    loadBackgrounds()
    {
        this._assetLoader.loadImage('1st-sky', 'jpg');
        this._assetLoader.loadImage('2nd-sky', 'jpg');
        this._assetLoader.loadImage('3rd-sky', 'jpg');
        this._assetLoader.loadImage('final-sky', 'jpg');
    }

    loadSoundEffects()
    {
        this._assetLoader.loadAudio('ball-to-boss', 'mp3', 'ogg');
        this._assetLoader.loadAudio('ball-to-brick', 'mp3', 'ogg');
        this._assetLoader.loadAudio('ball-to-paddle', 'mp3', 'ogg');
        this._assetLoader.loadAudio('evil-laugh', 'mp3', 'ogg');
        this._assetLoader.loadAudio('evil-laugh-short', 'mp3', 'ogg');
    }

    loadMusic()
    {
        this._assetLoader.loadAudio('opening_glorious_morning', 'mp3', 'ogg');
        this._assetLoader.loadAudio('stage_electrical_adventures', 'mp3', 'ogg');
        this._assetLoader.loadAudio('boss_Endgame', 'mp3', 'ogg');
        this._assetLoader.loadAudio('final_parago', 'mp3', 'ogg');
    }
}
