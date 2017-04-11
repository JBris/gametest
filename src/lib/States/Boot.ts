import { AssetBooter } from '../Engine/AssetBooter';
import { ImageScaler } from '../Engine/ImageScaler';
import { Breakout } from '../../Breakout';

export class Boot extends Phaser.State {
    constructor() {
        super();

    }

    preload()
    {
        document.title = "booting...";
        this.game.load.image('1st-sky', AssetBooter.backgroundRoute + '1st-sky.jpg');
        this.game.stage.backgroundColor = '#000000';
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        ImageScaler.setScaledGame(this.game);
    }

    create() {
        this.game.state.start("Preload");

    }
}



