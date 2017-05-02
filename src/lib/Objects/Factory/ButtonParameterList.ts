import { iParameterList } from './iParameterList';

export class ButtonParameterList implements iParameterList{

    /*=============================
    **Fields**
    =============================*/
    game: Phaser.Game;
    x: number;
    y: number;
    key: string;
    callback: Function;
    callbackContext: any;
    overFrame: any;
    outFrame: any;
    downFrame: any;
    upFrame: any;
    group: Phaser.Group;

    /*=============================
    **Properties**
    =============================*/
    constructor(game: Phaser.Game, x?: number, y?: number, key?: string,
        callback?: Function, callbackContext?: any, overFrame?: string | number, outFrame?: string | number, downFrame?: string | number,
        upFrame? : string | number, group? : Phaser.Group)
    {
        this.game = game;
        this.x = x;
        this.y = y;
        this.key = key;
        this.callback = callback;
        this.callbackContext = callbackContext;
        this.overFrame = overFrame;
        this.outFrame = outFrame;
        this.downFrame = downFrame;
        this.upFrame = upFrame;
        this.group = group;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters

    /*=============================
    **Methods**
    =============================*/
    setParameters(x?: number, y?: number, key?: string,
        callback?: Function, callbackContext?: any, overFrame?: string | number, outFrame?: string | number, downFrame?: string | number,
        upFrame?: string | number, group?: Phaser.Group)
    {
        this.x = x;
        this.y = y;
        this.key = key;
        this.callback = callback;
        this.callbackContext = callbackContext;
        this.overFrame = overFrame;
        this.outFrame = outFrame;
        this.downFrame = downFrame;
        this.upFrame = upFrame;
        this.group = group;
    }
}


