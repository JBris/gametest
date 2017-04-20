import { Paddle } from './Paddle';

//Behaviours
import { PaddleFollowsInputMovement } from './Movement/PaddleFollowsInputMovement';
import { NormalPaddleCollisionBehaviour } from './Collision/NormalPaddleCollisionBehaviour';

import { SpriteParameterList } from '../Factory/SpriteParameterList';

export class NormalPaddle extends Paddle {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(parameterList: SpriteParameterList) {
        super(parameterList);
        this.z_basePhysicalDamage = 2;
        this.z_baseShieldDamage = 1;
        this.z_baseStunDuration = 0.25;
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
        this.animations.add('paddle-to-ball', [1, 2, 6, 5], 2);
        this.animations.add('paddle-to-drop', [5, 6, 5, 6], 2);
        this.animations.add('fire', [1, 5, 1, 5], 2);
        this.animations.add('hurt', [3, 4, 3, 4,3,4], 2);
        this.animations.add('idle', [0, 2], 1, true).play();
    }

    protected setMovementType(): void
    {
        this.z_paddleMovement = new PaddleFollowsInputMovement(this);
    }

    protected setCollisionType(): void {
        this.z_paddleCollision = new NormalPaddleCollisionBehaviour(this);
    }


}


