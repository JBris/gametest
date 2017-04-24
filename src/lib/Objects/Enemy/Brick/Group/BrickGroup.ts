import { Breakout } from '../../../../../Breakout';

//Parent
import { BreakoutGroup } from '../../../Group/BreakoutGroup';

//Children
import { Brick } from '../Brick';
import { BlueBrick } from '../BlueBrick';

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
        this.setAll('Game', this.z_game);
    }

    createBrick(key: string , xPosition : number, yPosition : number ) : void
    {
        this.classType = BlueBrick;
            /*if (key === "gold-brick") this.classType = GoldBrick;
        else if (key === "green-brick") this.classType = GreenBrick;
        else if (key === "teal-brick") this.classType = TealBrick;
        else if (key === "blue-brick") this.classType = BlueBrick;
        else this.classType = Phaser.Sprite;*/

        this._brick = this.create(xPosition, yPosition, key);
        this.z_game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._brick], 0.08, 0.08);
        if (this._brick.animations.getAnimation('float')) this._brick.animations.play('float');
    }

    moveAsGroup(xCoordinate?: number): void
    {
        if (xCoordinate === undefined) xCoordinate = this.game.width * 0.15;

        this.game.add.tween(this).to({ x: xCoordinate}, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true).start();

    }

    lastChildBehaviour(): void
    {
        let lastBrick: Brick;
        if (this.countLiving() === 1)
            lastBrick = this.getFirstAlive();
        lastBrick.LastGroupMemberReaction.reactToTheSituation();
    }

   
}


