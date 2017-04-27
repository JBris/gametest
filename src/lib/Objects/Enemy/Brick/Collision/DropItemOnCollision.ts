import { iCollidable } from '../../../Behaviour/iCollidable';

import { Brick } from '../Brick';

export class DropItemOnCollision implements iCollidable {

    /*=============================
    **Fields**
    =============================*/
    protected z_brick: Brick;
    private _dropDebouncer: number;
    /*=============================
    **Constructors**
    =============================*/
    constructor(brick: Brick) {
        this.z_brick = brick;
        this._dropDebouncer = 0;
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

            if (this.z_brick.DropsItems && this._dropDebouncer < this.z_brick.game.time.now)
                this.z_brick.DropPool.spawnDrop(this.z_brick.x, this.z_brick.y); 

            this._dropDebouncer = this.z_brick.game.time.now + 1000;
        }

    }

    receiveCollisionDamage(healthDamage: number, shieldDamage: number) {
        if (!this.z_brick.Shield.shieldDisabled)
            this.z_brick.Shield.damageShield(shieldDamage, healthDamage);
        else this.z_brick.Health.damageHealth(healthDamage, shieldDamage);
    }
}


