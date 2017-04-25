export interface iAttacks {

    /*=============================
    **Fields**
    =============================*/
    attackEnabled?: boolean;
    primaryAttackTarget?: Phaser.Sprite;

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/
    attack(target?: Phaser.Sprite): void;
}


