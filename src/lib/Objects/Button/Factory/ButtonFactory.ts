import { Breakout } from '../../../../Breakout';

//Factory
import { BreakoutAbstractFactory } from '../../Factory/BreakoutAbstractFactory';
import { ButtonParameterList } from '../../Factory/ButtonParameterList';

//Button
import { Button } from '../Button';
import { HomeButton } from '../HomeButton';
import { OffButton } from '../OffButton';
import { OptionsButton } from '../OptionsButton';
import { PauseButton } from '../PauseButton';
import { PlayButton } from '../PlayButton';

export class ButtonFactory extends BreakoutAbstractFactory {

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
    buildProduct(productType: string, parameterList: ButtonParameterList): Button {
        let product: Button;

        if (productType === "home") product = this.createHomeButton(parameterList);
        else if (productType === "off") product = this.createOffButton(parameterList);
        else if (productType === "options") product = this.createOptionsButton(parameterList);
        else if (productType === "pause") product = this.createPauseButton(parameterList);
        else product = this.createPlayButton(parameterList);
             
        return this.z_game.add.existing(product);   
    }

    createHomeButton(parameterList: ButtonParameterList): Button
    { return new HomeButton(parameterList); }

    createOffButton(parameterList: ButtonParameterList): Button
    { return new OffButton(parameterList); }

    createOptionsButton(parameterList: ButtonParameterList): Button
    { return new OptionsButton(parameterList); }

    createPauseButton(parameterList: ButtonParameterList): Button
    { return new PauseButton(parameterList); }

    createPlayButton(parameterList: ButtonParameterList): Button
    { return new PlayButton(parameterList); }

}


