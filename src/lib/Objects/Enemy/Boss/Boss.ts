import { Breakout } from '../../../../Breakout';

//Behaviours
import { iCollidable } from '../../Behaviour/iCollidable';
import { iMovable } from '../../Behaviour/iMovable';
import { iHasShield } from '../../Behaviour/iHasShield';
import { iHasHealth } from '../../Behaviour/iHasHealth';
import { iAttacks } from '../../Behaviour/iAttacks';
import { iActsAsGroup } from '../../Behaviour/iActsAsGroup';
import { iStunnable } from '../../Behaviour/iStunnable';
import { iSpeaks } from '../../Behaviour/iSpeaks';

//Params
import { SpriteParameterList } from '../../Factory/SpriteParameterList';

export abstract class Boss extends Phaser.Sprite {

    /*=============================
    **Fields**
    =============================*/
    protected z_game: Breakout;
    protected z_attack: iAttacks;
    protected z_bossCollision: iCollidable;
    protected z_health: iHasHealth;
    protected z_shield: iHasShield;
    protected z_bossMovement: iMovable;
    protected z_stunBehaviour: iStunnable;
    protected z_ammoPool: iActsAsGroup;
    protected z_speaks: iSpeaks;

    protected z_baseHealth: number = 1;
    protected z_baseShield: number = 0;
    protected z_initialSpawnPositionX: number = 1;
    protected z_initialSpawnPositionY: number = 0;

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Breakout, params : SpriteParameterList) {
        super(params.game, params.x, params.y, params.key, params.frame);   
        this.z_game = game;

        this.initBossSettings();
        this.setBossAnimations();
        this.setAttackType();
        this.setMovementType();
        this.setCollisionType();
        this.setStunType();
        this.setAmmoType();
        this.setSpeakingType();
        this.setHealthType();
        this.setShieldType();
    }

    /*=============================
    **Properties**
    =============================*/
    //getters
    get Game(): Breakout
    { return this.z_game; }

    //Behaviours
    get Attack(): iAttacks
    { return this.z_attack; }

    get BrickCollision(): iCollidable
    { return this.z_bossCollision; }

    get Health(): iHasHealth
    { return this.z_health; }

    get Shield(): iHasShield
    { return this.z_shield; }

    get BossMovement(): iMovable
    { return this.z_bossMovement; }

    get StunBehaviour(): iStunnable
    { return this.z_stunBehaviour; }

    get AmmoPool(): iActsAsGroup
    { return this.z_ammoPool; }

    get SpeakingBehaviour(): iSpeaks
    { return this.z_speaks; }

    //Primitives
    get BaseHealth(): number
    { return this.z_baseHealth; }

    get BaseShield(): number
    { return this.z_baseShield; }


    //setters
    set Game(val: Breakout)
    { this.z_game = val; }

    //Behaviours
    set Attack(val: iAttacks)
    { this.z_attack = val; }

    set BrickCollision(val: iCollidable)
    { this.z_bossCollision = val; }

    set Health(val: iHasHealth)
    { this.z_health = val; }

    set Shield(val: iHasShield)
    { this.z_shield = val; }

    set BossMovement(val: iMovable)
    { this.z_bossMovement = val; }

    set StunBehaviour(val: iStunnable)
    { this.z_stunBehaviour = val; }

    set AmmoPool(val: iActsAsGroup)
    { this.z_ammoPool = val; }

    set SpeakingBehaviour(val: iSpeaks)
    { this.z_speaks = val; }

    //Primitives
    set BaseHealth(val: number)
    { this.z_baseHealth = val; }

    set BaseShield(val: number)
    { this.z_baseShield = val; }

    /*=============================
    **Methods**
    =============================*/
    private initBossSettings(): void {
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.bounce.set(1);
        this.anchor.set(0.5, 0.5);
        this.body.immovable = true;
        this.body.setSize(this.body.width * 0.4, this.body.height * 0.4);
    }

    //Styling
    protected abstract setBossAnimations();
    protected abstract killBoss();

    //Behaviours
    protected abstract setAttackType(): void;
    protected abstract setMovementType(): void;
    protected abstract setCollisionType(): void;
    protected abstract setStunType(): void;
    protected abstract setAmmoType(): void;
    protected abstract setSpeakingType(): void;
    protected abstract setHealthType(): void;
    protected abstract setShieldType(): void;

}


