import { Ball } from './Ball';

export class NormalBall extends Ball{

    /*=============================
    **Fields**
    =============================*/


    /*=============================
    **Constructors
    =============================*/

    constructor(game: Phaser.Game, x: number, y: number, relativeScalingXValue?: number, relativeScalingY?: number, baseVelocityX?: number, baseVelocityY?: number,
        key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number) 
{
        super(game, x, y, 0, relativeScalingXValue, relativeScalingY, baseVelocityX, baseVelocityY);
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

    initBallPhysics()  {
        this.anchor.set(0.5);
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.bounce.set(1);
        this.checkWorldBounds = true;
    }

    initBallAnimations() {
        this.animations.add('ball-to-paddle', [3, 2, 1, 0], 24);
        this.animations.add('ball-to-brick', [3, 4, 1, 0], 24);
        this.animations.add('ball-to-boss', [3, 4, 1, 3, 4, 0], 24);
        this.animations.add('sleep', [1, 3, 1, 3], 24);
    }

    initDefaultBehaviour() {
        if (this.z_baseVelocityX === null)
            this.z_baseVelocityX = -75;
        if (this.z_baseVelocityY === null)
            this.z_baseVelocityY = -300;
        if (this.relativeScalingXValue === null)
            this.relativeScalingXValue = 0.1;
        if (this.relativeScalingYValue === null)
            this.relativeScalingYValue = 0.1;
    }

    scaleSprite(game: Phaser.Game) {
        this.width = game.world.width * this.relativeScalingXValue;
        this.height = game.world.height * this.relativeScalingYValue;
    }



}




