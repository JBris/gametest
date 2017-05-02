import { Breakout } from '../../../Breakout';

//Groups
import { iActsAsGroup } from '../Behaviour/iActsAsGroup';
import { BrickGroup } from './Brick/Group/BrickGroup';

export class EnemyManager {

    /*=============================
    **Fields**
    =============================*/
    private _game: Breakout;

    //bricks
    private _brickGroup: iActsAsGroup;
    private _enemyList: Array<string>;

    //bosses
    private _boss: Phaser.Sprite;

    /*=============================
    **Constructors**
    =============================*/
    constructor(game: Breakout) {
        this._game = game;
        this._enemyList = new Array<string>();

    }
    /*=============================
    **Properties**
    =============================*/
    //getters
    get BrickGroup(): iActsAsGroup
    { return this._brickGroup; }

    //setters
    set BrickGroup(val: iActsAsGroup)
    { this._brickGroup = val; }

    /*=============================
    **Methods**
    =============================*/

    //=======================================================//
    //Brick
    //=======================================================//

    seedEnemyList(seedText: string): void {

        let parsedBrickSeed: Object = JSON.parse(seedText);

        for (let brick in parsedBrickSeed)
        {
            for (let brickCount: number = 0; brickCount < parsedBrickSeed[brick]; brickCount++)
                this._enemyList.push(brick);
        }
    }

    createEnemyGroupWithSeed(): void
    {
        this._brickGroup = new BrickGroup(this._game);
        this._brickGroup.createGroup(this._enemyList);
    }

    randomiseEnemySeed(): void
    {
        this._game.BreakoutWorld.stageManager.shuffleList(this._enemyList);

    }

    //=======================================================//
    //Boss
    //=======================================================//

    getBoss(boss?: string): void {
        if (boss === undefined) boss = this._game.BreakoutWorld.stageManager.getLevelBoss();
    }

    introduceBoss(): void
    {
        let randomBoss: string = this._game.BreakoutWorld.stageManager.getLevelBoss();
        this._boss = this._game.add.sprite(0 + this._game.world.width * 0.1, 0 - 0.5 * this._game.world.height,
            randomBoss, 0);
        this._game.BreakoutWorld.scalingManager.scaleGameElements(this._game, [this._boss], 0.15, 0.15);
    }
}


