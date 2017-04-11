import { iUsesRelativeScaling } from '../Scaling/iUsesRelativeScaling';

export abstract class Ball extends Phaser.Sprite, implements iUsesRelativeScaling {

    relativeScalingXValue: number;
    relativeScalingYValue: number;

    /*=============================
    **Fields**
    =============================*/
    protected z_baseVelocityX: number;
    protected z_baseVelocityY: number;
    protected z_ballType: number;

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Phaser.Game, x: number, y: number, ballType: number, relativeScalingXValue?: number, relativeScalingYValue?: number, baseVelocityX?: number, baseVelocityY?: number,
        key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number) {
        super(game, x, y, key, frame);

        this.z_baseVelocityX = baseVelocityX;
        this.z_baseVelocityY = baseVelocityY;
        this.z_ballType = ballType;

        this.relativeScalingXValue = relativeScalingXValue;
        this.relativeScalingYValue = relativeScalingYValue;

        this.initBallPhysics();
        this.initBallAnimations();
        this.initDefaultBehaviour();

    }

    /*=============================
    **Properties**
    =============================*/
    //getters
    get BaseVelocityX(): number { return this.z_baseVelocityX; }

    get BaseVelocityY(): number { return this.z_baseVelocityY; }

    get BallType(): number { return this.z_ballType; }

    //setters

    set BaseVelocityX(val: number) { this.z_baseVelocityX = val;}

    set BaseVelocityY(val:number) { this.z_baseVelocityY = val;}

    set BallType(val: number) { this.z_ballType = val; }

    /*=============================
    **Methods**
    =============================*/

    abstract initBallPhysics(): void;
    abstract initBallAnimations(): void;
    abstract initDefaultBehaviour(): void;

    ballMove(velocityX?: number, velocityY?: number) {
        if (velocityX === null)
            velocityX = this.z_baseVelocityX;

        if (velocityY === null)
            velocityY = this.z_baseVelocityY;

        this.body.velocity.set(velocityX, velocityY);
    }

    scaleSpriteRelatively(game: Phaser.Game) 
    {
            this.width = game.world.width * this.relativeScalingXValue;
            this.height = game.world.height * this.relativeScalingYValue;
    }

}


