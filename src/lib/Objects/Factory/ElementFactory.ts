import { BreakoutAbstractFactory } from './BreakoutAbstractFactory';

//Factories
import { BallFactory } from '../Ball/Factory/BallFactory';
import { PaddleFactory } from '../Paddle/Factory/PaddleFactory';

//Params
import { iParameterList } from './iParameterList';

export class ElementFactory extends Phaser.GameObjectFactory {

    /*=============================
    **Fields**
    =============================*/
    private _ballFactory: BreakoutAbstractFactory;
    private _paddleFactory: BreakoutAbstractFactory;

    /*=============================
    **Constructors
    =============================*/
    constructor(game : Phaser.Game)
    {
        super(game);
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


