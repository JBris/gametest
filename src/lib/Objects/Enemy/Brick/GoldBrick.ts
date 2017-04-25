//Parent
import { Brick } from './Brick';

//Attributes and Behaviours
import { LowBrickHealth } from './Health/LowBrickHealth';
import { LowBrickShield } from './Shield/LowBrickShield';
import { NormalBrickCollision } from './Collision/NormalBrickCollision';
import { BrickAttackSingle } from './Attack/BrickAttackSingle';
import { BeRude } from './LastBrickReaction/BeRude';

export class GoldBrick extends Brick {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Phaser.Game, x: number, y: number,
        key: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number) {
        super(game, x, y, key, frame);   

        this.z_baseHealth = 2;
        this.z_baseShield = 1;
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

    protected setAttackType(): void
    {
        this.z_attack = new BrickAttackSingle(this);
    }
    protected setCollisionType(): void
    {
        this.z_brickCollision = new NormalBrickCollision(this);
    }

    protected setHealthType() :void
    {
        this.z_health = new LowBrickHealth(this);  
    }

    protected setShieldType() :void
    {
        this.z_shield = new LowBrickShield(this);
    }
    protected setLastGroupMemberReaction() :void
    {
        this.z_lastGroupMemberReaction = new BeRude(this);
    }
}


