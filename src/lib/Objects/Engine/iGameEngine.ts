import { AssetRouter } from './AssetRouter';
import { AssetLoader } from './AssetLoader';
import { ScalingManager } from './ScalingManager';
import { StyleManager } from './StyleManager';

export interface iGameEngine {

    /*=============================
    **Fields**
    =============================*/
    game: Phaser.Game;
    assetRouter: AssetRouter;
    assetLoader: AssetLoader;
    scalingManager: ScalingManager;
    styleManager: StyleManager;

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

}


