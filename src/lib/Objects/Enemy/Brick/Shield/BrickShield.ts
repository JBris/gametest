//Behaviours
import { iHasShield } from '../../../Behaviour/iHasShield';

//Brick
import { Brick } from '../Brick';

export abstract class BrickShield implements iHasShield {

    /*=============================
    **Fields**
    =============================*/
    protected z_brick: Brick;
    currentShieldValue: number = 0;
    totalShieldValue: number = 0;
    shieldDisabled: boolean = false;
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
    damageShield(shieldDamage: number, healthDamage: number): void
    {
        this.damageBrickShield(shieldDamage, healthDamage);
    }

    protected abstract damageBrickShield(shieldDamage: number, healthDamage: number) : void;

    protected brickShieldDamageCheck(totalDamage : number): void
    {
        this.currentShieldValue -= totalDamage;

        if (this.z_brick.animations.getAnimation('angry'))
            this.z_brick.animations.play('angry');

        if (this.currentShieldValue <= 0) {
            this.shieldDisabled = true;
            this.z_brick.Game.BreakoutWorld.styleManager.flashDamageText
                ("BREAK", this.z_brick.x, this.z_brick.y, "shield");
        }
        else this.z_brick.Game.BreakoutWorld.styleManager.flashDamageText
            ("-" + String(totalDamage), this.z_brick.x, this.z_brick.y, "shield");
    }
}


