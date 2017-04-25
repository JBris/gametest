import { iLastGroupMember } from '../../../Behaviour/iLastGroupMember';

import { Brick } from '../Brick';

export class RunToCornerAndShoot implements iLastGroupMember {

    /*=============================
    **Fields**
    =============================*/
    protected z_brick: Brick;

    /*=============================
    **Constructors**
    =============================*/
    constructor(brick: Brick) {
        this.z_brick = brick;
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/
    reactToTheSituation(): void
    {
        //move right
        if (this.z_brick.x - this.z_brick.game.world.width / 2  > 0) this.z_brick.game.add.tween(
            this.z_brick).to({ x: 0.8 * this.z_brick.game.world.width }, 1000, Phaser.Easing.Linear.None).start();
        //move left
        else this.z_brick.game.add.tween(
            this.z_brick).to({ x: 0.1 * this.z_brick.game.world.width }, 1000, Phaser.Easing.Linear.None).start();

        if (this.z_brick.Attack.primaryAttackTarget !== undefined) {
            this.openFire();
        }

    }

    protected openFire(): void {
        if (this.z_brick.alive) {
            this.z_brick.Attack.attack(this.z_brick.Attack.primaryAttackTarget);
            this.z_brick.game.time.events.add(5000, this.openFire, this);
        }

    }


}


