//Paddle
import { Paddle } from '../Paddle';

//Parent
import { PaddleAttack } from './PaddleAttack';

export class PaddleAttackMulti extends PaddleAttack{

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(paddle: Paddle)
    {
        super(paddle);
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
        let numberOfShots: number = 3 + this.z_paddle.BaseNumberOfShots;

        this.z_paddle.game.time.events.repeat(Phaser.Timer.SECOND * 0.35, numberOfShots, this.fireMultipleShots, this);
    }

    protected fireMultipleShots(): void {
        this.z_paddleProjectile = this.z_paddle.AmmoPool.getFirstExistsInGroup();
        if (this.z_paddleProjectile) {

            if (this.z_paddleProjectile.animations.getAnimation('fly')) this.z_paddleProjectile.animations.play('fly', 6, true);
            if (this.z_paddle.game.cache.checkSoundKey('bullet-fire')) this.z_paddle.game.sound.play('bullet-fire');

            this.z_paddleProjectile.reset(this.z_paddle.x, this.z_paddle.y + this.z_paddle.height * 0.2);
            this.z_paddleProjectile.body.velocity.y = this.z_paddleProjectile.ProjectileSpeed;
        }
    }
}


