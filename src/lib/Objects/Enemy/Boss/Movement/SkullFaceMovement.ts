//Boss
import { Boss } from '../Boss';

//Behaviours
import { iMovable } from '../../../Behaviour/iMovable';

export class SkullFaceMovement implements iMovable {

    /*=============================
    **Fields**
    =============================*/
    protected z_boss: Boss;
    private _leftCounter: number;
    private _rightCounter: number;
    private _loopCounter: number;
    private _speed: number;
    /*=============================
    **Constructors
    =============================*/

    constructor(boss: Boss) {
        this.z_boss = boss;
        this._leftCounter = 0;
        this._rightCounter = 2;
        this._loopCounter = 0;
        this._speed = 1000;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters

    /*=============================
    **Methods**
    =============================*/
    move(): void
    {
        this.initMovementChain();
    }

    protected initMovementChain(): void
    {
        let moveDown: Phaser.Tween = this.z_boss.Game.add.tween(this.z_boss).to({
            x: this.z_boss.Game.world.width * 0.2, y: 0.15 * this.z_boss.Game.world.height
        }, 1000, Phaser.Easing.Linear.None);

        moveDown.onComplete.addOnce(this.moveCentre, this);
        moveDown.start();

    }

    protected moveCentre(): void
    {
        let moveCentre : Phaser.Tween = this.z_boss.Game.add.tween(this.z_boss).to({
            x: this.z_boss.Game.world.centerX
        }, this._speed, Phaser.Easing.Linear.None).start();

        this.buildRage();

        if (this._rightCounter < 3)
        {
            moveCentre.onComplete.addOnce(this.moveRight, this);

        } 
        else moveCentre.onComplete.addOnce(this.moveLeft, this);
    }

    protected moveLeft(): void {

        let moveLeft: Phaser.Tween = this.z_boss.Game.add.tween(this.z_boss).to({
            x: this.z_boss.Game.world.width * 0.15}, this._speed, Phaser.Easing.Linear.None);

        this._leftCounter++;
        if (this._leftCounter >= 3) this._rightCounter = 0;

        moveLeft.onComplete.addOnce(this.moveCentre, this);
        moveLeft.start();
    }

    protected moveRight(): void {

        let moveRight: Phaser.Tween = this.z_boss.Game.add.tween(this.z_boss).to({
            x: this.z_boss.Game.world.width * 0.85
        }, this._speed, Phaser.Easing.Linear.None);

        this._rightCounter++;
        if (this._rightCounter >= 3) this._leftCounter = 0;

        moveRight.onComplete.addOnce(this.moveCentre, this);
        moveRight.start();
    }

    protected buildRage(): void
    {
        this._loopCounter++;

        if (this._loopCounter > 8) {
            this._loopCounter = -14;
            this._speed /= 4;
            this.z_boss.Game.add.tween(this.z_boss).to({
                y: 0.3 * this.z_boss.Game.world.height
            }, this._speed, Phaser.Easing.Linear.None, true);

            this.z_boss.game.time.events.add(8000, function () {
                this._speed *= 4;
                this.z_boss.Game.add.tween(this.z_boss).to({
                    y: 0.15 * this.z_boss.Game.world.height
                }, this._speed, Phaser.Easing.Linear.None, true);
            }, this)
        }
    }
}


