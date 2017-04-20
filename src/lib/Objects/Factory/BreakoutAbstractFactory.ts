import { iParameterList } from './iParameterList';
import { Breakout } from '../../../Breakout';

export abstract class BreakoutAbstractFactory {

    /*=============================
    **Fields**
    =============================*/
    protected z_game: Phaser.Game;
    /*=============================
    **Constructors
    =============================*/

    constructor(game : Phaser.Game)
    {
        this.z_game = game;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters
   
    //setters

    /*=============================
    **Methods**
    =============================*/
    createProduct(productType: string, parameterList: iParameterList): any
    {
        return this.buildProduct(productType, parameterList);
    }

    protected abstract buildProduct(productType: string, parameterList: iParameterList) : any;
}


