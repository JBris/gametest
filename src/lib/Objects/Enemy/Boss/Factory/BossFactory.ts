import { Breakout } from '../../../../../Breakout';

//Factory
import { BreakoutAbstractFactory } from '../../../Factory/BreakoutAbstractFactory';
import { SpriteParameterList } from '../../../Factory/SpriteParameterList';

//Ball
import { Boss } from '../Boss';
import { SkullFace } from '../SkullFace';
/*import { Eye } from '../Eye';
import { Shadow } from '../Shadow';
import { Robot } from '../Robot';
import { WeirdGuy } from '../WeirdGuy';
import { FetusBall } from '../FetusBall';
import { BloodyPaddle } from '../BloodyPaddle';*/

export class BossFactory extends BreakoutAbstractFactory {

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
    buildProduct(productType: string, parameterList: SpriteParameterList): Boss {
        let product: Boss = this.createSkullFace(parameterList);
       /* if (productType === "eye") product = this.createEye(parameterList);
        else if (productType === "shadow") product = this.createShadow(parameterList);
        else if (productType === "robot") product = this.createRobot(parameterList);
        else if (productType === "weird-guy") product = this.createWeirdGuy(parameterList);
        else if (productType === "fetus-ball") product = this.createFetusBall(parameterList);
        else if (productType === "bloody-paddle") product = this.createBloodyPaddle(parameterList);

        else product = this.createSkullFace(parameterList);*/
            
        return this.z_game.add.existing(product);   
    }

    createSkullFace(parameterList: SpriteParameterList): Boss
    { return new SkullFace(this.z_game, parameterList); }

   /* createEye(parameterList: SpriteParameterList): Boss
    { return new Eye(this.z_game, parameterList); }

    createShadow(parameterList: SpriteParameterList): Boss
    { return new Shadow(parameterList); }

    createRobot(parameterList: SpriteParameterList): Boss
    { return new Robot(this.z_game, parameterList); }

    createWeirdGuy(parameterList: SpriteParameterList): Boss
    { return new WeirdGuy(this.z_game, parameterList); }

    createFetusBall(parameterList: SpriteParameterList): Boss
    { return new FetusBall(parameterList); }

    createBloodyPaddle(parameterList: SpriteParameterList): Boss
    { return new BloodyPaddle(parameterList); }*/
}


