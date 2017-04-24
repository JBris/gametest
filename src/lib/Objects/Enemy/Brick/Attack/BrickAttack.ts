//Brick
import { Brick } from '../Brick';

//Behaviours
import { iAttacks } from '../../../Behaviour/iAttacks';

//Projectile
import { BrickProjectile } from '../Projectile/BrickProjectile';

export abstract class BrickAttack implements iAttacks{

    /*=============================
    **Fields**
    =============================*/
    protected z_brick: Brick;
    protected z_brickProjectile: BrickProjectile;

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
    attack(target?: Phaser.Sprite): void
    {
        this.launchProjectileAttack(target);
    }

    protected abstract launchProjectileAttack(target?: Phaser.Sprite): void;
}


