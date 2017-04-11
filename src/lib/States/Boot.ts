import { AssetBooter } from '../Engine/AssetBooter';
import { ImageScaler } from '../Engine/ImageScaler';
import { Breakout } from '../../Breakout';
import { Config } from '../../../config/Config';

export class Boot extends Phaser.State {

    /*=============================
    **Fields**
    =============================*/

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
        this.game.load.spritesheet('ball', AssetBooter.spriteRoute + 'ball.png', Config.frameSize, Config.frameSize);
        this.game.stage.backgroundColor = '#337799';
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        ImageScaler.setScaledGame(this.game);
    }

    create() {
        this.game.state.start("Preload");

    }
}



