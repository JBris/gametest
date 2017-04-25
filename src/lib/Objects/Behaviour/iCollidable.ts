export interface iCollidable
{
    /*=============================
    **Fields**
    =============================*/
    collide(collidedWithType: string, collidedAgainst?: iCollidable,
        changeInVelocity?: number, counterAttackTarget?: Phaser.Sprite): void;

    receiveCollisionDamage?(healthDamage :number, shieldDamage?:number);
}