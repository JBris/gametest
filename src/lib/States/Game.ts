import { Breakout } from '../../Breakout';

import { Ball } from '../Objects/Ball/Ball';
import { BallParameters } from '../Objects/Ball/BallParameters';

import { MediumMovement } from '../Objects/MovableBehaviour/MediumMovement';
import { FastMovement } from '../Objects/MovableBehaviour/FastMovement';
import { SlowMovement } from '../Objects/MovableBehaviour/SlowMovement';

import { BreakoutButton } from '../Objects/Button/BreakoutButton';
import { ButtonParameters } from '../Objects/Button/ButtonParameters';


export class Game extends Phaser.State {

    /*=============================
    **Fields**
    =============================*/
    //Game
    private _game: Breakout;
    private _background: Phaser.Image;
    private _music: Phaser.Sound;

    //Numbers
    private _scoreMultiplyer: number;

    //Buttons
    private _playButton: BreakoutButton;
    private _pauseButton: BreakoutButton;
    private _restartButton: BreakoutButton;

    //Objects
    private _ball: Ball;
    private _paddle: Phaser.Sprite;
    private _brickInfo: Object;
    private _bricks: Phaser.Group;
    private _livesIcon: Ball;

    //Text
    private _scoreText: Phaser.Text;
    private _livesText: Phaser.Text;
    private _multiplyerText: Phaser.Text;

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

    preload()
    {
        let levelNumber: number = this._game.GameEngine.stageManager.CurrentStage;

        this._background = this.game.add.image(0, 0, this._game.GameEngine.stageManager.BackgroundList[levelNumber]);
        this._game.GameEngine.scalingManager.scaleBreakoutBackground(this._background);
        this.game.camera.resetFX();
        this.scale.onOrientationChange.add(this._game.GameEngine.scalingManager.scaleGameScreen, this);
        this.scale.onOrientationChange.add(this._game.GameEngine.scalingManager.scaleBreakoutBackground, this);
        this._scoreMultiplyer = 1;
    }

    create()
    {
        let levelNumber: number = this._game.GameEngine.stageManager.CurrentStage;
        //music
        this._music = this.add.audio(this._game.GameEngine.stageManager.MusicList[levelNumber], 1, true);
        this._music.fadeIn(6000);

        //text
        this._scoreText = this._game.GameEngine.styleManager.positionTextTopLeft(String(this._game.PlayerList.MyPlayerList[0].score), null);
        this._livesText = this._game.GameEngine.styleManager.positionTextBottomLeft(String(this._game.PlayerList.MyPlayerList[0].lives) + " X", null);
        this._multiplyerText = this._game.GameEngine.styleManager.positionTextBottomRight("X " + String(this._scoreMultiplyer), null);


        //buttons
        //pause
        this._pauseButton = this._game.MegaFactory.buttonFactory.createProduct("pause", new ButtonParameters(this.game,
            this.game.world.width - 0.1 * this.game.world.width, 0 + 0.1 * this.game.world.height, 'pause-button',null, null, 1, 0, 1, 0));

        this._pauseButton.anchor.set(1, 0);
        this._game.GameEngine.scalingManager.scaleGameElements(this.game, [this._pauseButton], 0.05, 0.05);
        this._pauseButton.inputEnabled = true;
        this._pauseButton.events.onInputUp.add(function () { this.game.paused = true; }, this);
        this.game.input.onDown.add(function () { if (this.game.paused) this.game.paused = false},this);


        //start
        this._playButton = this._game.MegaFactory.buttonFactory.createProduct("play", new ButtonParameters(this.game,
            this.game.world.centerX, this.game.world.centerY, 'play-button', this.startGame, this, 1, 0, 1, 0));
        this._playButton.anchor.set(0.5, 0.5);
        this._game.GameEngine.scalingManager.scaleGameElements(this.game, [this._playButton], 0.15, 0.15);

        //sprites
        this._livesIcon = this._game.MegaFactory.ballFactory.createProduct("normal", new BallParameters(this.game, this._livesText.x + this._livesText.width,
            this._livesText.y, 'paddle', 0, null,0));

        this._game.GameEngine.scalingManager.scaleGameElements(this.game, [this._livesIcon], 0.08, 0.08);

        this._livesIcon.anchor.set(0, 0.4);
        this._livesIcon.animations.add('hurt', [3, 4, 3, 4, 3, 4, 0], 24);
        this._livesIcon.alpha = 0.35;

        this._paddle = this.game.add.sprite(this.game.world.centerX, this.game.world.height - this.game.world.height * 0.1, 'paddle', 0);
        this._game.GameEngine.scalingManager.scaleGameElements(this.game, [this._paddle], 0.1, 0.1);
        this._paddle.anchor.set(0.5, 0.5);

        this._ball = this._game.MegaFactory.ballFactory.createProduct("normal", new BallParameters(this.game, this._paddle.x,
            this._paddle.y - this._paddle.height * 0.1,'ball',0, new MediumMovement(),1));
        this._game.GameEngine.scalingManager.scaleGameElements(this.game, [this._ball], 0.08, 0.08);
        this._ball.anchor.set(0.5, 0.5);


    }

    /*=============================
    **Methods**
    =============================*/

    startGame()
    {
        this._ball.Params.MovementType.move();
    }

}
