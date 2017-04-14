import { Boot } from './lib/States/Boot';
import { Preload } from './lib/States/Preload';
import { MainMenu } from './lib/States/MainMenu';
import { Game } from './lib/States/Game';

import { Config } from '../config/Config';

import { iGameEngine } from './lib/Objects/Engine/iGameEngine';
import { BreakoutGameEngine } from './lib/Objects/Engine/BreakoutGameEngine';

import { iMegaFactory } from './lib/Objects/Engine/iMegaFactory';
import { BreakoutMegaFactory } from './lib/Objects/Engine/BreakoutMegaFactory';

export class Breakout extends Phaser.Game {

    /*=============================
    **Fields**
    =============================*/
    private _breakoutConfig : Config;
    private _gameEngine: iGameEngine;
    private _megaFactory: iMegaFactory;

    /*=============================
    **Constructors
    =============================*/

    constructor(config: Config) {
        super(config.Width, config.Height, config.Renderer, null, null, config.Transparent, config.AntiAlias);

        this._breakoutConfig = config;
        this._gameEngine = new BreakoutGameEngine(this);
        this._megaFactory = new BreakoutMegaFactory(this);

        this.state.add('Boot', Boot, false);
        this.state.add('Preload', Preload, false);
        this.state.add('MainMenu', MainMenu, false);
        this.state.add('Game', Game, false);
        this.state.start('Boot',true,false, this);
    }

    /*=============================
    **Properties**
    =============================*/

    //getters

    get BreakoutConfig(): Config
    { return this._breakoutConfig;}

    get GameEngine(): iGameEngine
    { return this._gameEngine;}

    get MegaFactory(): iMegaFactory
    { return this._megaFactory;}

    //setters

    /*=============================
    **Methods**
    =============================*/

}


