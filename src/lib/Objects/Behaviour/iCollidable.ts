export interface iCollidable
{
    /*=============================
    **Fields**
    =============================*/
    collide(collidedWith: string, spriteCollidedAgainst? : Phaser.Sprite): void;
}