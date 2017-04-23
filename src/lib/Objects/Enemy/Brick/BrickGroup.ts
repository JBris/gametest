//Behaviours
import { EnemyDataNode } from '../EnemyDataNode';

export class BrickGroup {//extends BreakoutGroup {

    /*=============================
    **Fields**
    =============================*/
    //randomized enemies
    private _enemyList: Array<string>;

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Phaser.Game)
    {
        //super(game);
        this._enemyList = new Array<string>();

    }

    /*=============================
    **Properties**
    =============================*/
    //getters
    get EnemyList(): Array<string>
    { return this._enemyList; }



    //setters
    set EnemyList(val: Array<string>)
    { this._enemyList = val; }

    /*=============================
    **Methods**
    =============================*/
    initEnemyList(enemyList: Array<EnemyDataNode>): void {
        for (let enemy of enemyList) {
            for (let i = 0; i < enemy.value; i++) {
                this._enemyList.push(enemy.key);
            }
        }

        //this.shuffleList(this._enemyList);
        console.log(this._enemyList);
    }

    generateGroupField(randomSeed : string): void {
     /*   let yPosition: number = 0 + this.game.world.height * 0.1;

        for (let rows: number = 0; rows < 4; rows++) {
            let xPosition: number = 0 + this.game.world.width * 0.05;
            for (let columns: number = 0; columns < 8; columns++) {
                this._brick = this._bricks.create(xPosition, yPosition, 'blue-brick');
                this._brick.body.bounce.set(1);
                this._brick.body.immovable = true;
                this._brick.body.setSize(this._brick.body.width * 0.4, this._brick.body.height * 0.4);
                this._game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._brick], 0.08, 0.08);
                let float = this._brick.animations.add('float', [0, 1, 0, 1, 0, 1, 0, 1], 2, true);
                float.play();
                xPosition = this._brick.x + this.game.world.width * 0.1;
            }
            yPosition = this._brick.y + this._game.world.height * 0.1;
        }*/
    }
   
}


