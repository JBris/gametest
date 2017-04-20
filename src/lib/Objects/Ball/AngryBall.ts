import { Ball } from './Ball';
import { SlowBallMovement } from './Movement/SlowBallMovement';
import { SpriteParameterList } from '../Factory/SpriteParameterList';

export class AngryBall extends Ball {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(parameterList: SpriteParameterList) {
        super(parameterList);
        this.z_baseXVelocity = -50;
        this.z_baseYVelocity = -70;
        this.z_basePhysicalDamage = 3;
        this.z_baseShieldDamage = 1;
        this.z_ballMovement = new SlowBallMovement(this);
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters

    /*=============================
    **Methods**
    =============================*/
    protected initAnimations() {
        this.animations.add('sleep', [1, 3, 1, 3], 2);
        this.animations.add('ball-to-paddle', [3, 2, 1, 0], 2);
        this.animations.add('ball-to-brick', [3, 4, 1, 0], 2);
        this.animations.add('ball-to-boss', [3, 4, 1, 3, 4, 0], 2);
        this.animations.add('hurt', [3, 4, 3, 4, 3, 4, 0], 2);
    }
}


