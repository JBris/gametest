import { BreakoutAbstractFactory } from './BreakoutAbstractFactory';
import { BallFactory } from '../Ball/Factory/BallFactory';
import { iParameterList } from './iParameterList';

export class ElementFactory extends Phaser.GameObjectFactory {

    /*=============================
    **Fields**
    =============================*/
    private _ballFactory: BreakoutAbstractFactory;

    /*=============================
    **Constructors
    =============================*/
    constructor(game : Phaser.Game)
    {
        super(game);
        this._ballFactory = new BallFactory(game);
    }

    /*=============================
    **Properties**
    =============================*/
    //getters
    get CreateBall(): BreakoutAbstractFactory
    { return this._ballFactory; }

    //setters

    /*=============================
    **Methods**
    =============================*/


}


