import { Breakout } from '../../../../Breakout';

//Factory
import { BreakoutAbstractFactory } from '../../Factory/BreakoutAbstractFactory';
import { SpriteParameterList } from '../../Factory/SpriteParameterList';

//Ball
import { Ball } from '../Ball';
import { NormalBall } from '../NormalBall';
import { AngryBall } from '../AngryBall';
import { ShieldBusterBall } from '../ShieldBusterBall';

export class BallFactory extends BreakoutAbstractFactory {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Breakout)
    {
        super(game);
    }

    /*=============================
    **Properties**
    =============================*/
    //getters


    //setters

    /*=============================
    **Methods**
    =============================*/
    buildProduct(productType: string, parameterList: SpriteParameterList): Ball {
        let producedBall: Ball;
        if (productType === "shield") producedBall = new ShieldBusterBall(parameterList);
        else if (productType === "angry") producedBall = new AngryBall(parameterList);
        else producedBall = new NormalBall(parameterList); 
             
        return this.z_game.add.existing(producedBall);   
    }

}


