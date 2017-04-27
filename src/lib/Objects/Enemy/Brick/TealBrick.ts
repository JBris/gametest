//Parent
import { Brick } from './Brick';

//Attributes and Behaviours
import { MediumBrickHealth } from './Health/MediumBrickHealth';
import { MediumBrickShield } from './Shield/MediumBrickShield';
import { BrickAttackSpread } from './Attack/BrickAttackSpread';
import { CounterAttackBrickCollision } from './Collision/CounterAttackBrickCollision';
import { GoBerserk } from './LastBrickReaction/GoBerserk';

export class TealBrick extends Brick {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Phaser.Game, x: number, y: number,
        key: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number) {
        super(game, x, y, key, frame);   

        this.z_baseHealth = 3;
        this.z_baseShield = 2;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters

    /*=============================
    **Methods**
    =============================*/

    setBrickAnimations()
    {
        this.animations.add('float', [0, 1, 0, 1, 0, 1, 0, 1,0], 2, true);
        this.animations.add('die', [2, 3, 2, 3], 2);
        this.animations.add('attack', [4, 5, 4, 5, 0], 2);
        this.animations.add('angry', [4, 5, 0], 2);
    }

    setDropPool(): void {
        this.z_dropsItems = false;
        this.z_dropPool = this.BrickGroup.EmptyDropGroup;
    }

    protected setAttackType(): void
    {
        this.z_attack = new BrickAttackSpread(this);
    }
    protected setCollisionType(): void
    {
        this.z_brickCollision = new CounterAttackBrickCollision(this);
    }

    protected setHealthType() :void
    {
        this.z_health = new MediumBrickHealth(this);  
    }

    protected setShieldType() :void
    {
        this.z_shield = new MediumBrickShield(this);
    }
    protected setLastGroupMemberReaction() :void
    {
        this.z_lastGroupMemberReaction = new GoBerserk(this);
    }
}


