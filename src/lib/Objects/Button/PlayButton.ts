import { Button } from './Button';
//Behaviours

import { ButtonParameterList } from '../Factory/ButtonParameterList';

export class PlayButton extends Button {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(parameterList: ButtonParameterList) {
        if (parameterList.key === undefined && parameterList.game.cache.getImage('play-button')) parameterList.key = 'play-button';
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


