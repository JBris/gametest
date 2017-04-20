import { iPaddleMovement } from './Movement/iPaddleMovement';
import { iCollidable } from '../Behaviour/iCollidable';

import { SpriteParameterList } from '../Factory/SpriteParameterList';

export abstract class Paddle extends Phaser.Sprite {

    /*=============================
    **Fields**
    =============================*/
    protected z_paddleMovement: iPaddleMovement;
    protected z_paddleCollision: iCollidable;
    protected z_basePhysicalDamage: number = 0;
    protected z_baseShieldDamage: number = 0;
    protected z_baseStunDuration: number = 0; //seconds

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

    }

    /*=============================
    **Properties**
    =============================*/
    //getters
    get PaddleMovement(): iPaddleMovement {
        return this.z_paddleMovement;
    }

    get PaddleCollision(): iCollidable {
        return this.z_paddleCollision;
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

    //setters
    set PaddleMovement(val: iPaddleMovement) {
        this.z_paddleMovement = val;
    }

    set PaddleCollision(val: iCollidable) {
        this.z_paddleCollision = val;
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

}


