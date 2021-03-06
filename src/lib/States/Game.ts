import { Breakout } from '../../Breakout';

//Params
import { SpriteParameterList } from '../Objects/Factory/SpriteParameterList';
import { ButtonParameterList } from '../Objects/Factory/ButtonParameterList';

//Objects
import { Ball } from '../Objects/Ball/Ball';
import { Paddle } from '../Objects/Paddle/Paddle';
import { Brick } from '../Objects/Enemy/Brick/Brick';
import { BrickProjectile } from '../Objects/Enemy/Brick/Projectile/BrickProjectile';
import { Drop } from '../Objects/Drop/Drop';

//Groups
import { BreakoutGroup } from '../Objects/Group/BreakoutGroup';

//Behaviours
import { iActsAsGroup } from '../Objects/Behaviour/iActsAsGroup';
import { iCollidable } from '../Objects/Behaviour/iCollidable';

export class Game extends Phaser.State {

    /*=============================
    **Fields**
    =============================*/
    //Game
    private _game: Breakout;
    private _background: Phaser.Image;
    private _music: Phaser.Sound;
    private _currentlyPlaying: boolean;
    private _ballTouchedPaddle : boolean;

    //Numbers

    private _ballPositionX: number;
    private _ballPositionY: number;
    private _multiplierTextWidth: number;
    private _multiplierTextHeight: number;
    private _levelNumber: number;
    private _firingTimer = 0;

    //Buttons
    private _playButton: Phaser.Button;
    private _pauseButton: Phaser.Button;
    private _homeButton: Phaser.Button;
   
    //Objects
    private _ball: Ball;
    private _paddle: Paddle;
    private _brickInfo: Object;
    private _brick: Brick;
    private _boss: Phaser.Sprite;
    private _livesIcon: Ball;
    private _bricks: iActsAsGroup;
    private _brickMovement: Phaser.Tween;
    private _projectiles: Phaser.Group;
    private _projectile: Phaser.Sprite;
    private _drops: Phaser.Group;
    private _playerBullets: BreakoutGroup;

    //Text
    private _levelNumberText: Phaser.Text;
    private _scoreText: Phaser.Text;
    private _livesText: Phaser.Text;
    private _multiplierText: Phaser.Text;
    private _commentText: Phaser.Text;

    //strings
    private _dropType: string;

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
        this._ballTouchedPaddle = true;
        this._levelNumber = this._game.BreakoutWorld.stageManager.CurrentStage;

        //visuals
        this._background = this.game.add.image(0, 0, this._game.BreakoutWorld.stageManager.getLevelBackground());
        this._game.BreakoutWorld.scalingManager.scaleBreakoutBackground(this._background);
        this.game.camera.resetFX();
        this.camera.onFadeComplete.forget();


        this._ballPositionX = this.game.world.centerX;
        //can't set ball position y just yet

        //loading resources
        this.loadButtons();
        this.loadText();
        this.loadSprites();

