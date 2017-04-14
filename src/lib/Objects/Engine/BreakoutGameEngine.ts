import { AssetRouter } from './AssetRouter';
import { AssetLoader } from './AssetLoader';
import { ScalingManager } from './ScalingManager';

import { iGameEngine } from './iGameEngine';

export class BreakoutGameEngine implements iGameEngine {

    /*=============================
    **Fields**
    =============================*/
    game: Phaser.Game;
    assetRouter: AssetRouter;
    assetLoader: AssetLoader;
    scalingManager: ScalingManager;

    /*=============================
    **Constructors
    =============================*/

    constructor(game :Phaser.Game)
    {
        this.assetRouter = new AssetRouter();
        this.assetLoader = new AssetLoader(game, this.assetRouter);
        this.scalingManager = new ScalingManager(game,game.width,game.height);
    }
    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

}


