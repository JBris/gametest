import { AssetRouter } from './AssetRouter';
import { AssetLoader } from './AssetLoader';
import { ScalingManager } from './ScalingManager';
import { StyleManager } from './StyleManager';
import { iGameEngine } from './iGameEngine';
import { StageManager } from './StageManager';

export class BreakoutGameEngine implements iGameEngine {

    /*=============================
    **Fields**
    =============================*/
    game: Phaser.Game;
    assetRouter: AssetRouter;
    assetLoader: AssetLoader;
    scalingManager: ScalingManager;
    styleManager: StyleManager;
    stageManager: StageManager;

    /*=============================
    **Constructors
    =============================*/

    constructor(game :Phaser.Game)
    {
        this.assetRouter = new AssetRouter();
        this.stageManager = new StageManager(game);
        this.assetLoader = new AssetLoader(game, this.assetRouter, this.stageManager);
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


