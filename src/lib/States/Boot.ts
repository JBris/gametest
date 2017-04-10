import { AssetBooter } from '../Engine/AssetBooter';
import { Breakout } from '../../Breakout';

export class Boot extends Phaser.State {
    constructor() {
        super();

    }

    preload()
    {
        document.title = "booting...";
        this.game.load.image('1st-sky', AssetBooter.backgroundRout + '1st-sky.jpg');
        this.game.load.audio('loading', [AssetBooter.mpg3SoundRout + 'loading.mp3', AssetBooter.oggSoundRout+ 'loading.ogg']);
        this.game.stage.backgroundColor = '#000000';
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
    }


    create() {
       this.game.state.start("Preload");
    }
}



