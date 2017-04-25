//Paddle
import { Paddle } from '../Paddle';
//Behaviours
import { iDamagesShield } from '../../Behaviour/iDamagesShield';
import { iDamagesHealth } from '../../Behaviour/iDamagesHealth';
import { iCollidable } from '../../Behaviour/iCollidable';

//Params
import { SpriteParameterList } from '../../Factory/SpriteParameterList';

export abstract class PaddleProjectile extends Phaser.Sprite implements iCollidable{

    /*=============================
    **Fields**
    =============================*/
    protected z_paddle: Paddle;
    protected z_projectileSpeed: number = 0;
    shieldDamageValue: number = 0;
    healthDamageValue: number = 0;
    private _soundDebouncer: number = 0;

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Phaser.Game, x: number, y: number,
        key: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number)
    {
        super(game, x, y, key, frame);   
        this.initAnimations();     
    }

    /*=============================
    **Properties**
    =============================*/
    //getters


    get ProjectileSpeed(): number
    { return this.z_projectileSpeed; }

    get Paddle(): Paddle
    { return this.z_paddle; }


    //setters
    set Paddle(val: Paddle)
    { this.z_paddle = val; }

    set ProjectileSpeed(val: number)
    { this.z_projectileSpeed = val; }

    /*=============================
    **Methods**
    =============================*/
    collide(collidedWithType: string, collidedAgainst?: iCollidable): void
    {
        if (collidedWithType === "brick" || collidedWithType === "boss")
        {
            let totalHealthDamage = this.healthDamageValue + this.z_paddle.BasePhysicalDamage;
            let totalShieldDamage = this.shieldDamageValue + this.z_paddle.BaseShieldDamage;

            collidedAgainst.receiveCollisionDamage(totalHealthDamage, totalShieldDamage);

            this.killProjectile();
        }

        if (collidedWithType === "projectile")
        { this.killProjectile(); }
    }

    killProjectile(): void {

        if (this.animations.getAnimation('explode'))
            this.animations.play('explode');

        if (this.game.cache.checkSoundKey('ball-to-brick') && this._soundDebouncer < this.game.time.now)
            this.game.sound.play('ball-to-brick');

        this.game.time.events.add(300, function ()
        { this.kill(); }, this)

        this._soundDebouncer = this.game.time.now + 1000;
    }

    protected abstract initAnimations(): void;

}


