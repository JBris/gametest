import { ImageScaler } from '../Engine/ImageScaler';

export class MainMenu extends Phaser.State
{
    /*=============================
    **Fields**
    =============================*/
    private _background: Phaser.Image;
    private _title: Phaser.Sprite;
    private _playButton: Phaser.Sprite;
    private _offButton: Phaser.Sprite;
    private _music: Phaser.Sound;

    /*=============================
    **Constructors
    =============================*/

    constructor() {
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
    }

    create()
    {
        //music
        this._music = this.game.add.audio('opening', 1, true);
        this._music.onDecoded.add(() => this._music.fadeIn(6000), this);

        //sprites
        var ball = this.game.add.sprite(this.game.world.width * 0.5, this.game.world.height - 25, 'ball', 2);
        //ImageScaler.scaleSprite(ball, this.game);
       


        //ball.animations.add('wobble', [0, 1, 0, 2, 0, 1, 0, 2, 0], 24);
        ball.anchor.set(0.5);
        this.game.physics.enable(ball, Phaser.Physics.ARCADE);
        ball.body.collideWorldBounds = true;
        ball.body.bounce.set(1);
        ball.checkWorldBounds = true;
        //ball.events.onOutOfBounds.add(ballLeaveScreen, this);
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