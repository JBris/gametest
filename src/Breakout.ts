import { Config } from '../config/Config';
import { Boot } from './lib/States/Boot';
import { Preload } from './lib/States/Preload';

export class Breakout extends Phaser.Game {


    /*=============================
    **Fields**
    =============================*/
    private _gameName: string;
    private _gameDescription: string;
    private _playerName: string;

    /*=============================
    **Constructors
    =============================*/

    constructor() {
        super(Config.width, Config.height, Config.renderer, null, null, Config.transparent, Config.antialias);
        this.state.add('Boot', Boot, false);
        this.state.add('Preload', Preload, false);
        this.state.start('Boot');

    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

}


