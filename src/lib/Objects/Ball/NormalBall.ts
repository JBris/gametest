import { Ball } from './Ball';
//Behaviours
import { NormalBallMovement } from './Movement/NormalBallMovement';
import { NormalBallCollision } from './Collision/NormalBallCollision';

import { SpriteParameterList } from '../Factory/SpriteParameterList';

export class NormalBall extends Ball {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(parameterList: SpriteParameterList) {
        super(parameterList);
        this.z_baseXVelocity = -100;
        this.z_baseYVelocity = -150;
        this.z_basePhysicalDamage = 2;
        this.z_baseShieldDamage = 1;
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
        this.animations.add('idle', [0, 1], 1, true).play();
    }

    protected setMovementType(): void
    {
        this.z_ballMovement = new NormalBallMovement(this);
    }

    protected setCollisionType(): void {
        this.z_ballCollision = new NormalBallCollision(this);

    }
}


