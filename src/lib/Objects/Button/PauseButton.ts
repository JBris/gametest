import { Button } from './Button';
//Behaviours

import { ButtonParameterList } from '../Factory/ButtonParameterList';

export class PauseButton extends Button {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(parameterList: ButtonParameterList) {
        if (parameterList.key === undefined && parameterList.game.cache.getImage('pause-button')) parameterList.key = 'pause-button';
        super(parameterList);
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


