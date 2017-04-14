import { Config } from '../config/Config';
import { Boot } from './lib/States/Boot';
import { Preload } from './lib/States/Preload';
import { MainMenu } from './lib/States/MainMenu';
import { Game } from './lib/States/Game';

import { iBreakoutScalingManager } from './lib/Objects/ScalingBehaviour/iBreakoutScalingManager';
import { BreakoutScalingManager } from './lib/Objects/ScalingBehaviour/BreakoutScalingManager';

import { BallFactory } from './lib/Objects/Ball/BallFactory';
import { iBreakoutFactory } from './lib/Objects/Engine/iBreakoutFactory';

export class Breakout extends Phaser.Game {

    /*=============================
    **Fields**
    =============================*/
    private _breakoutConfig : Config;
    private _ballFactory: iBreakoutFactory;
    private _scalingManager: iBreakoutScalingManager;

    /*=============================
    **Constructors
    =============================*/

    constructor(config: Config) {
        super(config.Width, config.Height, config.Renderer, null, null, config.Transparent, config.AntiAlias);

        this._breakoutConfig = config;
        this._ballFactory = new BallFactory(this);
        this._scalingManager = new BreakoutScalingManager(this, this.width, this.height);
  
        this.state.add('Boot', Boot, false);
        this.state.add('Preload', Preload, false);
        this.state.add('MainMenu', MainMenu, false);
        this.state.add('Game', Game, false);
        this.state.start('Boot');
    }

    /*=============================
    **Properties**
    =============================*/

    //getters

    //readonly
    get Config(): Config
    {
        return this._breakoutConfig;
    }

    //setters

    /*=============================
    **Methods**
    =============================*/

}


