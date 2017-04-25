import { Breakout } from '../../../Breakout';

export class StyleManager {

    /*=============================
    **Fields**
    =============================*/
    private _game: Breakout;

    //default styles
    static readonly font: string = "Signika, sans-serif";
    static readonly fontSize: string = "200%";
    static readonly fill: string = "#ffffff";
    static readonly textColour: string = "#DEAE36";
    static readonly leftAlign: string = "left";
    static readonly rightAlign: string = "right";
    static readonly centerText: string = "center";
    static readonly fontWeight: string = "bold";
    static readonly fontStyle: string = "normal";

    private _presentedText: Phaser.Text;
    private _paddingSize: number = 0.05;
 
    /*=============================
    **Constructors
    =============================*/

    constructor(game: Breakout)
    {
        this._game = game;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    get PresentedText(): Phaser.Text
    { return this._presentedText; }

    get PaddingSize(): number
    { return this._paddingSize; }

    //setters
    set PresentedText(val: Phaser.Text)
    { this._presentedText = val; }

    set PaddingSize(val: number)
    { this._paddingSize = val; }

    /*=============================
    **Methods**
    =============================*/

    damageFlash(duration : number, colour? : number) :void
    {
        let defaultColour : number = 0xff0000;
        if (colour !== undefined && colour !== null) defaultColour = colour;
        this._game.camera.flash(defaultColour, duration);
    }

    fadeText(text : Phaser.Text, duration?:number) : void
    {
        if (duration === undefined) duration = 1500;
        this._game.add.tween(text).to({ y: 0 }, duration, Phaser.Easing.Linear.None, true);
        this._game.add.tween(text).to({ alpha: 0 }, duration, Phaser.Easing.Linear.None, true);
    }

    flashDamageText(text: string, xCoordinate:number, yCoordinate : number, colour?: string): void
    {
        //style text
        let damageText: Phaser.Text = this._game.add.text(xCoordinate, yCoordinate, text, null);
        this.styleTextWithDefaults(damageText);
        damageText.fontSize = "300%";

        //colour text
        if (colour === "health" || colour === undefined) colour = "#ff80bf";
        else if (colour === "shield") colour = "#b30059";
        damageText.addColor(colour, 0); 
        this.fadeText(damageText, 1000); 
    }

    positionTextCenter(text: string, styles?: any): Phaser.Text {

        if (styles !== null && styles !== undefined)
            this._presentedText = this._game.add.text(this._game.world.centerX, this._game.world.centerY, text, styles);
        else {
            this._presentedText = this._game.add.text(this._game.world.centerX, this._game.world.centerY, text, null);

            this.styleTextWithDefaults(this._presentedText);
        }

        this._presentedText.anchor.set(0.5, 0.5);
        return this._presentedText;
    }

    positionTextTopLeft(text: string, styles? :any): Phaser.Text
    {

        if (styles !== null && styles !==undefined)
            this._presentedText = this._game.add.text(0 + this._paddingSize * this._game.world.width, 0 + this._paddingSize * this._game.world.height, text, styles);
        else
        {
            this._presentedText = this._game.add.text(0 + this._paddingSize * this._game.world.width, 0 + this._paddingSize * this._game.world.height, text, null);

            this.styleTextWithDefaults(this._presentedText);
        }

        this._presentedText.anchor.set(0, 0);
        return this._presentedText;
    }

    positionTextTopRight(text: string, styles?: any): Phaser.Text
    {

        if (styles !== null && styles !== undefined)
            this._presentedText = this._game.add.text(this._game.world.width - this._paddingSize * this._game.world.width, 0 + this._paddingSize * this._game.world.height, text, styles);
        else {
            this._presentedText = this._game.add.text(this._game.world.width - this._paddingSize * this._game.world.width, 0 + this._paddingSize * this._game.world.height, text, null);
            this.styleTextWithDefaults(this._presentedText);
        }

        this._presentedText.anchor.set(1, 0);
        return this._presentedText;

    }

    positionTextBottomLeft(text: string, styles?: any): Phaser.Text
    {

        if (styles !== null && styles !== undefined)
            this._presentedText = this._game.add.text(0 + this._paddingSize * this._game.world.width, this._game.world.height - this._paddingSize * this._game.world.height, text, styles);
        else {
            this._presentedText = this._game.add.text(0 + this._paddingSize * this._game.world.width, this._game.world.height - this._paddingSize * this._game.world.height, text, null);
            this.styleTextWithDefaults(this._presentedText);
        }

        this._presentedText.anchor.set(0, 1);
        return this._presentedText;
    }

    positionTextBottomRight(text: string, styles?: any): Phaser.Text
    {

        if (styles !== null && styles !== undefined)
            this._presentedText = this._game.add.text(this._game.world.width - this._paddingSize * this._game.world.width * 2,
                this._game.world.height - this._paddingSize * this._game.world.height, text, styles);
        else {
            this._presentedText = this._game.add.text(this._game.world.width - this._paddingSize * this._game.world.width,
                this._game.world.height - this._paddingSize * this._game.world.height, text, styles);

            this.styleTextWithDefaults(this._presentedText);
        }

        this._presentedText.anchor.set(1, 1);
        return this._presentedText;
    }

    styleTextWithDefaults(text :Phaser.Text):void
    {
        this._presentedText.font = StyleManager.font;
        this._presentedText.fill = StyleManager.fill;
        this._presentedText.addColor(StyleManager.textColour, 0);
        this._presentedText.fontSize = StyleManager.fontSize;
        this._presentedText.addFontStyle(StyleManager.fontStyle, 0);
        this._presentedText.addFontWeight(StyleManager.fontWeight, 0);
        this._presentedText.smoothed = true;
    }

}


