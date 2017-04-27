import { Breakout } from '../../../../Breakout';

//Behaviours
import { BreakoutGroup } from '../../Group/BreakoutGroup';

//projectileTypes
import { Drop } from '../Drop';
import { Lemon } from '../Lemon';
import { AmmoBox } from '../AmmoBox';

export class DropGroup extends BreakoutGroup {

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


        if (key === "lemon") this.classType = Lemon;
        else if (key === "ammo-box") this.classType = AmmoBox;
        else this.classType = Phaser.Sprite;
       
        this.createMultiple(groupSize, key, frame);
        this.initGroupValues();
        this.forEach(function (drop)
        {
            this.z_game.BreakoutWorld.scalingManager.scaleGameElements(this.z_game, [drop], 0.07, 0.07);

        }, this);
    }
    
    setClassTypeToLemon(): void
    {
        this.classType = Lemon;
    }

    setClassTypeToAmmoBox(): void {
        this.classType = AmmoBox;
    }

    spawnDrop(xCoordinate: number, yCoordinate: number): void {

        let newDrop: Drop = this.getFirstExistsInGroup();
        newDrop.reset(xCoordinate, yCoordinate);
        newDrop.body.gravity.y = newDrop.DropSpeed;

        if (newDrop.animations.getAnimation('fall')) newDrop.animations.play('fall');
    }

}


