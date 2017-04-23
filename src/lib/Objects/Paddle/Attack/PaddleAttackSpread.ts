//Paddle
import { Paddle } from '../Paddle';

//Parent
import { PaddleAttack } from './PaddleAttack';

export class PaddleAttackSpread extends PaddleAttack{

    /*=============================
    **Fields**
    =============================*/
    private _gravity: number;
    /*=============================
    **Constructors
    =============================*/

    constructor(paddle: Paddle)
    {
        super(paddle);
        this._gravity = -2000;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters

    /*=============================
    **Methods**
    =============================*/

    protected launchProjectileAttack(): void {
        let numberOfShots : number = 3 + this.z_paddle.BaseNumberOfShots;
  
        this.z_paddle.game.time.events.repeat(Phaser.Timer.SECOND * 0.1, numberOfShots, this.fireSpreadShot, this);
    }

    protected fireSpreadShot(): void {
        this.z_paddleProjectile = this.z_paddle.AmmoPool.getFirstExistsInGroup();

        if (this.z_paddleProjectile) {

            if (this.z_paddleProjectile.animations.getAnimation('fly')) this.z_paddleProjectile.animations.play('fly', 6, true);
            if (this.z_paddle.game.cache.checkSoundKey('bullet-fire')) this.z_paddle.game.sound.play('bullet-fire');

            this._gravity += 1000;
            if (this._gravity > 1000) this._gravity = -1000;

            this.z_paddleProjectile.reset(this.z_paddle.x, this.z_paddle.y + this.z_paddle.height * 0.2);
            this.z_paddleProjectile.body.velocity.y = this.z_paddleProjectile.ProjectileSpeed;
            this.z_paddleProjectile.body.gravity.x = this._gravity;
        }
    }
}


