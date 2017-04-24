import { iCollidable } from '../../../Behaviour/iCollidable';

import { Brick } from '../Brick';

export class NormalBrickCollision implements iCollidable {

    /*=============================
    **Fields**
    =============================*/
    protected z_brick: Brick;

    /*=============================
    **Constructors**
    =============================*/
    constructor(brick: Brick) {
        this.z_brick = brick;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters


    //setters

    /*=============================
    **Methods**
    =============================*/
    collide(collidedWithType: string): void {
        if (collidedWithType === "ball" || collidedWithType === "projectile")
        {
            if (this.z_brick.alpha === 1){
                this.z_brick.alpha = 0.5;
                this.z_brick.game.time.events.add
                    (1500, function () {
                        this.z_brick.alpha = 1;
                    }, this);
            }

        }

    }

    receiveCollisionDamage(healthDamage: number, shieldDamage: number) {
        if (!this.z_brick.Shield.shieldDisabled)
            this.z_brick.Shield.damageShield(shieldDamage, healthDamage);
        else this.z_brick.Health.damageHealth(healthDamage, shieldDamage);
    }
}


