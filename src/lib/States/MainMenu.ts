import { Breakout } from '../../Breakout';
import { Player } from '../Objects/Player/Player';
import { BreakoutPlayer } from '../Objects/Player/BreakoutPlayer'
import { BreakoutLeaderBoard } from '../Objects/Player/BreakoutLeaderBoard';
import { BreakoutButton } from '../Objects/Button/BreakoutButton';
import { StartButton } from '../Objects/Button/StartButton';
import { OffButton } from '../Objects/Button/OffButton';
import { OptionsButton } from '../Objects/Button/OptionsButton';
import { BreakoutLogo } from '../Objects/Logo/BreakoutLogo';
import { Title } from '../Objects/Logo/Title';

export class MainMenu extends Phaser.State
{
    /*=============================
    **Fields**
    =============================*/
    private _game: Breakout;
    private _background: Phaser.Image;
    private _playButton: StartButton;
    private _offButton: OffButton;
    private _optionsButton: OptionsButton;
    private _music: Phaser.Sound;
    private _title: BreakoutLogo;
    private _player: Player;
    /*=============================
    **Constructors
    =============================*/

    constructor(game: Breakout, player?: Player) {
        super();
        this._game = game;
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

    preload()
    {
        this._game.GameEngine.scalingManager.scaleGameScreen();
        //background
        this._background = this.game.add.image(0, 0, '1st-sky');
        this._game.GameEngine.scalingManager.scaleBreakoutBackground(this._background);

        //logo
        this._title = new Title(this.game, this.game.world.centerX, this.game.world.centerY, 'title', 0, 0.25, 0.25);
        this.game.add.existing(this._title);

    }

    create()
    {
        //music
        this._music = this.add.audio('opening_glorious_morning',1,true);
        this._music.fadeIn(6000);

        //buttons
        this._playButton = new StartButton (this.game,this._title.x + (this.game.world.width * 0.3), this._title.y, 'play-button', 0.1,0.1,this.prepareBeginGame, this,1,0,1,0);
        this._playButton.scaleGameElement(this.game);
        this.game.add.existing(this._playButton);

        this._offButton = new OffButton(this.game, this._title.x + (this.game.world.width * 0.3), this._playButton.y + (2 * this._playButton.height), 'off-button', 0.1, 0.1, this.endGame, this, 1, 0, 1, 0);
        this._offButton.scaleGameElement(this.game);
        this.game.add.existing(this._offButton);

        this._optionsButton = new OptionsButton(this.game, this._title.x - (this.game.world.width * 0.3), this._title.y, 'options-button', 0.1, 0.1, this.options, this, 1, 0, 1, 0);
        this._optionsButton.scaleGameElement(this.game);
        this.game.add.existing(this._optionsButton);

    }

    prepareBeginGame()
    {
        this._music.fadeOut(3000);
        this.game.camera.fade(0x000000, 2000);
        this.camera.onFadeComplete.add(this.createPlayer, this, null, this._game);
    }

    createPlayer(game : Breakout)
    {

        let name = "";
        while (name === "")
        {
            name = prompt("Player, please enter your name:");
        }
        this._player = new BreakoutPlayer(name, this._game.BreakoutConfig.PlayerNumberOfLives, 0);
        this.beginGame(this._player, this._game);
    }

    beginGame(player: Player, game: Breakout)
    {
        this._music.stop();
        this.game.state.start("Game",true, false, this._game, player,1);  
    }

    options() {
        //TODO
    }

    endGame() {
        this.game.destroy();
    }

}