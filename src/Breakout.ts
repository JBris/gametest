export class Breakout extends Phaser.Game
{

    /*=============================
    **Fields**
    =============================*/
    _gameName: string; 
    _gameDescription: string;
    _playerName: string;

    /*=============================
    **Constructors
    =============================*/

    constructor()
    {
        super();
        this._gameName = "Breakout Turbo";
        this._gameDescription = "Hit the ball with the paddle to ensure that the ball does not fall below the bottom edge of the screen." + "<br>" +
            "Shattered bricks will drop coins. Collect coins to gain points." + "<br>" +
            "Enemies can attack your ball and paddle. Watch out!";
        this.setOptions();
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

    setOptions()//Options are alterable at run-time
    {

    }

    preload() {

    }
}
