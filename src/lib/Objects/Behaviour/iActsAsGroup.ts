export interface iActsAsGroup {

    /*=============================
    **Fields**
    =============================*/
    
    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/
    createGroup(key: string | string[], groupSize?: number, frame?: any): void;
    clearGroup(): void;
    getFirstExistsInGroup(): any;
    initGroupValues(): void;

    //optionals
    getAmmunition?(ammoType?:string): Phaser.Group;
    attackAsGroup?(target:Phaser.Sprite): void;
    moveAsGroup?(xCoordinate?: number, yCoordinate?:number): void;
    lastChildBehaviour?(): void;
    emptyGroupAlert?(): void;

}


