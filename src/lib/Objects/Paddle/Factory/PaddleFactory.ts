import { Breakout } from '../../../../Breakout';

//Factory
import { BreakoutAbstractFactory } from '../../Factory/BreakoutAbstractFactory';
import { SpriteParameterList } from '../../Factory/SpriteParameterList';

//Ball
import { Paddle } from '../Paddle';
import { NormalPaddle } from '../NormalPaddle';
import { MeanPaddle } from '../MeanPaddle';
import { ShooterPaddle } from '../ShooterPaddle';

export class PaddleFactory extends BreakoutAbstractFactory {

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
    buildProduct(productType: string, parameterList: SpriteParameterList): Paddle {
        let producedPaddle: Paddle;
        if (productType === "mean") producedPaddle = this.createMeanPaddle (parameterList);
        else if (productType === "shooter") producedPaddle = this.createShooterPaddle(parameterList);
        else producedPaddle = this.createNormalPaddle(parameterList);
             
        return this.z_game.add.existing(producedPaddle);   
    }

    createMeanPaddle(parameterList : SpriteParameterList): Paddle
    { return new MeanPaddle(this.z_game, parameterList); }

    createShooterPaddle(parameterList: SpriteParameterList): Paddle
    { return new ShooterPaddle(this.z_game, parameterList); }

    createNormalPaddle(parameterList: SpriteParameterList): Paddle
    { return new NormalPaddle(this.z_game, parameterList); }

}


