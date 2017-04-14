import { Player } from '../Objects/Player/Player';
import { Config } from '../../../config/Config';
import { BreakoutScalingManager } from '../Objects/ScalingBehaviour/BreakoutScalingManager';
import { Ball } from '../Objects/Ball/Ball';
import { BallFactory } from '../Objects/Ball/Factory/BallFactory';
import { iBallFactory } from '../Objects/Ball/Factory/iBallFactory';
import { StartButton } from '../Objects/Button/StartButton';
import { BreakoutButton } from '../Objects/Button/BreakoutButton';

export class Game extends Phaser.State {

    /*=============================
    **Fields**
    =============================*/
    private _playButton: StartButton;
    private _level: number;
    private _player: Player;
    private _config: Config;
    private _background: Phaser.Image;
    private _music : Phaser.Sound;
    private _scalingManager: BreakoutScalingManager;
    private _ball: Ball;
    private _ballFactory: iBallFactory;
    private _paddle: Phaser.Sprite;
    private _scoreText: Phaser.Text;
    private _livesText: Phaser.Text;
    private _lifeLostText: Phaser.Text;
    private _textStyle: Phaser.PhaserTextStyle = { font: '18px Arial', fill: '#0095DD' };
    private _startButton: BreakoutButton;
    private _brickInfo: Object;
    private _bricks :Phaser.Group;
    /*=============================
    **Constructors
    =============================*/

    constructor(player: Player, levelCount: number, config:Config) {
        super();
        this._level = levelCount;
        this._player = player;
        this._config = config;
    }

    /*=============================
    **Properties**
    =============================*/

    preload()
    {
        this._scalingManager = new BreakoutScalingManager(this.game, this.game.width, this.game.height);
        this._background = this.game.add.image(0, 0, '1st-sky');
        this._scalingManager.scaleBreakoutBackground(this._background);
        this.game.camera.resetFX();
        this.scale.onOrientationChange.add(this._scalingManager.scaleGameScreen, this);
        this.scale.onOrientationChange.add(this._scalingManager.scaleBreakoutBackground, this);

    }

    create()
    {




        
    }




    /*=============================
    **Methods**
    =============================*/

    
}
