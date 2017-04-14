export class AssetScaler {

    /*=============================
    **Fields**
    =============================*/
    private readonly _scaleRatio: number = window.devicePixelRatio / 3;

    /*=============================
    **Constructors
    =============================*/

    constructor() {    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

    scaleAsset(asset) {
        asset.scale.setTo(this._scaleRatio, this._scaleRatio);
    } 
    
}


