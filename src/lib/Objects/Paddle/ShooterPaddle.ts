import { Breakout } from '../../../Breakout';

import { Paddle } from './Paddle';

//Behaviours
import { PaddleFollowsInputMovement } from './Movement/PaddleFollowsInputMovement';
import { NormalPaddleCollisionBehaviour } from './Collision/NormalPaddleCollisionBehaviour';
import { ShortPaddleStunLength } from './Stun/ShortPaddleStunLength';
import { PaddleProjectileMulti } from './Projectile/PaddleProjectileMulti';
import { PaddleAttackMulti } from './Attack/PaddleAttackMulti';

import { SpriteParameterList } from '../Factory/SpriteParameterList';

export class ShooterPaddle extends Paddle {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Breakout, parameterList: SpriteParameterList) {
        super(game, parameterList);
        this.z_basePhysicalDamage = 1;
        this.z_baseShieldDamage = 1;
        this.z_baseStunDuration = 0.5;
        this.z_baseNumberOfShots = 1;
        this.loadAmmunition('bullet-player-multi');

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
        this.z_stunBehaviour = new ShortPaddleStunLength(this);
    }

    protected setAttackType(): void {
        this.z_attack = new PaddleAttackMulti(this);
    }

}


