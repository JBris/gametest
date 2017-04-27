import { Breakout } from '../../../../Breakout';

//Behaviours
import { iCollidable } from '../../Behaviour/iCollidable';
import { iHasShield } from '../../Behaviour/iHasShield';
import { iHasHealth } from '../../Behaviour/iHasHealth';
import { iAttacks } from '../../Behaviour/iAttacks';
import { iLastGroupMember } from '../../Behaviour/iLastGroupMember';

//Group
import { BrickGroup } from './Group/BrickGroup';
import { DropGroup } from '../../Drop/Group/DropGroup';

export abstract class Brick extends Phaser.Sprite {

    /*=============================
    **Fields**
    =============================*/
    protected z_game: Breakout;
    protected z_brickGroup: BrickGroup;
    protected z_dropPool: DropGroup;
    protected z_attack: iAttacks;
    protected z_brickCollision: iCollidable;
    protected z_health: iHasHealth;
    protected z_shield: iHasShield;
    protected z_lastGroupMemberReaction: iLastGroupMember;

    protected z_baseHealth: number = 1;
    protected z_baseShield: number = 0;
    protected z_dropsItems: boolean = false;

    private _dropDebouncer: number;

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Phaser.Game, x: number, y: number,
        key: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number) {
        super(game, x, y, key, frame);   

        this.initBrickSettings();
        this.setBrickAnimations();
        this.setAttackType();
        this.setCollisionType();
        this.setHealthType();
        this.setShieldType();
        this.setLastGroupMemberReaction();

        this._dropDebouncer = 0;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters
    get Game(): Breakout
    { return this.z_game; }

    get BrickGroup(): BrickGroup
    { return this.z_brickGroup; }

    get DropPool(): DropGroup
    { return this.z_dropPool; }

    get Attack(): iAttacks
    { return this.z_attack; }

    get BrickCollision(): iCollidable
    { return this.z_brickCollision; }

    get Health(): iHasHealth
    { return this.z_health; }

    get Shield(): iHasShield
    { return this.z_shield; }

    get LastGroupMemberReaction(): iLastGroupMember
    { return this.z_lastGroupMemberReaction; }

    get BaseHealth(): number
    { return this.z_baseHealth; }

    get BaseShield(): number
    { return this.z_baseShield; }

    get DropsItems(): boolean
    { return this.z_dropsItems; }

    //setters
    set Game(val: Breakout)
    { this.z_game = val; }

    set BrickGroup(val: BrickGroup)
    { this.z_brickGroup = val; }

    set DropPool(val: DropGroup)
    { this.z_dropPool = val; }

    set Attack(val: iAttacks)
    { this.z_attack = val; }

    set BrickCollision(val: iCollidable)
    { this.z_brickCollision = val; }

    set Health(val: iHasHealth)
    { this.z_health = val; }

    set Shield(val: iHasShield)
    { this.z_shield = val; }

    set LastGroupMemberReaction(val: iLastGroupMember)
    { this.z_lastGroupMemberReaction = val; }

    set BaseHealth(val: number)
    { this.z_baseHealth = val; }

    set BaseShield(val: number)
    { this.z_baseShield = val; }

    set DropsItems(val: boolean)
    { this.z_dropsItems = val; }

    /*=============================
    **Methods**
    =============================*/
    private initBrickSettings(): void {
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.bounce.set(1);
        this.body.immovable = true;
        this.body.setSize(this.body.width * 0.4, this.body.height * 0.4);
    }

    killBrick(): void
    {
        //drops
        if (this.z_dropsItems && this._dropDebouncer < this.game.time.now)
            this.z_dropPool.spawnDrop(this.x, this.y);

        this._dropDebouncer = this.game.time.now + 1000;

        //kill animation
        if (this.animations.getAnimation('die')) this.animations.play('die');

        this.physicsEnabled = false;
        //kill tween
        let killBrick: Phaser.Tween = this.game.add.tween(this.scale);

        killBrick.to({ x: 0, y: 0 }, 200, Phaser.Easing.Linear.None);
        killBrick.onComplete.addOnce(function () {
            this.kill();
            this.BrickGroup.responseToChildDeath(this.x, this.y);
        }, this);
        killBrick.start();
    }

    protected abstract setBrickAnimations(): void;
    protected abstract setBrickAnimations(): void;
    abstract setDropPool(): void;

    //behaviours
    protected abstract setAttackType(): void;
    protected abstract setCollisionType(): void;
    protected abstract setHealthType(): void;
    protected abstract setShieldType(): void;
    protected abstract setLastGroupMemberReaction(): void;
}


