import { iMegaFactory } from './iMegaFactory';
import { iBreakoutFactory } from './iBreakoutFactory';
import { BallFactory } from '../Ball/BallFactory';

export class BreakoutMegaFactory extends Phaser.GameObjectFactory implements iMegaFactory {

    /*=============================
    **Fields**
    =============================*/
    ballFactory: iBreakoutFactory;
    paddleFactory: iBreakoutFactory;
    brickFactory: iBreakoutFactory;
    bossFactory: iBreakoutFactory;

    /*=============================
    **Constructors**
    =============================*/
    constructor(game:Phaser.Game)
    {
        super(game);
        this.ballFactory = new BallFactory(game);
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

}


