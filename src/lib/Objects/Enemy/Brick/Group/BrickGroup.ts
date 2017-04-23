import { Breakout } from '../../../../../Breakout';

//Parent
import { BreakoutGroup } from '../../../Group/BreakoutGroup';

export class BrickGroup extends BreakoutGroup {

    /*=============================
    **Fields**
    =============================*/
    private _brick: Phaser.Sprite;

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Breakout)
    {
        super(game);

    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters

    /*=============================
    **Methods**
    =============================*/

    createBreakoutGroup(key: string[], groupSize?: number, frame?: any): void {
        if (frame === undefined) frame = 0;
        if (groupSize === undefined) groupSize = 40;
    
        let yPosition: number = 0 + this.game.world.height * 0.1;
        for (let rows: number = 0; rows < 4; rows++) {
            let xPosition: number = 0 + this.game.world.width * 0.05;
            for (let columns: number = 0; columns < 8; columns++) {
                let newBrick = key.shift();
                if (newBrick !== "none")
                    this.createBrick(newBrick, xPosition, yPosition);
                xPosition = this._brick.x + this.game.world.width * 0.1;
                if (key.length === 0) break;
            }
            yPosition = this._brick.y + this.game.world.height * 0.1;
        }

        this.initGroupValues();
        this.game.add.tween(this).to({ x: this.game.width * 0.15 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true).start();
    }

    createBrick(key: string , xPosition : number, yPosition : number ) : void
    {
        this._brick = this.create(xPosition, yPosition, key);
        this._brick.body.bounce.set(1);
        this._brick.body.immovable = true;
        this._brick.body.setSize(this._brick.body.width * 0.4, this._brick.body.height * 0.4);
        this.z_game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._brick], 0.08, 0.08);
        let float = this._brick.animations.add('float', [0, 1, 0, 1, 0, 1, 0, 1], 2, true);
        float.play();
    }
   
}


