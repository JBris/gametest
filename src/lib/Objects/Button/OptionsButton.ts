import { Button } from './Button';
//Behaviours

import { ButtonParameterList } from '../Factory/ButtonParameterList';

export class OptionsButton extends Button {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(parameterList: ButtonParameterList) {
        if (parameterList.key === undefined && parameterList.game.cache.getImage('options-button')) parameterList.key = 'options-button';
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


