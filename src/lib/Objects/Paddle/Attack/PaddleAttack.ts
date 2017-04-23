//Paddle
import { Paddle } from '../Paddle';

//Behaviours
import { iAttacks } from '../../Behaviour/iAttacks';

//Projectile
import { PaddleProjectile } from '../Projectile/PaddleProjectile';

export abstract class PaddleAttack implements iAttacks{

    /*=============================
    **Fields**
    =============================*/
    protected z_paddle: Paddle;
    protected z_paddleProjectile: PaddleProjectile;

    /*=============================
    **Constructors
    =============================*/

    constructor(paddle: Paddle)
    {
        this.z_paddle = paddle;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters

    /*=============================
    **Methods**
    =============================*/
    attack(): void
    {
        this.launchProjectileAttack();
    }

    protected abstract launchProjectileAttack(): void;
}


