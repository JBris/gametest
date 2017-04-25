import { iLastGroupMember } from '../../../Behaviour/iLastGroupMember';

import { Brick } from '../Brick';

export class GoBerserk implements iLastGroupMember {

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
        if (this.z_brick.Attack.primaryAttackTarget !== undefined)
        {
            this.goBerserk();
        }
    }

    protected goBerserk() : void
    {
        if (this.z_brick.alive)
        {
            this.z_brick.Attack.attack(this.z_brick.Attack.primaryAttackTarget);
            this.z_brick.game.time.events.add(2000, this.goBerserk, this);
        }

    }

}


