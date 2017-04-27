//Brick
import { Brick } from '../Brick';

//Parent
import { BrickAttack } from './BrickAttack';

export class BrickAttackSpread extends BrickAttack{

    /*=============================
    **Fields**
    =============================*/
    private _gravity: number;

    /*=============================
    **Constructors
    =============================*/

    constructor(brick: Brick)
    {
        super(brick);
        this._gravity = -1500;

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
        this.z_brick.game.time.events.repeat(100, 2, this.fireTrippleShot,this,target);

    }

    protected fireTrippleShot(target?: Phaser.Sprite)
    {
        this.z_brickProjectile = this.z_brick.BrickGroup.FastBrickProjectileGroup.getFirstExistsInGroup();
        if (target === undefined && this.primaryAttackTarget !== undefined) target = this.primaryAttackTarget;

        this._gravity += 750;
        if (this._gravity > 750) this._gravity = -750;

        if (this.z_brickProjectile) {
            if (this.z_brickProjectile.animations.getAnimation('fly')) this.z_brickProjectile.animations.play('fly', 6, true);
            this.z_brickProjectile.reset(this.z_brick.x, this.z_brick.y + this.z_brick.height * 0.2);
            this.z_brick.game.physics.arcade.moveToObject(this.z_brickProjectile, target, this.z_brickProjectile.ProjectileSpeed);
            this.z_brickProjectile.body.gravity.x = this._gravity;
        }
    }

}


