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
    getChildGroup?(childType?:string): Phaser.Group;
    attackAsGroup?(target:Phaser.Sprite): void;
    moveAsGroup?(xCoordinate?: number, yCoordinate?:number): void;
    responseToChildDeath?(childCoordinateX?:number, childCoordinateY?:number): void;
    emptyGroupAlert?(): void;

}


