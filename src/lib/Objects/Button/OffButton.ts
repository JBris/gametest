import { Button } from './Button';
//Behaviours

import { ButtonParameterList } from '../Factory/ButtonParameterList';

export class OffButton extends Button {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(parameterList: ButtonParameterList) {
        if (parameterList.key === undefined && parameterList.game.cache.getImage('off-button')) parameterList.key = 'off-button';
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


