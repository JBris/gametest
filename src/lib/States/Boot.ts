import { AssetLoader } from '../Boot/AssetLoader';
import { BreakoutScalingManager } from '../Objects/Scaling/BreakoutScalingManager';

export class Boot extends Phaser.State   {

    /*=============================
    **Fields**
    =============================*/
    private _assetLoader :AssetLoader;
    private _scaleManager : BreakoutScalingManager;
    /*=============================
    **Constructors
    =============================*/

    constructor() {
        super();
        this.game.stage.backgroundColor = '#337799';
        this._assetLoader = new AssetLoader(this.game);
        this._scaleManager = new BreakoutScalingManager(this.game,this.game.width,this.game.height);
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

    preload()
    {
        this._scaleManager.scaleGameScreen();
        this._assetLoader.loadSpriteSheet('ball', 'png');
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
    }

    create() {
        this.game.state.start("Preload");

    }


}



