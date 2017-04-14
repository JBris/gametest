import { iMovable } from '../MovableBehaviour/iMovable';
import { MediumMovement } from '../MovableBehaviour/MediumMovement';
import { iScalable } from '../ScalingBehaviour/iScalable';
import { BallParameters } from './BallParameters';

export abstract class Ball extends Phaser.Sprite implements iScalable {

    /*=============================
    **Fields**
    =============================*/

    xScaleValue: number;
    yScaleValue: number;
    protected z_defaultScale: number;
    protected z_defaultDamage: number;
    protected z_defaultMovementType: iMovable;

    protected z_params: BallParameters;

    /*=============================
    **Constructors
    =============================*/

    constructor(ballParameters: BallParameters) {
        super(ballParameters.game, ballParameters.x, ballParameters.y, ballParameters.key, ballParameters.frame);
        this.z_params = ballParameters;
        this.xScaleValue = this.z_params.RelativeScalingXValue;
        this.yScaleValue = this.z_params.RelativeScalingYValue;
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
        if (this.xScaleValue === null)
            this.xScaleValue = this.z_defaultScale;
        if (this.yScaleValue === null)
            this.yScaleValue = this.z_defaultScale;
        if (this.z_params.MovementType === null || this.z_params.MovementType === undefined)
            this.z_params.MovementType = this.z_defaultMovementType;
    }

    move(velocityX?: number, velocityY?: number) {
        this.z_params.MovementType.move(this, velocityX, velocityY);
    }

    scaleGameElement(game: Phaser.Game) {
           
        this.width = game.world.width * this.xScaleValue;
        this.height = game.world.height * this.yScaleValue;
    }

    setScale(xScaleValue: number, yScaleValue: number)
    {
        this.xScaleValue = xScaleValue;
        this.yScaleValue = yScaleValue;
    }

}


