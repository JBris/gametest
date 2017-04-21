import { iMovable } from '../Behaviour/iMovable';
import { iCollidable } from '../Behaviour/iCollidable';
import { iStunnable } from '../Behaviour/iStunnable';

import { SpriteParameterList } from '../Factory/SpriteParameterList';

export abstract class Paddle extends Phaser.Sprite {

    /*=============================
    **Fields**
    =============================*/
    protected z_paddleMovement: iMovable;
    protected z_paddleCollision: iCollidable;
    protected z_stunBehaviour: iStunnable;
    protected z_basePhysicalDamage: number = 0;
    protected z_baseShieldDamage: number = 0;
    protected z_baseStunDuration: number = 0; //seconds
    protected z_baseNumberOfShots: number = 0; //seconds

    /*=============================
    **Constructors
    =============================*/

    constructor(parameterList: SpriteParameterList)
    {
        super(parameterList.game, parameterList.x, parameterList.y, parameterList.key, parameterList.frame);
        this.initPaddleSettings();
        this.initAnimations();
        this.setMovementType();
        this.setCollisionType();
        this.setStunType();
    }

    /*=============================
    **Properties**
    =============================*/
    //getters
    get PaddleMovement(): iMovable {
        return this.z_paddleMovement;
    }

    get PaddleCollision(): iCollidable {
        return this.z_paddleCollision;
    }

    get StunBehaviour(): iStunnable {
        return this.z_stunBehaviour;
    }

    get BasePhysicalDamage(): number {
        return this.z_basePhysicalDamage;
    }

    get BaseShieldDamage(): number {
        return this.z_baseShieldDamage;
    }

    get BaseStunDuration(): number {
        return this.z_baseStunDuration;
    }

    get BaseNumberOfShots(): number {
        return this.z_baseNumberOfShots;
    }
    //setters
    set PaddleMovement(val: iMovable) {
        this.z_paddleMovement = val;
    }

    set PaddleCollision(val: iCollidable) {
        this.z_paddleCollision = val;
    }

    set StunBehaviour(val: iStunnable) {
        this.z_stunBehaviour = val;
    }

    set BasePhysicalDamage(val: number) {
        this.z_basePhysicalDamage = val;
    }

    set BaseShieldDamage(val: number) {
        this.z_baseShieldDamage = val;
    }

    set BaseStunDuration(val: number) {
        this.z_baseStunDuration = val;
    }

    set BaseNumberOfShots(val: number) {
        this.z_baseNumberOfShots = val;
    }
    /*=============================
    **Methods**
    =============================*/
    private initPaddleSettings():void {
        this.anchor.set(0.5, 0.5);
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.immovable = true;
        this.body.setSize(this.body.width * 0.8, this.body.height / 4);
    }

    resetPaddle(): void 
    {
        this.reset(this.game.world.centerX, this.game.world.height - this.game.world.height * 0.1);
    }

    protected abstract initAnimations(): void;
    protected abstract setMovementType(): void;
    protected abstract setCollisionType(): void;
    protected abstract setStunType(): void;
}


