import { Config } from '../config/Config';
import { Boot } from './lib/States/Boot';
import { Preload } from './lib/States/Preload';
import { MainMenu } from './lib/States/MainMenu';

export class Breakout extends Phaser.Game {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(config:Config) {
        super(config.Width, config.Height, config.Renderer,null, null, config.Transparent, config.AntiAlias);
        this.state.add('Boot', Boot, false);
        this.state.add('Preload', Preload, false);
        this.state.add('MainMenu', MainMenu, false);
        this.state.start('Boot');
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

}


