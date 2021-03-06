//Parent
import { Brick } from './Brick';

//Attributes and Behaviours
import { MediumBrickHealth } from './Health/MediumBrickHealth';
import { LowBrickShield } from './Shield/LowBrickShield';
import { DropItemOnCollision } from './Collision/DropItemOnCollision';
import { BrickAttackFlurry } from './Attack/BrickAttackFlurry';
import { RunToCornerAndShoot } from './LastBrickReaction/RunToCornerAndShoot';

export class GreenBrick extends Brick {

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

    setDropPool(): void {
        this.z_dropsItems = true;
        this.z_dropPool = this.BrickGroup.AmmoBoxGroup;
    }

    protected setAttackType(): void
    {
        this.z_attack = new BrickAttackFlurry(this);
    }
    protected setCollisionType(): void
    {
        this.z_brickCollision = new DropItemOnCollision(this);
    }

    protected setHealthType() :void
    {
        this.z_health = new MediumBrickHealth(this);  
    }

    protected setShieldType() :void
    {
        this.z_shield = new LowBrickShield(this);
    }
    protected setLastGroupMemberReaction() :void
    {
        this.z_lastGroupMemberReaction = new RunToCornerAndShoot(this);
    }
}


