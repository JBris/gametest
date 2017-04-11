export abstract class Player {

    /*=============================
    **Fields**
    =============================*/
    private _name: string;
    private _score: number;
    private _lives: number;
    private _description?: string;

    /*=============================
    **Constructors**
    =============================*/
    constructor(name:string,score:number,lives:number,description?:string) {
        this._name = name;
        this._score = score;
        this._lives = lives;
        this._description = description;
    }

    /*=============================
    **Properties**
    =============================*/

    //getters
    get Name(): string
    { return this._name; }

    get Score(): number
    { return this._score; }

    get Lives(): number
    { return this._lives; }

    get Description(): string
    { return this._description; }

    //setters

    set Name(val: string)
    { this._name = val; }

    set Score(val: number)
    { this._score = val; }

    set Lives(val: number)
    { this._lives = val; }

    set Description(val: string)
    { this._description = val; }

    /*=============================
    **Methods**
    =============================*/
}



