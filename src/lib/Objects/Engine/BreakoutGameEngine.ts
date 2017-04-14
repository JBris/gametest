import { AssetRouter } from './AssetRouter';
import { AssetLoader } from './AssetLoader';
import { ScalingManager } from './ScalingManager';
import { StyleManager } from './StyleManager';
import { iGameEngine } from './iGameEngine';

export class BreakoutGameEngine implements iGameEngine {

    /*=============================
    **Fields**
    =============================*/
    game: Phaser.Game;
    assetRouter: AssetRouter;
    assetLoader: AssetLoader;
    scalingManager: ScalingManager;
    styleManager: StyleManager;

    /*=============================
    **Constructors
    =============================*/

    constructor(game :Phaser.Game)
    {
        this.assetRouter = new AssetRouter();
        this.assetLoader = new AssetLoader(game, this.assetRouter);
        this.scalingManager = new ScalingManager(game, game.width, game.height);
        this.styleManager = new StyleManager(game);

    }
    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

}


