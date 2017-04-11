import { ImageScaler } from '../Engine/ImageScaler';
import { Config } from '../../../config/Config';
import { IPlayer } from '../Objects/Player/IPlayer'

export class MainMenu extends Phaser.State
{
    /*=============================
    **Fields**
    =============================*/
    private _background: Phaser.Image;
    private _title: Phaser.Sprite;
    private _playButton: Phaser.Button;
    private _offButton: Phaser.Button;
    private _music: Phaser.Sound;
    private _player: IPlayer;

    /*=============================
    **Constructors
    =============================*/

    constructor(config? : Config, player?: Player) {
        super();
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

    preload()
    {
        //background
        this._background = this.game.add.image(0, 0, '1st-sky');
        ImageScaler.addScaledBackground(this._background, this.game);

        //logo
        this._title = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'title');
        ImageScaler.scaleSprite(this._title, this.game);
   
        this._title.anchor.set(0.5, 0.5);
        this._title.animations.add('flash', [0, 1, 2, 1,0], 24);
        this._title.animations.play('flash', 24, true);
    }

    create()
    {
        //music
        this._music = this.game.add.audio('opening', 1, true);
        this._music.onDecoded.add(() => this._music.fadeIn(6000), this);

        //buttons
        this._playButton = this.game.add.button(this._title.x + (this.game.world.width * 0.3), this._title.y, 'play-button', this.beginGame, this, 1, 0, 1, 0);
        this._playButton.anchor.set(0.5, 0.5);
        ImageScaler.scaleSprite(this._playButton, this.game);


        this._offButton = this.game.add.button(this._playButton.x, this._title.y + (this.game.world.height * 0.3), 'off-button', this.endGame, this, 1, 0, 1, 0);
        this._offButton.anchor.set(0.5, 0.5);
        ImageScaler.scaleSprite(this._offButton, this.game);

    }

    beginGame()
    {
        
    }

    endGame() {
        this.game.destroy();
    }

}

/*Ball.MainMenu = function(game) {};
Ball.MainMenu.prototype = {
	create: function() {
		this.add.sprite(0, 0, 'screen-mainmenu');
		this.gameTitle = this.add.sprite(Ball._WIDTH*0.5, 40, 'title');
		this.gameTitle.anchor.set(0.5,0);
		this.startButton = this.add.button(Ball._WIDTH*0.5, 200, 'button-start', this.startGame, this, 2, 0, 1);
		this.startButton.anchor.set(0.5,0);
		this.startButton.input.useHandCursor = true;

		// button to "read the article"
	},
	startGame: function() {
		this.game.state.start('Howto');
	}
};*/