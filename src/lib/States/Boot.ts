import { Breakout } from '../../Breakout';

export class Boot extends Phaser.State   {

    /*=============================
    **Fields**
    =============================*/
    private _game: Breakout;
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

    preload()
    {
        this.game.stage.backgroundColor = '#337799';
        this._game.GameEngine.scalingManager.scaleGameScreen();
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this._game.GameEngine.assetLoader.loadSpriteSheet('ball', 'png', 64, 64);
    }

    create() {
        this.game.state.start("Preload", true, false, this._game);
    }


}



