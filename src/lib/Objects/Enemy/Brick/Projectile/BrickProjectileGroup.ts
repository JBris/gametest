import { Breakout } from '../../../../../Breakout';

//Behaviours
import { BreakoutGroup } from '../../../Group/BreakoutGroup';

//projectileTypes
import { BrickProjectileNormal } from './BrickProjectileNormal';
import { BrickProjectileFast } from './BrickProjectileFast';

export class BrickProjectileGroup extends BreakoutGroup {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Breakout)
    {
        super(game);
    }

    /*=============================
    **Properties**
    =============================*/
    //getters
    //setters

    /*=============================
    **Methods**
    =============================*/

    protected createBreakoutGroup(key: string | string[], groupSize?: number, frame? : any): void
    {
        if (groupSize === undefined) groupSize = 40;
        if (frame ===undefined) frame = 0;


        if (key === "bullet-enemy") this.classType = BrickProjectileNormal;
        else if (key === "fire") this.classType = BrickProjectileFast;
        else this.classType = Phaser.Sprite;

        this.createMultiple(groupSize, key, frame);

        this.initGroupValues();
    }

    setClassTypeToNormal(): void
    {
        this.classType = BrickProjectileNormal;
    }

    setClassTypeToFast(): void {
        this.classType = BrickProjectileFast;
    }

    attackAsGroup(target: Phaser.Sprite): void
    {
        this.forEachExists(function (projectile, target)
        {
            this.game.physics.arcade.moveToObject(projectile, target, 500);
        }, this);
    }
}


