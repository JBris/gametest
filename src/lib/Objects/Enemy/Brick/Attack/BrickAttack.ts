//Paddle
import { Brick } from '../Brick';

//Behaviours
import { iAttacks } from '../../../Behaviour/iAttacks';

//Projectile
import { PaddleProjectile } from '../Projectile/PaddleProjectile';

export abstract class BrickAttack implements iAttacks{

    /*=============================
    **Fields**
    =============================*/
    protected z_brick: Brick;
    protected z_paddleProjectile: PaddleProjectile;

    /*=============================
    **Constructors
    =============================*/

    constructor(brick : Brick)
    {
        this.z_brick = brick;
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


