import { iLastGroupMember } from '../../../Behaviour/iLastGroupMember';

import { Brick } from '../Brick';

export class Panic implements iLastGroupMember {

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

        let moveLeft: Phaser.Tween = this.z_brick.game.add.tween(
            this.z_brick).to({ x: 0.1 * this.z_brick.game.world.width }, 3000, Phaser.Easing.Linear.None);

        moveLeft.onComplete.addOnce(function ()
        {
            this.z_brick.game.add.tween(
                this.z_brick).to({ x: this.z_brick.game.width * 0.8 }, 3000, Phaser.Easing.Linear.None, true, 0, 2000,true);
        }, this);

        moveLeft.start();
        this.flailAround();
    }

    protected flailAround () : void
    {
        if (this.z_brick.alive) {
            if (this.z_brick.animations.getAnimation('attack')) this.z_brick.animations.play('attack', 6, true);
            this.z_brick.game.time.events.add(3000, this.flailAround, this);
        }
    }
}


