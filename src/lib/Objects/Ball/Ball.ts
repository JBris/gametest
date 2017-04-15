import { iMovable } from '../MovableBehaviour/iMovable';
import { MediumMovement } from '../MovableBehaviour/MediumMovement';
import { BallParameters } from './BallParameters';

export abstract class Ball extends Phaser.Sprite  {

    /*=============================
    **Fields**
    =============================*/

    protected z_defaultDamage: number;
    protected z_defaultMovementType: iMovable;

    protected z_params: BallParameters;

    /*=============================
    **Constructors
    =============================*/

    constructor(ballParameters: BallParameters) {
        super(ballParameters.game, ballParameters.x, ballParameters.y, ballParameters.key, ballParameters.frame);
        this.z_params = ballParameters;
        this.enableAnimations();
        this.initBallPhysics();
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //readonly
    get Params(): BallParameters
    { return this.z_params; }

    //setters

    /*=============================
    **Methods**
    =============================*/

    initBallPhysics() {
        this.anchor.set(0.5);
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.bounce.set(1);
        this.checkWorldBounds = true;
    }

    setMovementType(movementType?: iMovable) {
        if (movementType === null || movementType === undefined)
            movementType = new MediumMovement();
        this.z_params.MovementType = movementType;
    }

    abstract enableAnimations(): void;

    initDefaultBehaviour() {
        if (this.z_params.Damage === null)
            this.z_params.Damage = this.z_defaultDamage;
        if (this.z_params.MovementType === null || this.z_params.MovementType === undefined)
            this.z_params.MovementType = this.z_defaultMovementType;
    }
}


