export class SpriteManager {

    /*=============================
    **Fields**
    =============================*/
    private _frameData: JSON;
    /*=============================
    **Constructors
    =============================*/
    constructor(game : Phaser.Game)
    {
        if (!game.cache.checkKey(Phaser.TEXT, 'frame-data'))
            game.load.text('frame-data', '../data/frame-sizes.json');
                    
        this._frameData = JSON.parse('frame-data');
    }
    /*=============================
    **Properties**
    =============================*/
    //getters

    //readonly
    get FrameData () : JSON 
    { return this._frameData; }

    //setters
    /*=============================
    **Methods**
    =============================*/

  
    
}


