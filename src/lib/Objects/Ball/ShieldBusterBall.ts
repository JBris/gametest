import { Ball } from './Ball';
//Behaviours
import { FastBallMovement } from './Movement/FastBallMovement';
import { ShieldBreakerCollision } from './Collision/ShieldBreakerCollision';

import { SpriteParameterList } from '../Factory/SpriteParameterList';

export class ShieldBusterBall extends Ball {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(parameterList: SpriteParameterList)
    {
        super(parameterList);
        this.z_baseXVelocity = -120;
        this.z_baseYVelocity = -175;
        this.z_basePhysicalDamage = 1;
        this.z_baseShieldDamage = 3;
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
        this.animations.add('sleep', [1, 3, 1, 3, 0], 2);
        this.animations.add('ball-to-paddle', [3, 2, 1, 0], 2);
        this.animations.add('ball-to-brick', [3, 4, 1, 0], 2);
        this.animations.add('ball-to-boss', [3, 4, 1, 3, 4, 0], 2);
        this.animations.add('hurt', [3, 4, 3, 4, 3, 4, 0], 2);
        this.animations.add('idle', [0, 1, 0], 1, true).play();
    }

    protected setMovementType(): void {
        this.z_ballMovement = new FastBallMovement(this);
    }

    protected setCollisionType(): void {
        this.z_ballCollision = new ShieldBreakerCollision(this);

    }
}


