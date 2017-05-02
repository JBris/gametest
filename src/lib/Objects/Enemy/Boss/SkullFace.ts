import { Breakout } from '../../../../Breakout';

//Parent
import { Boss } from './Boss';

//Behaviours
import { SkullFaceDialogue } from './Speaking/SkullFaceDialogue';
import { SkullFaceMovement } from './Movement/SkullFaceMovement';

//Params
import { SpriteParameterList } from '../../Factory/SpriteParameterList';

export class SkullFace extends Boss {

    /*=============================
    **Fields**
    =============================*/

    /*=============================
    **Constructors
    =============================*/

    constructor(game: Breakout, params : SpriteParameterList) {
        super(game, params);   
        this.z_baseHealth = 5;
        this.z_baseShield = 5;
        this.z_initialSpawnPositionX = this.z_game.width * - 0.2;
        this.z_initialSpawnPositionY = this.z_game.height * - 0.2;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters
 
    /*=============================
    **Methods**
    =============================*/

    //Styling
    protected setBossAnimations(): void
    {
        this.animations.add('float', [0, 0, 0, 1, 1, 1], 1, true);
        this.animations.add('attack', [1, 2, 3, 4, 1, 0], 2);
        this.animations.add('hurt', [5, 5, 6, 6, 6, 0], 1);
        this.animations.add('die', [7, 8, 9], 2);
    }

    protected killBoss(): void
    { }

    //Behaviours
    protected setAttackType(): void
    { }

    protected setMovementType(): void
    {
        this.z_bossMovement = new SkullFaceMovement(this);
    }

    protected setCollisionType(): void
    { }
    protected setStunType(): void
    { }
    protected setAmmoType(): void
    {
    }

    protected setSpeakingType(): void
    {
        this.z_speaks = new SkullFaceDialogue(this);
    }

    protected setHealthType(): void
    { }
    protected setShieldType(): void
    { }

}


