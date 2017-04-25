//Behaviours
import { iCollidable } from '../../../Behaviour/iCollidable';

export abstract class BrickProjectile extends Phaser.Sprite implements iCollidable{

    /*=============================
    **Fields**
    =============================*/
    protected z_projectileSpeed: number = 0;
    
    /*=============================
    **Constructors
    =============================*/

    constructor(game: Phaser.Game, x: number, y: number,
        key: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number)
    {
        super(game, x, y, key, frame);   
        this.initProjectile();
        this.initAnimations();     
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    get ProjectileSpeed(): number
    { return this.z_projectileSpeed; }

    //setters

    set ProjectileSpeed(val: number)
    { this.z_projectileSpeed = val; }

    /*=============================
    **Methods**
    =============================*/
    collide(collidedWithType: string, collidedAgainst?: iCollidable): void
    {
        if (collidedWithType === "paddle" || collidedWithType === "projectile" || collidedWithType === "ball")
        {
            this.killProjectile();
        }
    }


    killProjectile(): void
    {
        if (this.animations.getAnimation('explode'))
            this.animations.play('explode');

        this.game.time.events.add(300, function()
            { this.kill(); }, this)
    }

    protected initProjectile(): void
    {
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.setSize(this.body.width * 0.35, this.body.height * 0.35);
    }

    protected abstract initAnimations(): void;

}


