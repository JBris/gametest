import { Breakout } from '../../Breakout';
import { BreakoutPlayer } from '../Objects/Player/BreakoutPlayer'
import { BreakoutLogo } from '../Objects/Logo/BreakoutLogo';
import { Title } from '../Objects/Logo/Title';

//Params
import { ButtonParameterList } from '../Objects/Factory/ButtonParameterList';

export class Options extends Phaser.State
{
    /*=============================
    **Fields**
    =============================*/
    private _game: Breakout;
    private _background: Phaser.Image;
    private _music: Phaser.Sound;

    private _homeButton: Phaser.Button;

    //strings
    private _fontSize = "250%";

    //Lives
    private _playerStartLives: Phaser.Text;
    private _playerDecrementLives: Phaser.Text;
    private _playerIncrementLives: Phaser.Text;

    //New Lives Ceiling
    private _playerNewLivesCeiling: Phaser.Text;
    private _playerDecrementNewLives: Phaser.Text;
    private _playerIncrementNewLives: Phaser.Text;

    //Refresh Screen
    private _refreshScreenText: Phaser.Text;

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
    preload() {
        this._game.BreakoutWorld.stageManager.CurrentStage = 0;
        this._game.BreakoutWorld.scalingManager.scaleGameScreen();

        //background
        this._background = this.add.image(0, 0, this._game.BreakoutWorld.stageManager.TitleScreenBackground);
        this._game.BreakoutWorld.scalingManager.scaleBreakoutBackground(this._background);
    }

