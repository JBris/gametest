//States
import { Boot } from './lib/States/Boot';
import { Preload } from './lib/States/Preload';
import { MainMenu } from './lib/States/MainMenu';
import { LeaderBoard } from './lib/States/LeaderBoard';
import { Options } from './lib/States/Options';
import { Game } from './lib/States/Game';
import { FetusBoss } from './lib/States/FetusBoss';

//Config and engine imports
import { Config } from '../config/Config';
import { PlayerList } from './lib/Objects/Player/PlayerList';
import { iGameEngine } from './lib/Objects/Engine/iGameEngine';
import { BreakoutGameEngine } from './lib/Objects/Engine/BreakoutGameEngine';

export class Breakout extends Phaser.Game {

    /*=============================
    **Fields**
    =============================*/
    private _breakoutConfig: Config;
    private _gameEngine: iGameEngine;
    private _playerList: PlayerList;

    /*=============================
    **Constructors
    =============================*/

    constructor(config: Config) {
        super(config.Width, config.Height, config.Renderer, null,null, config.Transparent, config.AntiAlias);

        this._breakoutConfig = config;
        this._gameEngine = new BreakoutGameEngine(this);
        this._playerList = new PlayerList();

        //states
        this.state.add('Boot', Boot, false);
        this.state.add('Preload', Preload, false);
        this.state.add('MainMenu', MainMenu, false);
        this.state.add('Game', Game, false);
        this.state.add('FetusBoss', FetusBoss, false);
        this.state.add('LeaderBoard', LeaderBoard, false);
        this.state.add('Options', Options, false);
        this.state.start('Boot',true,false, this);
    }

    /*=============================
    **Properties**
    =============================*/

    //getters

    get BreakoutConfig(): Config
    { return this._breakoutConfig;}

    get BreakoutWorld(): iGameEngine
    { return this._gameEngine;}

    get PlayerList(): PlayerList
    { return this._playerList; }

    //setters
    //readonly
    /*=============================
    **Methods**
    =============================*/

}


