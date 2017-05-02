import { Button } from './Button';
//Behaviours

import { ButtonParameterList } from '../Factory/ButtonParameterList';

export class HomeButton extends Button {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(parameterList: ButtonParameterList) {
        if (parameterList.key === undefined && parameterList.game.cache.getImage('home-button')) parameterList.key = 'home-button';
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


