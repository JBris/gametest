import { AssetRouter } from './AssetRouter';
import { AssetLoader } from './AssetLoader';
import { ScalingManager } from './ScalingManager';

export interface iGameEngine {

    /*=============================
    **Fields**
    =============================*/
    game: Phaser.Game;
    assetRouter: AssetRouter;
    assetLoader: AssetLoader;
    scalingManager: ScalingManager;

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

}


