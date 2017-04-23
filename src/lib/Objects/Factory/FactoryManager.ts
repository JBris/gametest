import { BreakoutAbstractFactory } from './BreakoutAbstractFactory';

//Factories
import { BallFactory } from '../Ball/Factory/BallFactory';
import { PaddleFactory } from '../Paddle/Factory/PaddleFactory';

import { Breakout } from '../../../Breakout';

//Params
import { iParameterList } from './iParameterList';

export class FactoryManager extends Phaser.GameObjectFactory {

    /*=============================
    **Fields**
    =============================*/
    private _game: Breakout;
    private _ballFactory: BreakoutAbstractFactory;
    private _paddleFactory: BreakoutAbstractFactory;

    /*=============================
    **Constructors
    =============================*/
    constructor(game: Breakout)
    {
        super(game);
        this._game = game;
        this._ballFactory = new BallFactory(game);
        this._paddleFactory = new PaddleFactory(game);
    }

    /*=============================
    **Properties**
    =============================*/
    //getters
    get CreateBall(): BreakoutAbstractFactory
    { return this._ballFactory; }

    get CreatePaddle(): BreakoutAbstractFactory
    { return this._paddleFactory; }

    //setters

    /*=============================
    **Methods**
    =============================*/


}


