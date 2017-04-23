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

}


