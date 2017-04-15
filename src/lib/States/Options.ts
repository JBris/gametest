import { Breakout } from '../../Breakout';
import { BreakoutPlayer } from '../Objects/Player/BreakoutPlayer'
import { BreakoutButton } from '../Objects/Button/BreakoutButton';
import { BreakoutLogo } from '../Objects/Logo/BreakoutLogo';
import { Title } from '../Objects/Logo/Title';
import { ButtonParameters } from '../Objects/Button/ButtonParameters';

export class Options extends Phaser.State
{
    /*=============================
    **Fields**
    =============================*/
    private _game: Breakout;
    private _background: Phaser.Image;
    private _music: Phaser.Sound;

    private _backButton: BreakoutButton;

    //Orientation
    private _orientationText: Phaser.Text;
    private _portraitOption: Phaser.Text;
    private _landscapeOption: Phaser.Text;

    //Lives
    private _playerStartLives: Phaser.Text;
    private _playerDecrementLives: Phaser.Text;
    private _playerIncrementLives: Phaser.Text;

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
        let currentStage: number = this._game.BreakoutWorld.stageManager.CurrentStage;
        this._game.BreakoutWorld.scalingManager.scaleGameScreen();

        //background
        this._background = this.add.image(0, 0, this._game.BreakoutWorld.stageManager.BackgroundList[currentStage]);
        this._game.BreakoutWorld.scalingManager.scaleBreakoutBackground(this._background);
    }

    create() {
        let currentStage: number = this._game.BreakoutWorld.stageManager.CurrentStage;

        //music
        this._music = this.add.audio(this._game.BreakoutWorld.stageManager.MusicList[currentStage], 1, true);
        this._music.play();

        //buttons
        this._backButton = this._game.AddElement.buttonFactory.createProduct("start", new ButtonParameters(this.game,
            this.game.world.width - 0.1 * this.game.world.width, this.game.world.height - 0.1 * this.game.world.height,
            'back-button', this.launchMainMenu, this, 1, 0, 1, 0));

        this._backButton.anchor.set(1, 1);
        this._game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._backButton], 0.1, 0.1);

        //text
        //Lives
        this.setLivesText();

        //Orientation
        this.setOrientationText();
    }

    setOrientationLandscape(): void {
        //
    }

    setOrientationPortrait(orientation: string): void {
        //
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
        this._playerStartLives.x = 0 + 0.2 * this.game.world.width;
        this._playerStartLives.y = 0 + 0.1 * this.game.world.height;

        this._playerDecrementLives = this._game.BreakoutWorld.styleManager.positionTextTopLeft(
            "<", null);
        this._playerDecrementLives.inputEnabled = true;
        this._playerDecrementLives.events.onInputUp.add(this.decreaseLives, this, null);
        this._playerDecrementLives.x = this._playerStartLives.x - 0.5 * this._playerStartLives.width;
        this._playerDecrementLives.y = 0 + 0.1 * this.game.world.height;

        this._playerIncrementLives = this._game.BreakoutWorld.styleManager.positionTextTopLeft(
            ">", null);
        this._playerIncrementLives.inputEnabled = true;
        this._playerIncrementLives.events.onInputUp.add(this.increaseLives, this, null);
        this._playerIncrementLives.x = this._playerStartLives.x + 1.5 * this._playerStartLives.width;
        this._playerIncrementLives.y = 0 + 0.1 * this.game.world.height;
    }

    setOrientationText(): void
    {
        this._orientationText = this._game.BreakoutWorld.styleManager.positionTextTopLeft(
            "Orientation: ");
        this._orientationText.x = 0 + 0.2 * this.game.world.width;
        this._orientationText.y = 0 + 0.2 * this.game.world.height;

        this._portraitOption = this._game.BreakoutWorld.styleManager.positionTextTopRight(
            "PORTRAIT", null);
        this._portraitOption.inputEnabled = true;
        this._portraitOption.events.onInputUp.add(this.setOrientationPortrait, this, null, );
        this._portraitOption.x = this._orientationText.x + this._orientationText.width * 2;
        this._portraitOption.y = 0 + 0.2 * this.game.world.height;

        this._landscapeOption = this._game.BreakoutWorld.styleManager.positionTextTopRight(
            "LANDSCAPE", null);
        this._landscapeOption.inputEnabled = true;
        this._landscapeOption.events.onInputUp.add(this.setOrientationLandscape, this, null);
        this._landscapeOption.x = this._portraitOption.x + this._portraitOption.width * 1.5;
        this._landscapeOption.y = 0 + 0.2 * this.game.world.height;

    }

}