import { Breakout } from '../../../Breakout';

import { Paddle } from './Paddle';

//Behaviours
import { PaddleFollowsInputMovement } from './Movement/PaddleFollowsInputMovement';
import { NormalPaddleCollisionBehaviour } from './Collision/NormalPaddleCollisionBehaviour';
import { LongPaddleStunLength } from './Stun/LongPaddleStunLength';
import { PaddleProjectileSpread } from './Projectile/PaddleProjectileSpread';
import { PaddleAttackSpread } from './Attack/PaddleAttackSpread';

import { SpriteParameterList } from '../Factory/SpriteParameterList';

export class MeanPaddle extends Paddle {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Breakout, parameterList: SpriteParameterList) {
        super(game, parameterList);
        this.z_basePhysicalDamage = 3;
        this.z_baseShieldDamage = 1;
        this.z_baseStunDuration = 0.5;
        this.loadAmmunition('bullet-player-spread');

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
        this.animations.add('paddle-to-ball', [1, 1, 1, 1, 0], 4);
        this.animations.add('paddle-to-drop', [5, 6, 5, 6, 0], 2);
        this.animations.add('fire', [1, 5, 1, 5, 0], 2);
        this.animations.add('hurt', [3, 4, 3, 4, 3, 4, 0], 2);
        this.animations.add('idle', [0, 2, 0], 1, true).play();
    }

    protected setMovementType(): void {
        this.z_paddleMovement = new PaddleFollowsInputMovement(this);
    }

    protected setCollisionType(): void {
        this.z_paddleCollision = new NormalPaddleCollisionBehaviour(this);
    }

    protected setStunType(): void {
        this.z_stunBehaviour = new LongPaddleStunLength(this);
    }

    protected setAttackType(): void {
        this.z_attack = new PaddleAttackSpread(this);
    }

}


