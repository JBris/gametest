//Behaviours
import { iHasHealth } from '../../../Behaviour/iHasHealth';

//Brick
import { Brick } from '../Brick';

export abstract class BrickHealth implements iHasHealth {

    /*=============================
    **Fields**
    =============================*/
    protected z_brick: Brick;
    currentHealthValue: number = 0;
    totalHealthValue: number = 0;
    /*=============================
    **Constructors
    =============================*/

    constructor(brick: Brick)
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
    damageHealth(healthDamage: number, shieldDamage: number): void
    {
        this.damageBrickHealth(healthDamage, shieldDamage);
    }

    protected abstract damageBrickHealth(healthDamage: number, shieldDamage: number) : void;

    protected brickDamageCheck(totalDamage : number): void
    {
        this.currentHealthValue -= totalDamage;
        if (this.currentHealthValue <= 0) this.z_brick.killBrick();
        else {
            this.z_brick.Game.BreakoutWorld.styleManager.flashDamageText
                ("-" + String(totalDamage), this.z_brick.x, this.z_brick.y, "health");

            if (this.z_brick.animations.getAnimation('angry')) this.z_brick.animations.play('angry');
        }
    }
}


