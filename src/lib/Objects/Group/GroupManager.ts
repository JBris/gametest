import { Breakout } from '../../../Breakout';

import { BreakoutGroup } from '../Group/BreakoutGroup';

//Groups
import { PaddleProjectileGroup } from '../Paddle/Projectile/PaddleProjectileGroup';

export class GroupManager{

    /*=============================
    **Fields**
    =============================*/
    private _game: Breakout;

    private _brickGroup: BreakoutGroup;
    private _paddleProjectileGroup: BreakoutGroup;
    private _enemyProjectileGroup: BreakoutGroup;
    private _bossProjectileGroup: BreakoutGroup;
    private _lemonGroup: BreakoutGroup;
    private _ammoBoxGroup: BreakoutGroup;

    /*=============================
    **Constructors
    =============================*/
    constructor(game: Breakout)
    {  
        this._game = game;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters

    /*=============================
    **Methods**
    =============================*/


}


