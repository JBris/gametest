import { Paddle } from './Paddle';

//Behaviours
import { PaddleFollowsInputMovement } from './Movement/PaddleFollowsInputMovement';
import { NormalPaddleCollisionBehaviour } from './Collision/NormalPaddleCollisionBehaviour';
import { MediumPaddleStunLength } from './Stun/MediumPaddleStunLength';
import { PaddleProjectileSingle } from './Projectile/PaddleProjectileSingle';
import { PaddleAttackSingle } from './Attack/PaddleAttackSingle';

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
        this.z_baseStunDuration = 0.3;
        this.loadAmmunition('bullet-player-single');
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
        this.animations.add('paddle-to-ball', [1, 1, 2, 2, 0], 2);
        this.animations.add('paddle-to-drop', [5, 6, 5, 6, 0], 2);
        this.animations.add('fire', [1, 5, 6, 0], 2);
        this.animations.add('hurt', [3, 4, 3, 4, 3, 4, 0], 2);
        this.animations.add('idle', [0, 2, 0], 1, true).play();
    }

    protected setMovementType(): void
    {
        this.z_paddleMovement = new PaddleFollowsInputMovement(this);
    }

    protected setCollisionType(): void {
        this.z_paddleCollision = new NormalPaddleCollisionBehaviour(this);
    }

    protected setStunType(): void {
        this.z_stunBehaviour = new MediumPaddleStunLength(this);
    }

    protected setAttackType(): void
    {
        this.z_attack = new PaddleAttackSingle(this);
    }

}