        this._game.BreakoutWorld.stageManager.EnemyManager.randomiseEnemySeed();
        this._game.BreakoutWorld.stageManager.EnemyManager.createEnemyGroupWithSeed();
        this._bricks = this._game.BreakoutWorld.stageManager.EnemyManager.BrickGroup;
        this._bricks.moveAsGroup();      
    }

    create(): void {

        //music
        this._music = this.add.audio(this._game.BreakoutWorld.stageManager.getLevelMusic(), 1, true, true);
        this._music.play();

        this.game.time.events.add(1000, this._game.BreakoutWorld.styleManager.fadeText, this, this._levelNumberText);
        this.game.time.events.add(1000, this.displayPlayButton, this);

    }

    update(): void {
        let brickAmmunition: Phaser.Group;

        //==============================================================//
        //Ball
        //==============================================================//
        //Ball-to-paddle
        this.game.physics.arcade.collide(this._ball, this._paddle, this.ballCollidePaddle, null, this);

        //Ball-to-brick
        this.game.physics.arcade.collide(this._ball, this._game.BreakoutWorld.stageManager.EnemyManager.BrickGroup, this.ballCollideBrick, null, this);

        //Ball-to-projectile
        brickAmmunition = this._game.BreakoutWorld.stageManager.EnemyManager.BrickGroup.getChildGroup("normalProjectile");
        this.game.physics.arcade.overlap(this._ball, brickAmmunition, this.ballCollideProjectile, null, this);

        brickAmmunition = this._game.BreakoutWorld.stageManager.EnemyManager.BrickGroup.getChildGroup("fastProjectile");
        this.game.physics.arcade.overlap(this._ball, brickAmmunition, this.ballCollideProjectile, null, this);
       
        //==============================================================//
        //Projectile
        //==============================================================//

        //Projectile-to-brick
        this.game.physics.arcade.collide(this._paddle.AmmoPool, this._game.BreakoutWorld.stageManager.EnemyManager.BrickGroup, this.projectileToBrick, null, this);

        //Projectile-to-projectile
        brickAmmunition = this._game.BreakoutWorld.stageManager.EnemyManager.BrickGroup.getChildGroup("normalProjectile");
        this.game.physics.arcade.collide(this._paddle.AmmoPool, brickAmmunition, this.projectileToProjectile, null, this);
        brickAmmunition = this._game.BreakoutWorld.stageManager.EnemyManager.BrickGroup.getChildGroup("fastProjectile");
        this.game.physics.arcade.collide(this._paddle.AmmoPool, brickAmmunition, this.projectileToProjectile, null, this);

        this.game.physics.arcade.collide(this._ball, this._boss, this.ballCollideBoss, null, this);

        //==============================================================//
        //Paddle
        //==============================================================//
        //Paddle-to-projectile
        brickAmmunition = this._game.BreakoutWorld.stageManager.EnemyManager.BrickGroup.getChildGroup("normalProjectile");
        this.game.physics.arcade.collide(this._paddle, brickAmmunition, this.projectileCollidesPaddle, null, this);

        brickAmmunition = this._game.BreakoutWorld.stageManager.EnemyManager.BrickGroup.getChildGroup("fastProjectile");
        this.game.physics.arcade.collide(this._paddle, brickAmmunition, this.projectileCollidesPaddle, null, this);

        //==============================================================//
        //Drops
        //==============================================================//
        this._dropType = "lemonDrop";
        let drops: Phaser.Group = this._game.BreakoutWorld.stageManager.EnemyManager.BrickGroup.getChildGroup(this._dropType);
        this.game.physics.arcade.collide(this._paddle, drops, this.paddleGetsDrop, null, this);
        this._dropType = "ammoBoxDrop";
        drops = this._game.BreakoutWorld.stageManager.EnemyManager.BrickGroup.getChildGroup(this._dropType);
        this.game.physics.arcade.collide(this._paddle, drops, this.paddleGetsDrop, null, this);

        //Enemy attacks
        if (this._currentlyPlaying) {
            this._paddle.PaddleMovement.move();       
            if (this.game.time.now > this._firingTimer) {
                this._bricks.attackAsGroup(this._paddle);
                this._firingTimer = this.game.time.now + 3500;
            }

        }

    }


    //===============================================================================================================//
    //Start game
    //===============================================================================================================//

    displayPlayButton(): void {
        //start
        let parameterList: ButtonParameterList = new ButtonParameterList(this.game,
            this.game.world.centerX, this.game.world.centerY, 'play-button', this.startGame, this, 1, 0, 1, 0);

        this._playButton = this._game.BreakoutWorld.factoryManager.CreateButton.createProduct("play", parameterList);
        this._game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._playButton], 0, 0);
        this._game.BreakoutWorld.scalingManager.scaleGameElementsOverTime(this.game, [this._playButton], 0.15, 0.15, 500, false);
        this._playButton.anchor.set(0.5, 0.5);
    }

    startGame(): void {
        this._game.BreakoutWorld.scalingManager.scaleGameElementsOverTime(this.game, [this._playButton], 0, 0, 500, true);
        this._ball.BallMovement.move();
        this.game.physics.arcade.checkCollision.down = false;
        this._ball.events.onOutOfBounds.add(this.ballLeaveScreen, this);
        this.beginPlaying();
        this._playButton.destroy();
    }

    beginPlaying() : void
    { this._currentlyPlaying = true; }

    //===============================================================================================================//
    //Lose game
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
        this._ball.body.velocity.set(0, 0);
        this._ball.reset(this._ballPositionX, this._ballPositionY);
        this._paddle.resetPaddle();
       
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
        this.game.tweens.removeAll();
        this._bricks.clearGroup();
        let laugh: Phaser.Sound = this.sound.add('evil-laugh-short', 1, false);
        laugh.onStop.addOnce(this.launchMainMenu, this);
        laugh.play();
    }

    launchMainMenu(): void {
        this.game.state.start("MainMenu", true, false, this._game);
    }

    //===============================================================================================================//
    //Game loop
    //===============================================================================================================//

    prepareRelaunchGame(): void {
        this.game.physics.arcade.checkCollision.down = true;
        this._ball.disableBall();
        this._music.fadeOut(4000);
        this.camera.fade(0x000000, 1000);
        this.camera.onFadeComplete.addOnce(this.relaunchGame, this);
    }

    relaunchGame(): void {
        this._background.destroy();
        this._music.destroy();
        this._bricks.clearGroup();
        this._game.PlayerList.MyPlayerList[0].level += 1;
        this._game.BreakoutWorld.stageManager.CurrentStage += 1;

        if (this._game.BreakoutWorld.stageManager.CurrentStage > this._game.BreakoutConfig.NumberOfStages) {
            this._game.BreakoutWorld.stageManager.CurrentStage = 1;
            this.game.state.start("FetusBoss", true, false, this._game);
        }
        else this.game.state.start("Game", true, false, this._game); 
    }

   //===============================================================================================================//
   //Collisions
   //===============================================================================================================//

    ballCollidePaddle(): void {

        this._game.BreakoutWorld.scoreCalculator.ScoreMultiplier = 1;
        this._multiplierText.setText("X " + String(this._game.BreakoutWorld.scoreCalculator.ScoreMultiplier));
        this._ballTouchedPaddle = true;

        if (this._currentlyPlaying)
        {
            this._ball.BallCollision.collide("paddle",this._paddle.PaddleCollision,this._paddle.x);
            this._paddle.PaddleCollision.collide("ball");
        }
    }


    ballCollideBrick(ball: Ball, brick: Brick): void // 
    {
        this._ball.BallCollision.collide("brick", brick.BrickCollision);
        brick.BrickCollision.collide('ball', ball.BallCollision, 0, this._paddle);

        this.updateScore(10);
        this._ballTouchedPaddle = false;
    }

    ballCollideProjectile(ball: Phaser.Sprite, projectile: BrickProjectile): void
    {
        projectile.collide("ball");
    }

    projectileToProjectile(leadingProjectile: iCollidable, collidedProjectile: iCollidable): void
    {
        leadingProjectile.collide("projectile");
        collidedProjectile.collide("projectile");
    }

    projectileToBrick(projectile: iCollidable, brick: Brick): void
    {
        projectile.collide("brick", brick.BrickCollision);
        brick.BrickCollision.collide("projectile");
    }

    ballCollideBoss(ball: Phaser.Sprite, boss: Phaser.Sprite): void {
        boss.physicsEnabled = false;
        //ball.collide("boss");
        boss.kill();
        this.prepareRelaunchGame();        
    }

    projectileCollidesPaddle(paddle: Phaser.Sprite, bullet: BrickProjectile) : void
    {
        bullet.collide("paddle");
        this._paddle.PaddleCollision.collide("projectile");
    }

    paddleGetsDrop(paddle: Paddle, drop: Drop): void
    {
        drop.collide("paddle");
        if (this._dropType === "ammoBoxDrop") drop.BonusValue.giveBonus(paddle.Attack);
        if (this._dropType === "lemonDrop") {
            let addedScore: number = this._game.BreakoutWorld.scoreCalculator.calculatePoints(
                this._ballTouchedPaddle, drop.PointValue);
            drop.BonusValue.giveBonus(this._game.PlayerList.MyPlayerList[0],addedScore);
        }
    }

    //===============================================================================================================//
    //UI
    //===============================================================================================================//

    pauseGame(): void
    {
        //start
        let parameterList: ButtonParameterList = new ButtonParameterList(this.game,
            this.game.world.width - 0.1 * this.game.world.width, this._pauseButton.y + 0.2 * this.game.height,
            'home-button', this.setUpGameOver, this, 1, 0, 1, 0);

        this._homeButton = this._game.BreakoutWorld.factoryManager.CreateButton.createProduct("home", parameterList);
        this._game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._homeButton],0.05, 0.05);
        this._game.BreakoutWorld.scalingManager.scaleGameElementsOverTime(this.game, [this._homeButton], 0.05, 0.05, 50, false);
        this._homeButton.anchor.set(1, 0);
        this.game.time.events.add(100, function () { this.game.paused = true; }, this);
    }

    unpauseGame(event : any): void
    {
        if (this.game.paused) {
            let xLowerBound: number = this._homeButton.centerX - this._homeButton.width / 2;
            let xUpperBound: number = this._homeButton.centerX + this._homeButton.width / 2;
            let yLowerBound: number = this._homeButton.centerY - this._homeButton.height / 2;
            let yUpperBound: number = this._homeButton.centerY + this._homeButton.height / 2;

            this._homeButton.destroy();
            this.game.paused = false;

            if (event.x > xLowerBound && event.x < xUpperBound && event.y > yLowerBound && event.y < yUpperBound)
                this.setUpGameOver();            
        }
    }

    updateScore(baseScore : number)
    {
        //score
        let addedScore: number = this._game.BreakoutWorld.scoreCalculator.calculatePoints(this._ballTouchedPaddle, baseScore);
        this._game.PlayerList.MyPlayerList[0].score += addedScore;

        //new lives
        let lifeCheck: boolean = this._game.PlayerList.MyPlayerList[0].checkLife(addedScore);
        if (lifeCheck)
        {
            this._livesText.setText(String(this._game.PlayerList.MyPlayerList[0].lives) + "X");
            this._game.BreakoutWorld.scalingManager.expandAndShrinkElement(this._livesText, this._livesText.width * 1.8,
                this._livesText.height * 1.8, this._livesText.width, this._livesText.height);
        } 


        this._scoreText.setText(String(this._game.PlayerList.MyPlayerList[0].score));

        //Multiplier
        this._game.BreakoutWorld.scoreCalculator.ScoreMultiplier++;

        this._multiplierText.setText("X " + String(this._game.BreakoutWorld.scoreCalculator.ScoreMultiplier));

        this._game.BreakoutWorld.scalingManager.expandAndShrinkElement(this._multiplierText, this._multiplierTextWidth * 1.8,
            this._multiplierTextHeight * 1.8, this._multiplierTextWidth, this._multiplierTextHeight);

        //Multiplier comments - Keep it in if you want smaller multipliers...
        this.multiplierComments();
    }

    multiplierComments()
    {
        let multiplierComment: string = this._game.BreakoutWorld.scoreCalculator.makeMultiplierComment();
        if (multiplierComment !== "") {
            this._commentText = this._game.BreakoutWorld.styleManager.positionTextCenter(multiplierComment);
            this._commentText.addColor("#F20000", 0);
            this._commentText.fontSize = "400%";
            this._commentText.anchor.set(0.5, 0.5);
            this._game.BreakoutWorld.styleManager.fadeText(this._commentText, 1000);
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
        this._multiplierText = this._game.BreakoutWorld.styleManager.positionTextBottomRight(
            "X " + String(this._game.BreakoutWorld.scoreCalculator.ScoreMultiplier), null);
        this._multiplierTextWidth = this._multiplierText.width;
        this._multiplierTextHeight = this._multiplierText.height;
        this._levelNumberText = this._game.BreakoutWorld.styleManager.positionTextCenter(
            "Stage: " + String(this._game.PlayerList.MyPlayerList[0].level), null);
        this._levelNumberText.fontSize = "500%";

    }

    loadButtons(): void
    {
        //buttons
        //pause
        let parameterList: ButtonParameterList = new ButtonParameterList(this.game,
            this.game.world.width - 0.1 * this.game.world.width, 0 + 0.1 * this.game.world.height, 'pause-button', null, null, 1, 0, 1);

        this._pauseButton = this._game.BreakoutWorld.factoryManager.CreateButton.createProduct("pause",parameterList);
        this._pauseButton.anchor.set(1, 0);
        this._game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._pauseButton], 0.05, 0.05);
        this._pauseButton.inputEnabled = true;
        this._pauseButton.events.onInputUp.add(this.pauseGame, this);
        this.game.input.onDown.add(this.unpauseGame, this, 0, self);
    }

    loadSprites(): void
    {

        let parameters : SpriteParameterList = new SpriteParameterList(
            this.game, this._livesText.x + this._livesText.width * 1.5,
            this._livesText.y, 'ball', 0);

        //sprites
        //lives icon
        this._livesIcon = this._game.BreakoutWorld.factoryManager.CreateBall.createProduct("normal", parameters);
        this._livesIcon.anchor.set(0, 0.7);
        this._livesIcon.alpha = 0.35;

        //paddle
        parameters.setParameters(this.game.world.centerX, this.game.world.height - this.game.world.height * 0.1, 'paddle', 0);
        this._paddle = this._game.BreakoutWorld.factoryManager.CreatePaddle.createProduct("normal", parameters);
        this._game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._paddle], 0.1, 0.1);


        //ball
        this._ballPositionY = this._paddle.y - this._paddle.height * 0.1;
        parameters.setParameters(this._ballPositionX, this._ballPositionY, 'ball', 0);
        this._ball = this._game.BreakoutWorld.factoryManager.CreateBall.createProduct("normal", parameters);
        this._game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._ball], 0.08, 0.08);

        //boss
        this._boss = this._game.BreakoutWorld.stageManager.EnemyManager.spawnBoss();
    }

}
