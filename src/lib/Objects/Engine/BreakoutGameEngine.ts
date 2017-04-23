import { AssetRouter } from './AssetRouter';
import { AssetLoader } from './AssetLoader';
import { ScalingManager } from './ScalingManager';
import { StyleManager } from './StyleManager';
import { StageManager } from './StageManager';
import { ScoreCalculator } from './ScoreCalculator';
import { FactoryManager } from '../Factory/FactoryManager';

import { iGameEngine } from './iGameEngine';
import { Breakout } from '../../../Breakout';

export class BreakoutGameEngine implements iGameEngine {

    /*=============================
    **Fields**
    =============================*/
    game: Breakout;
    assetRouter: AssetRouter;
    assetLoader: AssetLoader;
    scalingManager: ScalingManager;
    styleManager: StyleManager;
    stageManager: StageManager;
    scoreCalculator: ScoreCalculator;
    factoryManager: FactoryManager;
    /*=============================
    **Constructors
    =============================*/

    constructor(game: Breakout)
    {
        this.assetRouter = new AssetRouter();
        this.stageManager = new StageManager(game);
        this.assetLoader = new AssetLoader(game);
        this.scalingManager = new ScalingManager(game);
        this.styleManager = new StyleManager(game);
        this.scoreCalculator = new ScoreCalculator(game);
        this.factoryManager = new FactoryManager(game);
    }
    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

}


