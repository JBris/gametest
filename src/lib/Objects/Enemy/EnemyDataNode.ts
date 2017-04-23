import { iDataNode } from '../Engine/iDataNode';

export class EnemyDataNode implements iDataNode{

    /*=============================
    **Fields**
    =============================*/
    key: string;
    value: any;

    /*=============================
    **Constructors**
    =============================*/
    constructor(key: string, value: any)
    {
        this.key = key;
        this.value = value;
    }
    /*=============================
    **Properties**
    =============================*/
    //getters


    //setters


    /*=============================
    **Methods**
    =============================*/

}


