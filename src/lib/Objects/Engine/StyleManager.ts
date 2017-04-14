export class StyleManager {

    /*=============================
    **Fields**
    =============================*/
    private _game: Phaser.Game;

    //default styles
    static readonly font: string = "Signika, sans-serif";
    static readonly fontSizePercentage: string = "200%";
    static readonly fontSizeEm: string = "1.6em%";
    static readonly fill: string = "#ffffff";
    static readonly textColour: string = "#DEAE36";
    static readonly leftAlign: string = "left";
    static readonly rightAlign: string = "right";
    static readonly centerText: string = "center";
    static readonly fontWeight: string = "bold";
    static readonly fontStyle: string = "normal";

    private _presentedText: Phaser.Text;

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Phaser.Game)
    {
        this._game = game;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters

    /*=============================
    **Methods**
    =============================*/

    positionTextTopLeft(text: string, styles? :any): void
    {

        if (styles !== null || styles !==undefined)
            this._presentedText = this._game.add.text(0 + 0.1 * this._game.world.width, 0 + 0.1 * this._game.world.height, text, styles);
        else
        {
            this._presentedText = this._game.add.text(0 + 0.1 * this._game.world.width, 0 + 0.1 * this._game.world.height, text, null);

            this.styleTextWithDefaults(this._presentedText);
        }

        this._presentedText.anchor.set(0, 0);
    }

    positionTextTopRight(text: string, styles?: any): void
    {

        if (styles !== null || styles !== undefined)
            this._presentedText = this._game.add.text(this._game.world.width - 0.1 * this._game.world.width, 0 + 0.1 * this._game.world.height, text, styles);
        else {
            this._presentedText = this._game.add.text(this._game.world.width - 0.1 * this._game.world.width, 0 + 0.1 * this._game.world.height, text, null);
            this.styleTextWithDefaults(this._presentedText);
        }

        this._presentedText.anchor.set(1, 0);
    }

    positionTextBottomLeft(text: string, styles?: any): void
    {

        if (styles !== null || styles !== undefined)
            this._presentedText = this._game.add.text(0 + 0.1 * this._game.world.width, this._game.world.height - 0.1 * this._game.world.height, text, styles);
        else {
            this._presentedText = this._game.add.text(0 + 0.1 * this._game.world.width, this._game.world.height - 0.1 * this._game.world.height, text, null);
            this.styleTextWithDefaults(this._presentedText);
        }

        this._presentedText.anchor.set(0, 1);
    }

    positionTextBottomRight(text: string, styles?: any): void {

        if (styles !== null || styles !== undefined)
            this._presentedText = this._game.add.text(this._game.world.width - 0.1 * this._game.world.width,
                this._game.world.height - 0.1 * this._game.world.height, text, styles);
        else {
            this._presentedText = this._game.add.text(this._game.world.width - 0.1 * this._game.world.width,
                this._game.world.height - 0.1 * this._game.world.height, text, styles);

            this.styleTextWithDefaults(this._presentedText);
        }

        this._presentedText.anchor.set(1, 1);
    }

    styleTextWithDefaults(text :Phaser.Text):void
    {
        this._presentedText.font = StyleManager.font;
        this._presentedText.fill = StyleManager.fill;
        this._presentedText.addColor(StyleManager.textColour, 0);
        this._presentedText.fontSize = StyleManager.fontSizePercentage;
        this._presentedText.fontSize = StyleManager.fontSizeEm;
        this._presentedText.addFontStyle(StyleManager.fontStyle, 0);
        this._presentedText.addFontWeight(StyleManager.fontWeight, 0);
        this._presentedText.smoothed = true;
    }

}


