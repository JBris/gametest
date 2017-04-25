import { iLastGroupMember } from '../../../Behaviour/iLastGroupMember';

import { Brick } from '../Brick';

export class BeRude implements iLastGroupMember {

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
        this.beRude();
    }

    protected beRude() : void
    {
        if (this.z_brick.alive)
        {
            if (this.z_brick.animations.getAnimation('attack')) this.z_brick.animations.play('attack', 6);
            this.z_brick.Game.BreakoutWorld.styleManager.flashDamageText(
                "#$@&%*!", this.z_brick.x,this.z_brick.y, "red");
            this.z_brick.game.time.events.add(3000, this.beRude, this);
        }

    }

}


