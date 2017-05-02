import { iMovable } from '../Behaviour/iMovable';
import { iCollidable } from '../Behaviour/iCollidable';

import { ButtonParameterList } from '../Factory/ButtonParameterList';

export abstract class Button extends Phaser.Button {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(parameterList: ButtonParameterList)
    {
        //defaults
        if (parameterList.overFrame === undefined) parameterList.overFrame = 1;
        if (parameterList.outFrame === undefined) parameterList.outFrame = 0;
        if (parameterList.downFrame === undefined) parameterList.downFrame = 1;
        if (parameterList.upFrame === undefined) parameterList.upFrame = 0;

        super(parameterList.game, parameterList.x, parameterList.y, parameterList.key, parameterList.callback,
            parameterList.callbackContext, parameterList.overFrame, parameterList.outFrame, parameterList.downFrame, parameterList.upFrame);
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters

    /*=============================
    **Methods**
    =============================*/

}


