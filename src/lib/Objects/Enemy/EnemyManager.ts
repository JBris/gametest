import { Breakout } from '../../../Breakout';

//Groups
import { iActsAsGroup } from '../Behaviour/iActsAsGroup';
import { BrickGroup } from './Brick/Group/BrickGroup';

//Factory
import { BreakoutAbstractFactory } from '../Factory/BreakoutAbstractFactory';
import { BossFactory } from './Boss/Factory/BossFactory';

//Boss
import { Boss } from './Boss/Boss';

//Params
import { SpriteParameterList } from '../Factory/SpriteParameterList';

export class EnemyManager {

    /*=============================
    **Fields**
    =============================*/
    private _game: Breakout;

    //bricks
    private _brickGroup: iActsAsGroup;
    private _enemyList: Array<string>;

    //boss
    private _boss: Boss;
    private _bossFactory: BreakoutAbstractFactory;

    /*=============================
    **Constructors**
    =============================*/
    constructor(game: Breakout) {
        this._game = game;
        this._enemyList = new Array<string>();
        this._bossFactory = new BossFactory(game);
    }

    /*=============================
    **Properties**
    =============================*/
    //getters
    get BrickGroup(): iActsAsGroup
    { return this._brickGroup; }

    get CreateBoss(): BreakoutAbstractFactory
    { return this._bossFactory; }

    //setters
    set BrickGroup(val: iActsAsGroup)
    { this._brickGroup = val; }

    set CreateBoss(val: BreakoutAbstractFactory)
    { this._bossFactory = val; }

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

    spawnBoss(boss?: string): Boss {
        if (boss === undefined) boss = this._game.BreakoutWorld.stageManager.getLevelBoss();
        let parameters: SpriteParameterList = new SpriteParameterList(this._game, this._game.world.centerX, -0.5 * this._game.world.height,
            boss, 0);
        this._boss = this._bossFactory.createProduct(boss, parameters);
        this._game.BreakoutWorld.scalingManager.scaleGameElements(this._game, [this._boss], 0.15, 0.15);
        return this._boss;
    }

    introduceBoss(): void
    {
        this._boss.reset(this._boss.InitialSpawnPositionX, this._boss.InitialSpawnPositionY);
        this._boss.SpeakingBehaviour.speak();
        this._boss.BossMovement.move();
        if (this._boss.animations.getAnimation('float')) this._boss.animations.play('float', undefined, true);
      }
}