    create() {
        //music
        this._music = this.add.audio(this._game.BreakoutWorld.stageManager.TitleScreenMusic, 1, true);
        this._music.play();

        //buttons
        let buttonParameterList: ButtonParameterList = new ButtonParameterList(this.game, this.game.world.width - 0.1 * this.game.world.width,
            this.game.world.height - 0.1 * this.game.world.height, 'home-button', this.launchMainMenu, this, 1, 0, 1, 0);
        this._homeButton = this._game.BreakoutWorld.factoryManager.CreateButton.createProduct("home", buttonParameterList);
        this._homeButton.anchor.set(1, 1);
        this._game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._homeButton], 0.1, 0.1);

        //text
        //Lives
        this.setLivesText();

        //NewLivesCeiling
        this.setNewLivesCeilingText();

        //refreshScreen
        this.setRefreshScreenText();

    }


    decreaseLives(): void 
    {
        this._game.BreakoutConfig.PlayerNumberOfLives -= 1;
        if (this._game.BreakoutConfig.PlayerNumberOfLives < 1) this._game.BreakoutConfig.PlayerNumberOfLives = 1;
        this._playerStartLives.setText("Lives " + this._game.BreakoutConfig.PlayerNumberOfLives, null);
    }

    increaseLives(): void 
    {
        this._game.BreakoutConfig.PlayerNumberOfLives += 1;
        if (this._game.BreakoutConfig.PlayerNumberOfLives > this._game.BreakoutConfig.PlayerMaximumSettableNumberOfLives)
            this._game.BreakoutConfig.PlayerNumberOfLives = this._game.BreakoutConfig.PlayerMaximumSettableNumberOfLives;
        this._playerStartLives.setText("Lives " + this._game.BreakoutConfig.PlayerNumberOfLives, null);
    }

    decreaseNewLivesCeiling(): void {
        this._game.BreakoutConfig.ValueForNewLife -= 100;
        if (this._game.BreakoutConfig.ValueForNewLife < 1000) this._game.BreakoutConfig.ValueForNewLife = 1000;
        this._playerNewLivesCeiling.setText("Points for Life " + this._game.BreakoutConfig.ValueForNewLife, null);
    }

    IncreaseNewLivesCeiling(): void {
        this._game.BreakoutConfig.ValueForNewLife += 100;
        if (this._game.BreakoutConfig.ValueForNewLife > 30000) this._game.BreakoutConfig.ValueForNewLife = 30000;
        this._playerNewLivesCeiling.setText("Points for Life " + this._game.BreakoutConfig.ValueForNewLife, null);
    }

    refreshScreen(): void {
        this._game.BreakoutWorld.scalingManager.scaleGameScreen();

    }

    launchMainMenu() :void {
        this._background.destroy();
        this._music.destroy();
        this.game.state.start("MainMenu", true, false, this._game);
    }

    //====================================================================================//
    //Loading Text
    //====================================================================================//

    setLivesText() : void
    {
        this._playerStartLives = this._game.BreakoutWorld.styleManager.positionTextTopLeft(
            "Lives " + this._game.BreakoutConfig.PlayerNumberOfLives, null);
        this._playerStartLives.fontSize = this._fontSize;
        this._playerStartLives.x = 0 + 0.2 * this.game.world.width;
        this._playerStartLives.y = 0 + 0.1 * this.game.world.height;

        this._playerDecrementLives = this._game.BreakoutWorld.styleManager.positionTextTopLeft(
            "<", null);
        this._playerDecrementLives.inputEnabled = true;
        this._playerDecrementLives.events.onInputUp.add(this.decreaseLives, this, null);
        this._playerDecrementLives.fontSize = this._fontSize;
        this._playerDecrementLives.x = this._playerStartLives.x - 0.5 * this._playerStartLives.width;
        this._playerDecrementLives.y = 0 + 0.1 * this.game.world.height;

        this._playerIncrementLives = this._game.BreakoutWorld.styleManager.positionTextTopLeft(
            ">", null);
        this._playerIncrementLives.inputEnabled = true;
        this._playerIncrementLives.fontSize = this._fontSize;
        this._playerIncrementLives.events.onInputUp.add(this.increaseLives, this, null);
        this._playerIncrementLives.x = this._playerStartLives.x + 1.5 * this._playerStartLives.width;
        this._playerIncrementLives.y = 0 + 0.1 * this.game.world.height;
    }

    setNewLivesCeilingText(): void
    {
        this._playerNewLivesCeiling = this._game.BreakoutWorld.styleManager.positionTextTopLeft(
            "Points for Life " + this._game.BreakoutConfig.ValueForNewLife, null);
        this._playerNewLivesCeiling.fontSize = this._fontSize;
        this._playerNewLivesCeiling.x = 0 + 0.2 * this.game.world.width;
        this._playerNewLivesCeiling.y = this._playerStartLives.y + 1.5 * this._playerStartLives.height;

        this._playerDecrementNewLives = this._game.BreakoutWorld.styleManager.positionTextTopLeft(
            "<", null);
        this._playerDecrementNewLives.inputEnabled = true;
        this._playerDecrementNewLives.fontSize = this._fontSize;
        this._playerDecrementNewLives.events.onInputUp.add(this.decreaseNewLivesCeiling, this, null);
        this._playerDecrementNewLives.x = this._playerNewLivesCeiling.x - 0.2 * this._playerNewLivesCeiling.width;
        this._playerDecrementNewLives.y = this._playerStartLives.y + 1.5 * this._playerStartLives.height;

        this._playerIncrementNewLives = this._game.BreakoutWorld.styleManager.positionTextTopLeft(
            ">", null);
        this._playerIncrementNewLives.inputEnabled = true;
        this._playerIncrementNewLives.fontSize = this._fontSize;
        this._playerIncrementNewLives.events.onInputUp.add(this.IncreaseNewLivesCeiling, this, null);
        this._playerIncrementNewLives.x = this._playerNewLivesCeiling.x + 1.2 * this._playerNewLivesCeiling.width;
        this._playerIncrementNewLives.y = this._playerStartLives.y + 1.5 * this._playerStartLives.height;
    }

    setRefreshScreenText(): void
    {
        this._refreshScreenText = this._game.BreakoutWorld.styleManager.positionTextTopLeft(
            "Refresh Screen", null);
        this._refreshScreenText.inputEnabled = true;
        this._refreshScreenText.fontSize = this._fontSize;
        this._refreshScreenText.events.onInputUp.add(this.refreshScreen, this, null);
        this._refreshScreenText.x = 0 + 0.2 * this.game.world.width;
        this._refreshScreenText.y = this._playerNewLivesCeiling.y + 1.5 * this._playerNewLivesCeiling.height;
    }

}