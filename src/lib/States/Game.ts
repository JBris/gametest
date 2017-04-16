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
    private _currentlyPlaying: boolean;

    //Numbers
    private _scoreMultiplyer: number;
    private _paddlePositionX: number;
    private _paddlePositionY: number;
    private _ballPositionX: number;
    private _ballPositionY: number;

    //Buttons
    private _playButton: BreakoutButton;
    private _pauseButton: BreakoutButton;
    private _restartButton: BreakoutButton;

    //Objects
    private _ball: Ball;
    private _paddle: Phaser.Sprite;
    private _brickInfo: Object;
    private _bricks: Phaser.Group;
    private _brick: Phaser.Sprite;
    private _livesIcon: Ball;

    //Text
    private _levelNumberText: Phaser.Text;
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

    /*=============================
    **Methods**
    =============================*/

    //===============================================================================================================//
    // Preload, create, and update
    //===============================================================================================================//

    preload(): void {
        this._currentlyPlaying = false;
        let levelNumber: number = this._game.BreakoutWorld.stageManager.CurrentStage;
        this._background = this.game.add.image(0, 0, this._game.BreakoutWorld.stageManager.BackgroundList[levelNumber]);
        this._game.BreakoutWorld.scalingManager.scaleBreakoutBackground(this._background);

        this.game.camera.resetFX();
        this.camera.onFadeComplete.forget();
        this.scale.onOrientationChange.add(this._game.BreakoutWorld.scalingManager.scaleGameScreen, this);
        this.scale.onOrientationChange.add(this._game.BreakoutWorld.scalingManager.scaleBreakoutBackground, this);
        this._scoreMultiplyer = 1;

        this._paddlePositionX = this.game.world.centerX;
        this._paddlePositionY = this.game.world.height - this.game.world.height * 0.1;
        this._ballPositionX = this.game.world.centerX;
        //can't set ball position y just yet

        this.loadButtons();
        this.loadText();
        this.loadSprites();
    }

    create(): void {
        let levelNumber: number = this._game.BreakoutWorld.stageManager.CurrentStage;
        //music
        this._music = this.add.audio(this._game.BreakoutWorld.stageManager.MusicList[levelNumber], 1, true, true);
        this._music.play();

        this.game.time.events.add(1000, this._game.BreakoutWorld.styleManager.fadeText, this, this._levelNumberText);
        this.game.time.events.add(1000, this.displayPlayButton, this);

    }

    update(): void {
        this.game.physics.arcade.collide(this._ball, this._paddle, this.ballCollidePaddle,null, this);
        this.game.physics.arcade.collide(this._ball, this._bricks, this.ballCollideBrick, null,this);
        if (this._currentlyPlaying) {
            this._paddle.x = this.game.input.x || this.game.world.width * 0.5;
        }
    }


    //===============================================================================================================//
    //start game
    //===============================================================================================================//

    displayPlayButton(): void {
        //start
        this._playButton = this._game.AddElement.buttonFactory.createProduct("play", new ButtonParameters(this.game,
            this.game.world.centerX, this.game.world.centerY, 'play-button', this.startGame, this, 1, 0, 1, 0));
        this._game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._playButton], 0, 0);
        this._game.BreakoutWorld.scalingManager.scaleGameElementsOverTime(this.game, [this._playButton], 0.15, 0.15, 500, false);
        this._playButton.anchor.set(0.5, 0.5);
    }

    startGame(): void {
        this._game.BreakoutWorld.scalingManager.scaleGameElementsOverTime(this.game, [this._playButton], 0, 0, 500, true);
        this._ball.MovementType.move();
        this.game.physics.arcade.checkCollision.down = false;
        this._ball.events.onOutOfBounds.add(this.ballLeaveScreen, this);
        this._currentlyPlaying = true;
        this._playButton.destroy();
    }

    //===============================================================================================================//
    //lose game
    //===============================================================================================================//

    ballLeaveScreen(): void {
        this._currentlyPlaying = false;

        //lives
        this._game.PlayerList.MyPlayerList[0].lives -= 1;
        this._livesText.setText(String(this._game.PlayerList.MyPlayerList[0].lives) + " X", null);

        //visuals
        this._game.BreakoutWorld.styleManager.damageFlash(2000);
        this._livesIcon.animations.play('hurt');

        //movement
        this._ball.MovementType.move(0, 0);
        this._ball.reset(this._ballPositionX, this._ballPositionY);
        this._paddle.reset(this._paddlePositionX, this._paddlePositionY);

        if (this._game.PlayerList.MyPlayerList[0].lives > 0) {
            this.displayPlayButton();
        } else {
            this.setUpGameOver();
        }
    }

    setUpGameOver(): void {
        this._music.destroy();
        this.camera.resetFX();
        this.camera.fade(0x000000, 2000);

        let laugh: Phaser.Sound = this.sound.add('evil-laugh-short', 1, false);
        laugh.onStop.addOnce(this.launchMainMenu, this);
        laugh.play();
    }

    launchMainMenu(): void {
        this.game.state.start("MainMenu", true, false, this._game);
    }

    //===============================================================================================================//
    //game loop
    //===============================================================================================================//

    prepareRelaunchGame(): void {
        this.game.physics.arcade.checkCollision.down = true;
        this._music.fadeOut(4000);
        this.camera.fade(0x000000, 1000);
        this.camera.onFadeComplete.addOnce(this.relaunchGame, this);
    }

    relaunchGame(): void {
        this._background.destroy();
        this._music.destroy();

        this._game.BreakoutWorld.stageManager.CurrentStage += 1;
        if (this._game.BreakoutWorld.stageManager.CurrentStage > this._game.BreakoutConfig.NumberOfStages)
            this._game.BreakoutWorld.stageManager.CurrentStage = 1;

        this._game.PlayerList.MyPlayerList[0].level += 1;

        this.game.state.start("Game", true, false, this._game);
    }

   //===============================================================================================================//
   //collisions
   //===============================================================================================================//

    ballCollidePaddle(): void {
        if ("vibrate" in window.navigator) {window.navigator.vibrate([100]);}
        if (this._currentlyPlaying) this._ball.collide("paddle", 0, this._paddle.x);
    }

    ballCollideBrick(ball: Ball, brick : Phaser.Sprite)
    {
        if ("vibrate" in window.navigator) { window.navigator.vibrate([100]); }
        ball.collide("brick");
        brick.kill()
        if (this._bricks.countLiving() <= 0) this.prepareRelaunchGame();
    }


   //===============================================================================================================//
   //enemy behaviour
   //===============================================================================================================//

    loadBricks() :void
    {

        this._bricks = this.game.add.group();
        this._bricks.enableBody = true;
        this._bricks.physicsBodyType = Phaser.Physics.ARCADE;

        let yPosition: number = 0 + this.game.world.height * 0.1;

        for (let rows: number = 0; rows < 4; rows++) {
            let xPosition: number = 0 + this.game.world.width * 0.1;
            for (let columns: number = 0; columns < 8; columns++) {
                this._brick = this._bricks.create(xPosition, yPosition, 'blue-brick');
                this._brick.body.bounce.set(1);
                this._brick.body.immovable = true;
                xPosition = this._brick.x + this.game.world.width * 0.1;
            }
            yPosition = this._brick.y + this.game.world.height * 0.1;
        }
    }

    //===============================================================================================================//
    //Loading resources...
    //===============================================================================================================//

    loadText(): void
    {
        //text
        this._scoreText = this._game.BreakoutWorld.styleManager.positionTextTopLeft(String(this._game.PlayerList.MyPlayerList[0].score), null);
        this._livesText = this._game.BreakoutWorld.styleManager.positionTextBottomLeft(String(this._game.PlayerList.MyPlayerList[0].lives) + " X", null);
        this._multiplyerText = this._game.BreakoutWorld.styleManager.positionTextBottomRight("X " + String(this._scoreMultiplyer), null);
        this._levelNumberText = this._game.BreakoutWorld.styleManager.positionTextCenter(
            "Stage: " + String(this._game.PlayerList.MyPlayerList[0].level), null);
        this._levelNumberText.fontSize = "500%";

    }

    loadButtons(): void
    {
        //buttons
        //pause
        this._pauseButton = this._game.AddElement.buttonFactory.createProduct("pause", new ButtonParameters(this.game,
            this.game.world.width - 0.1 * this.game.world.width, 0 + 0.1 * this.game.world.height, 'pause-button', null, null, 1, 0, 1, 0));

        this._pauseButton.anchor.set(1, 0);
        this._game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._pauseButton], 0.05, 0.05);
        this._pauseButton.inputEnabled = true;
        this._pauseButton.events.onInputUp.add(function () { this.game.paused = true; }, this);
        this.game.input.onDown.add(function () { if (this.game.paused) this.game.paused = false }, this);
    }

    loadSprites(): void
    {
        //sprites
        this._livesIcon = this._game.AddElement.ballFactory.createProduct("normal", new BallParameters(this.game, this._livesText.x + this._livesText.width,
            this._livesText.y, 'paddle', 0, null, 0));

        this._game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._livesIcon], 0.08, 0.08);

        this._livesIcon.anchor.set(0, 0.6);
        this._livesIcon.enableAnimations();
        this._livesIcon.animations.add('hurt', [3, 4, 3, 4, 3, 4, 0], 2);
        this._livesIcon.alpha = 0.35;

        this._paddle = this.game.add.sprite(this._paddlePositionX, this._paddlePositionY, 'paddle', 0);
        this._game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._paddle], 0.1, 0.1);
        this._paddle.anchor.set(0.5, 0.5);
        this.game.physics.enable(this._paddle, Phaser.Physics.ARCADE);
        this._paddle.body.immovable = true;
        this._paddle.body.setSize(this._paddle.body.width * 0.8, this._paddle.body.height/4);

        this._ballPositionY = this._paddle.y - this._paddle.height * 0.1;

        this._ball = this._game.AddElement.ballFactory.createProduct("normal", new BallParameters(this.game, this._ballPositionX,
            this._ballPositionY, 'ball', 0, new MediumMovement(-100, -350), 1));
        this._game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._ball], 0.08, 0.08);
        this._ball.anchor.set(0.5, 0.5);

        this.loadBricks();
    }

}
