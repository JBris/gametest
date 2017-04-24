import { Breakout } from '../../../Breakout';

//Behaviours
import { iActsAsGroup } from '../Behaviour/iActsAsGroup';

export abstract class BreakoutGroup extends Phaser.Group implements iActsAsGroup {

    /*=============================
    **Fields**
    =============================*/
    protected z_game: Breakout;
    /*=============================
    **Constructors
    =============================*/

    constructor(game: Breakout)
    {
        super(game);
        this.z_game = game;
        this.enableBody = true;
        this.physicsBodyType = Phaser.Physics.ARCADE;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters



    //setters

    /*=============================
    **Methods**
    =============================*/

    createGroup(key: string | string[], groupSize?: number,  frame? : any): void
    {
        this.createBreakoutGroup(key, groupSize,  frame);
    }

    protected abstract createBreakoutGroup(key: string | string[], groupSize?: number,  frame?: any): void;

    initGroupValues(): void {

        this.visible = true;
        this.setAll('anchor.x', 0.5);
        this.setAll('anchor.y', 0.5);
        this.setAll('outOfBoundsKill', true);
        this.setAll('checkWorldBounds', true);
    }

    getFirstExistsInGroup(): any
    {
        return this.getFirstExists(false);
    }

    clearGroup(): void
    {
        this.removeAll(true);
    }

}


