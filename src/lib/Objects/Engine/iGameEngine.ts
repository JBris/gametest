import { AssetRouter } from './AssetRouter';
import { AssetLoader } from './AssetLoader';
import { ScalingManager } from './ScalingManager';
import { StyleManager } from './StyleManager';
import { StageManager } from './StageManager';
import { ScoreCalculator } from './ScoreCalculator';
import { FactoryManager } from '../Factory/FactoryManager';
import { GroupManager } from '../Group/GroupManager';

export interface iGameEngine {

    /*=============================
    **Fields**
    =============================*/
    game: Phaser.Game;
    assetRouter: AssetRouter;
    assetLoader: AssetLoader;
    scalingManager: ScalingManager;
    styleManager: StyleManager;
    stageManager: StageManager;
    scoreCalculator: ScoreCalculator;
    factoryManager: FactoryManager;
    groupManager: GroupManager;

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

}


