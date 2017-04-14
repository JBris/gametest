import { AssetLoader } from '../Boot/AssetLoader';

export class Boot extends Phaser.State   {

    /*=============================
    **Fields**
    =============================*/
    private _assetLoader :AssetLoader;
    /*=============================
    **Constructors
    =============================*/

    constructor() {
        super();
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

    preload()
    {
        this._assetLoader = new AssetLoader(this.game);
        this.game.stage.backgroundColor = '#337799';
        this.game._scaleManager.scaleGameScreen();
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this._assetLoader.loadSpriteSheet('ball', 'png', 64, 64);
    }

    create() {
        this.game.state.start("Preload");
    }


}



