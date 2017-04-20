import { iMovable } from '../Behaviour/iMovable';
import { iCollidable } from '../Behaviour/iCollidable';

import { SpriteParameterList } from '../Factory/SpriteParameterList';

export abstract class Ball extends Phaser.Sprite {

    /*=============================
    **Fields**
    =============================*/
    protected z_ballMovement: iMovable;
    protected z_ballCollision: iCollidable;
    protected z_baseXVelocity: number = 0;
    protected z_baseYVelocity: number = 0;
    protected z_basePhysicalDamage: number = 0;
    protected z_baseShieldDamage: number = 0;

    /*=============================
    **Constructors
    =============================*/

    constructor(parameterList: SpriteParameterList)
    {
   
        super(parameterList.game, parameterList.x, parameterList.y, parameterList.key, parameterList.frame);
        this.initBallSettings();
        this.initAnimations();
        this.setMovementType();
        this.setCollisionType();
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    get BallMovement(): iMovable {
        return this.z_ballMovement;
    }

    get BallCollision(): iCollidable {
        return this.z_ballCollision;
    }

    get BaseXVelocity(): number
    {
        return this.z_baseXVelocity;
    }

    get BaseYVelocity(): number {
        return this.z_baseYVelocity;
    }

    get BasePhysicalDamage(): number {
        return this.z_basePhysicalDamage;
    }

    get BaseShieldDamage(): number {
        return this.z_baseShieldDamage;
    }

    //setters

    set BallMovement(val: iMovable) {
        this.z_ballMovement = val;
    }

    set BallCollision(val: iCollidable) {
        this.z_ballCollision = val;
    }

    set BaseXVelocity(val: number ){
        this.z_baseXVelocity = val;
    }

    set BaseYVelocity(val: number) {
        this.z_baseYVelocity = val;
    }

    set BasePhysicalDamage(val: number) {
        this.z_basePhysicalDamage = val;
    }

    set BaseShieldDamage(val: number) {
        this.z_baseShieldDamage = val;
    }

    /*=============================
    **Methods**
    =============================*/
    private initBallSettings()
    {
        this.anchor.set(0.5, 0.5);
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.bounce.set(1);
        this.body.setSize(this.body.width, this.body.height / 4);
        this.checkWorldBounds = true;
    }

    disableBall(): void
    {
        this.body.velocity.set(0, 0);
        this.body.moves = false;
        this.body.disable;
    }

    protected abstract initAnimations() : void;
    protected abstract setMovementType(): void;
    protected abstract setCollisionType(): void;
}


