import { Breakout } from '../../Breakout';

import { Player } from '../Objects/Player/Player';
import { Ball } from '../Objects/Ball/Ball';
import { BallFactory } from '../Objects/Ball/BallFactory';
import { StartButton } from '../Objects/Button/StartButton';
import { BreakoutButton } from '../Objects/Button/BreakoutButton';

export class Game extends Phaser.State {

    /*=============================
    **Fields**
    =============================*/
    private _game: Breakout;

    private _playButton: StartButton;
    private _level: number;
    private _player: Player;
    private _background: Phaser.Image;
    private _music : Phaser.Sound;
    private _ball: Ball;
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

    constructor(game: Breakout, player: Player, levelCount: number) {
        super();
        this._game = game;
        this._level = levelCount;
        this._player = player;
    }

    /*=============================
    **Properties**
    =============================*/

    preload()
    {
        this._background = this.game.add.image(0, 0, '1st-sky');
        this._game.GameEngine.scalingManager.scaleBreakoutBackground(this._background);
        this.game.camera.resetFX();
        this.scale.onOrientationChange.add(this._game.GameEngine.scalingManager.scaleGameScreen, this);
        this.scale.onOrientationChange.add(this._game.GameEngine.scalingManager.scaleBreakoutBackground, this);

    }

    create()
    {




        
    }




    /*=============================
    **Methods**
    =============================*/

    
}
