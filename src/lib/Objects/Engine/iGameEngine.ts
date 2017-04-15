import { AssetRouter } from './AssetRouter';
import { AssetLoader } from './AssetLoader';
import { ScalingManager } from './ScalingManager';
import { StyleManager } from './StyleManager';
import { StageManager } from './StageManager';

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
    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

}

