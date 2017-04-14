import { AssetLoader } from '../Boot/AssetLoader';


import { Ball } from '../Objects/Ball/Ball';

export class Preload extends Phaser.State {

    /*=============================
    **Fields**
    =============================*/
    private _loadingSprite: Ball;
    private _assetLoader: AssetLoader;

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
        this._assetLoader = new AssetLoader(this.game);
        this._ballFactory = new BallFactory(this.game);
        console.log(this._ballFactory.game );
        this._loadingSprite = this._ballFactory.createBall("normal", this.game.world.centerX, this.game.world.centerY, 'ball', null, 0, 0.15, 0.15, 0, 0, 0);
        console.log(this._loadingSprite);
        this.game.add.existing(this._loadingSprite);
        this._loadingSprite.scaleGameElement(this.game);
        this._loadingSprite.enableAnimations();
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
        this.game.state.start("MainMenu");
    }

    loadSprites()
    {
        this._assetLoader.loadSpriteSheet('blue-brick', 'png',64,64);
        this._assetLoader.loadSpriteSheet('bullet', 'png', 64, 64);
        this._assetLoader.loadSpriteSheet('gold-brick', 'png', 64, 64);
        this._assetLoader.loadSpriteSheet('green-brick', 'png', 64, 64);
        this._assetLoader.loadSpriteSheet('paddle', 'png', 64, 64);
        this._assetLoader.loadSpriteSheet('shadow', 'png', 64, 64);
        this._assetLoader.loadSpriteSheet('skullface', 'png', 64, 64);;
        this._assetLoader.loadSpriteSheet('teal-brick', 'png', 64, 64);
    }

    loadLogos()
    {
        this._assetLoader.loadLogos('title', 'png', 250, 117);
    } 

    loadButtons()
    {
        this._assetLoader.loadButtons('play-button', 'png', 200, 200);
        this._assetLoader.loadButtons('restart-button', 'png', 200, 200);
        this._assetLoader.loadButtons('off-button', 'png', 220, 259);
        this._assetLoader.loadButtons('options-button', 'png', 200, 200);
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
        this._assetLoader.loadSound('ball-to-boss', 'mp3', 'ogg');
        this._assetLoader.loadSound('ball-to-brick', 'mp3', 'ogg');
        this._assetLoader.loadSound('ball-to-paddle', 'mp3', 'ogg');
        this._assetLoader.loadSound('evil-laugh', 'mp3', 'ogg');
        this._assetLoader.loadSound('evil-laugh-short', 'mp3', 'ogg');
    }

    loadMusic()
    {
        this._assetLoader.loadMusic('opening_glorious_morning', 'mp3', 'ogg');
        this._assetLoader.loadMusic('stage_electrical_adventures', 'mp3', 'ogg');
        this._assetLoader.loadMusic('boss_Endgame', 'mp3', 'ogg');
        this._assetLoader.loadMusic('final_parago', 'mp3', 'ogg');
    }
}
