import { Breakout } from '../../../Breakout';

//Groups
import { iActsAsGroup } from '../Behaviour/iActsAsGroup';
import { BrickGroup } from './Brick/Group/BrickGroup';

export class EnemyManager {

    /*=============================
    **Fields**
    =============================*/
    private _game: Breakout;
    private _brickGroup: iActsAsGroup;
    private _enemyProjectileGroup: iActsAsGroup;
    //private _bossProjectileGroup: iActsAsGroup;
    //private _lemonGroup: iActsAsGroup;
    //private _ammoBoxGroup: iActsAsGroup;

    private _enemyList: Array<string>;

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
    //Random Seeds
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

    introduceBoss(): void
    {

    }
}


