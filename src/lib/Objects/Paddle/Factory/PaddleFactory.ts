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

    constructor(game: Phaser.Game)
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
        if (productType === "mean") producedPaddle = new MeanPaddle(parameterList);
        if (productType === "shooter") producedPaddle = new ShooterPaddle(parameterList);
        else producedPaddle = new NormalPaddle(parameterList); 
             
        return this.z_game.add.existing(producedPaddle);   
    }

}


