import { Breakout } from '../../Breakout';

//Params
import { SpriteParameterList } from '../Objects/Factory/SpriteParameterList';

//Objects
import { Ball } from '../Objects/Ball/Ball';
import { Paddle } from '../Objects/Paddle/Paddle';

//Groups
import { BreakoutGroup } from '../Objects/Group/BreakoutGroup';

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
    private _restartButton: Phaser.Button;
   
    //Objects
    private _ball: Ball;
    private _paddle: Paddle;
    private _brickInfo: Object;
    private _brick: Phaser.Sprite;
    private _boss: Phaser.Sprite;
    private _livesIcon: Ball;
    private _bricks: Phaser.Group;
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
    private _bossText: Phaser.Text;

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
        

    }

    create(): void {

        //music
        this._music = this.add.audio(this._game.BreakoutWorld.stageManager.getLevelMusic(), 1, true, true);
        this._music.play();

        this.game.time.events.add(1000, this._game.BreakoutWorld.styleManager.fadeText, this, this._levelNumberText);
        this.game.time.events.add(1000, this.displayPlayButton, this);

    }

    update(): void {
        
        this.game.physics.arcade.collide(this._ball, this._paddle, this.ballCollidePaddle,null, this);
        this.game.physics.arcade.collide(this._ball, this._game.BreakoutWorld.stageManager.EnemyManager.BrickGroup, this.ballCollideBrick, null, this);
        this.game.physics.arcade.collide(this._ball, this._boss, this.ballCollideBoss, null, this);
        this.game.physics.arcade.collide(this._paddle, this._projectiles, this.projectileCollidesPaddle, null, this);
        this.game.physics.arcade.collide(this._paddle, this._drops, this.paddleGetsDrop, null, this);


        if (this._currentlyPlaying) {
            this._paddle.PaddleMovement.move();       
            if (this.game.time.now > this._firingTimer) {
           //     this.enemyFires();
            }

        }

    }


    //===============================================================================================================//
    //Start game
    //===============================================================================================================//

    displayPlayButton(): void {
        //start
        this._playButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'play-button', this.startGame, this, 1, 0, 1, 0);
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

        this._game.PlayerList.MyPlayerList[0].level += 1;
        this._game.BreakoutWorld.stageManager.CurrentStage += 1;

        if (this._game.BreakoutWorld.stageManager.CurrentStage > this._game.BreakoutConfig.NumberOfStages) {
            this._game.BreakoutWorld.stageManager.CurrentStage = 1;
            this.game.state.start("FetusBoss", true, false, this._game);
        }
        else this.game.state.start("Game", true, false, this._game); 
    }

   //===============================================================================================================//
   //Enemy behaviour
   //===============================================================================================================//

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


    ballCollideBrick(ball: Phaser.Sprite, brick: Phaser.Sprite): void // TODO: Add collidable
    {
        this._ball.BallCollision.collide("brick");

        brick.physicsEnabled = false;
       // ball.collide("brick");

        this.updateScore(10);
        this._ballTouchedPaddle = false;

        let rndNum: number = this.game.rnd.integerInRange(0, 3);
        if (rndNum === 1) {
            let drop: Phaser.Sprite = this._drops.getFirstExists(false);
            drop.body.setSize(drop.body.width * 0.35, drop.body.height * 0.35);
            this._game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [drop], 0.07, 0.07);
            drop.reset(brick.body.x, brick.body.y);
            drop.visible = true;
            this.game.physics.enable(drop, Phaser.Physics.ARCADE);
            drop.body.gravity.y = 100;
         
        }
        brick.kill();

       // if (this._bricks.countLiving() <= 0) {
         //   this.introduceBoss();
       // }
    }

    ballCollideBoss(ball: Phaser.Sprite, boss: Phaser.Sprite): void {
        boss.physicsEnabled = false;
        //ball.collide("boss");
        boss.kill();
        this.prepareRelaunchGame();        
    }

    projectileCollidesPaddle(paddle : Phaser.Sprite, bullet: Phaser.Sprite) : void
    {
        bullet.kill();
        this._paddle.PaddleCollision.collide("projectile");
    }

    paddleGetsDrop(paddle: Phaser.Sprite, drop: Phaser.Sprite): void
    {
        drop.kill();
        this._paddle.Attack.attack();
       
    }




   //===============================================================================================================//
   //Group behaviour
   //===============================================================================================================//


    loadProjectiles(): void
    {
        // The enemy's bullets
        this._projectiles = this.game.add.group();
        this.game.add.group();
        this._projectiles.enableBody = true;
        this._projectiles.physicsBodyType = Phaser.Physics.ARCADE;
        this._projectiles.createMultiple(30, 'bullet-enemy', 0);
        this._projectiles.visible = true;
        this._projectiles.setAll('anchor.x', 0.5);
        this._projectiles.setAll('anchor.y', 1);
        this._projectiles.setAll('outOfBoundsKill', true);
        this._projectiles.setAll('checkWorldBounds', true);
    }

    loadDrops() : void {
        // Player drops
        this._drops = this.game.add.group();
        this._drops.enableBody = true;
        this._drops.physicsBodyType = Phaser.Physics.ARCADE;
        this._drops.createMultiple(30, 'ammo-box', 0);
        this._drops.visible = true;
        this._drops.setAll('anchor.x', 0.5);
        this._drops.setAll('anchor.y', 1);
        this._drops.setAll('outOfBoundsKill', true);
        this._drops.setAll('checkWorldBounds', true);
    }


    enemyFires(): void
    {
        this._projectile = this._projectiles.getFirstExists(false);
     
        this._projectile.body.setSize(this._projectile.body.width * 0.35, this._projectile.body.height * 0.35);
        this._game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._projectile], 0.08, 0.08);

        let livingEnemies: Array<Phaser.Sprite> = new Array<Phaser.Sprite>();

        this._bricks.forEachAlive(function (projectile) {
            livingEnemies.push(projectile);
        }, this, this._projectile);

        if (livingEnemies.length > 0) {
            let random : number = this.game.rnd.integerInRange(0, livingEnemies.length - 1);

            // randomly select one of them
            let shooter :Phaser.Sprite = livingEnemies[random];
            // And fire the bullet from this enemy
            this._projectile.reset(shooter.body.x, shooter.body.y);
            this._projectile.visible = true;
            this.game.physics.arcade.moveToObject(this._projectile , this._paddle, 200);
            this._firingTimer = this.game.time.now + 5000;
        }

    }

    introduceBoss(): void
    {
        //boss.Speak();
        //this.game.sound.play(this._game.BreakoutWorld.stageManager.BossSoundList[this._levelNumber - 1], 1, false);
        let moveDown : Phaser.Tween = this.game.add.tween(this._boss).to({ y: 0 + 0.25 * this.game.world.height }, 3000, Phaser.Easing.Linear.None);
        let moveBackAndForth: Phaser.Tween = this.game.add.tween(this._boss).to({ x: this.game.width * 0.9 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        moveDown.chain(moveBackAndForth);
        moveDown.start();

        this._bossText = this._game.BreakoutWorld.styleManager.positionTextCenter("Ho Ho Ho! Another Challenger?");
        this._bossText.addColor("#19cb65", 0);
        this._bossText.fontSize = "300%";
        this._game.BreakoutWorld.styleManager.fadeText(this._bossText, 3000);
        this._boss.animations.add("float", [0,0,0,, 1, 1, ,1], 1, true).play();


    }


    //===============================================================================================================//
    //update UI
    //===============================================================================================================//

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
        this._pauseButton = this.game.add.button(this.game.world.width - 0.1 * this.game.world.width, 0 + 0.1 * this.game.world.height, 'pause-button', null, null, 1, 0, 1, );
        this._pauseButton.anchor.set(1, 0);
        this._game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._pauseButton], 0.05, 0.05);
        this._pauseButton.inputEnabled = true;
        this._pauseButton.events.onInputUp.add(function () { this.game.paused = true; }, this);
        this.game.input.onDown.add(function () { if (this.game.paused) this.game.paused = false }, this);
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
        let randomBoss: string = this._game.BreakoutWorld.stageManager.getLevelBoss();
        this._boss = this.game.add.sprite(0 + this.game.world.width * 0.1, 0 - 0.5 * this.game.world.height,
            randomBoss, 0);
        this._boss.anchor.set(0.5, 0.5);
        this._game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._boss], 0.15, 0.15);
        this.game.physics.enable(this._boss, Phaser.Physics.ARCADE);
        this._boss.body.immovable = true;
        this._boss.body.bounce.set(1);

        //projectiles
        this.loadProjectiles();

        //drops
        this.loadDrops();
    }

}
