//Brick
import { Brick } from '../Brick';

//Parent
import { BrickAttack } from './BrickAttack';

export class BrickAttackSingle extends BrickAttack{

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(brick: Brick)
    {
        super(brick);
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters

    /*=============================
    **Methods**
    =============================*/

    protected launchProjectileAttack(target?: Phaser.Sprite): void {
        this.z_brickProjectile = this.z_brick.BrickGroup.NormalBrickProjectileGroup.getFirstExistsInGroup();
        if (target === undefined && this.primaryAttackTarget !== undefined) target = this.primaryAttackTarget;

        if (this.z_brickProjectile)
        {
            if (this.z_brickProjectile.animations.getAnimation('fly')) this.z_brickProjectile.animations.play('fly', 6, true);
            this.z_brickProjectile.reset(this.z_brick.x, this.z_brick.y + this.z_brick.height * 0.2);
            this.z_brick.game.physics.arcade.moveToObject(this.z_brickProjectile, target, this.z_brickProjectile.ProjectileSpeed);

        }
    }

}


