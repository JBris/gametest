export interface iCollidable
{
    /*=============================
    **Fields**
    =============================*/
    collide(collidedWithType: string, collidedAgainst?: iCollidable, changeInVelocity?: number): void;
    receiveCollisionDamage?(healthDamage :number, shieldDamage?:number);
}