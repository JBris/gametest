import { Breakout } from '../../Breakout';

//Params
import { ButtonParameterList } from '../Objects/Factory/ButtonParameterList';

export class LeaderBoard extends Phaser.State
{
    /*=============================
    **Fields**
    =============================*/
    private _game: Breakout;
    private _background: Phaser.Image;
    private _music: Phaser.Sound;
    private _leaderBoard: Phaser.Text;
    private _homeButton: Phaser.Button;

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

    preload(): void 
    {
        this._game.BreakoutWorld.stageManager.CurrentStage = 0;
        this._game.BreakoutWorld.scalingManager.scaleGameScreen();

        //background
        this._background = this.add.image(0, 0, this._game.BreakoutWorld.stageManager.TitleScreenBackground);
        this._game.BreakoutWorld.scalingManager.scaleBreakoutBackground(this._background);
    }

    create(): void 
    {
        //music
        this._music = this.add.audio(this._game.BreakoutWorld.stageManager.TitleScreenMusic, 1, true);
        this._music.fadeIn(6000);

        //buttons
        let buttonParameterList: ButtonParameterList = new ButtonParameterList(this.game,
            this.game.world.width - 0.1 * this.game.world.width, this.game.world.height - 0.1 * this.game.world.height,
            'home-button', this.launchMainMenu, this, 1, 0, 1, 0);

        this._homeButton = this._game.BreakoutWorld.factoryManager.CreateButton.createProduct("home", buttonParameterList);
        this._homeButton.anchor.set(1, 1);
        this._game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._homeButton], 0.1, 0.1);

        //text
        this._leaderBoard = this._game.BreakoutWorld.styleManager.positionTextTopLeft(this._game.PlayerList.displayPlayers(), null);
    }

    launchMainMenu(): void {
        this._background.destroy();
        this._music.destroy();
        this.game.state.start("MainMenu", true, false, this._game);
    }
}