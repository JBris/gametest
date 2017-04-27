import { Breakout } from '../../../../../Breakout';

//Parent
import { BreakoutGroup } from '../../../Group/BreakoutGroup';

//Children
import { Brick } from '../Brick';
import { BlueBrick } from '../BlueBrick';
import { GreenBrick } from '../GreenBrick';
import { GoldBrick } from '../GoldBrick';
import { TealBrick } from '../TealBrick';

//Projectiles
import { BrickProjectileGroup } from '../Projectile/BrickProjectileGroup';

//Drops
import { DropGroup } from '../../../Drop/Group/DropGroup';
import { Drop } from '../../../Drop/Drop';
import { Lemon } from '../../../Drop/Lemon';
import { AmmoBox } from '../../../Drop/AmmoBox';

export class BrickGroup extends BreakoutGroup {

    /*=============================
    **Fields**
    =============================*/
    private _brick: Brick;
    private _normalBrickProjectileGroup: BrickProjectileGroup;
    private _fastBrickProjectileGroup: BrickProjectileGroup;

    private _lemonGroup: DropGroup;
    private _ammoBoxGroup: DropGroup;
    private _emptyDropPool: DropGroup;

    private _movementTween: Phaser.Tween;
    private _lastBrickAlive: boolean;
    /*=============================
    **Constructors
    =============================*/

    constructor(game: Breakout)
    {
        super(game);
        this._normalBrickProjectileGroup = new BrickProjectileGroup(game);
        this._fastBrickProjectileGroup = new BrickProjectileGroup(game);
        this._lemonGroup = new DropGroup(game);
        this._ammoBoxGroup = new DropGroup(game);
        this._emptyDropPool = new DropGroup(game);

        this._lastBrickAlive = false;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters
    get NormalBrickProjectileGroup(): BrickProjectileGroup
    { return this._normalBrickProjectileGroup; }

    get FastBrickProjectileGroup(): BrickProjectileGroup
    { return this._fastBrickProjectileGroup; }

    get LemonGroup(): DropGroup
    { return this._lemonGroup; }

    get AmmoBoxGroup(): DropGroup
    { return this._ammoBoxGroup; }

    get EmptyDropGroup(): DropGroup
    { return this._emptyDropPool; }

    //setters
    set NormalBrickProjectileGroup(val: BrickProjectileGroup)
    { this._normalBrickProjectileGroup = val; }

    set FastBrickProjectileGroup(val: BrickProjectileGroup)
    { this._fastBrickProjectileGroup = val; }

    set LemonGroup(val: DropGroup)
    { this._lemonGroup = val; }

    set AmmoBoxGroup(val: DropGroup)
    { this._ammoBoxGroup = val; }

    set EmptyDropGroup(val: DropGroup)
    { this._emptyDropPool = val; }

    /*=============================
    **Methods**
    =============================*/

    //====================================================//
    //Creational Methods
    //====================================================//

    createBreakoutGroup(key: string[], groupSize?: number, frame?: any): void {
        if (key.length > 0) {

            this.createBrickProjectiles();
            this.createBrickDrops();

            if (frame === undefined) frame = 0;
            if (groupSize === undefined) groupSize = 40;

            let yPosition: number = 0 + this.game.world.height * 0.1;

            for (let rows: number = 0; rows < 4; rows++) {
                let xPosition: number = 0 + this.game.world.width * 0.05;

                for (let columns: number = 0; columns < 8; columns++) {
                    let newBrick = key.shift();
                    if (newBrick !== undefined)
                        this.createBrick(newBrick, xPosition, yPosition);
                    key.push(newBrick);
                    xPosition = this._brick.x + this.game.world.width * 0.1;
                    if (newBrick === "none") this._brick.kill();

                }

                yPosition = this._brick.y + this.game.world.height * 0.1;
            }

            this.initGroupValues();
        }
    }

    protected createBrick(key: string , xPosition : number, yPosition : number ) : void
    {
        if (key === "gold-brick") this.classType = GoldBrick;
        else if (key === "green-brick") this.classType = GreenBrick;
        else if (key === "teal-brick") this.classType = TealBrick;
        else {
            this.classType = BlueBrick;
            key = "blue-brick";
        }

        this._brick = this.create(xPosition, yPosition, key);
        this.z_game.BreakoutWorld.scalingManager.scaleGameElements(this.game, [this._brick], 0.08, 0.08);
        if (this._brick.animations.getAnimation('float')) this._brick.animations.play('float');
        this._brick.Game = this.z_game;
        this._brick.BrickGroup = this;
        this._brick.setDropPool();
    }

    protected createBrickProjectiles(): void
    {
        this._normalBrickProjectileGroup.createGroup('bullet-enemy', 20, 0);
        this._fastBrickProjectileGroup.createGroup('fire', 20, 0);
    } 

    protected createBrickDrops(): void {
        this._lemonGroup.createGroup('lemon', 20, 0);
        this._ammoBoxGroup.createGroup('ammo-box', 20, 0);
    } 

    //====================================================//
    //Get composite groups
    //====================================================//

    getChildGroup(childType: string): Phaser.Group
    {
        if (childType === "normalProjectile") return this._normalBrickProjectileGroup;
        if (childType === "fastProjectile") return this._fastBrickProjectileGroup;
        if (childType === "lemonDrop") return this._lemonGroup;
        if (childType === "ammoBoxDrop") return this._ammoBoxGroup;
    }

    //====================================================//
    //Group actions
    //====================================================//

    moveAsGroup(xCoordinate?: number): void
    {
        if (xCoordinate === undefined) xCoordinate = this.game.width * 0.15;

        this._movementTween = this.game.add.tween(this).to({ x: xCoordinate }, 2000, Phaser.Easing.Linear.None, true, 0, 2000, true);
        this._movementTween.start();
    }

    attackAsGroup(target : Phaser.Sprite): void
    {
        if (this.countLiving() > 0 && !this._lastBrickAlive)
        {
            let livingEnemies: Array<Brick> = new Array<Brick>();

            this.forEachAlive(function (brick) {
                livingEnemies.push(brick);
            }, this);

            let shooter: Brick = Phaser.ArrayUtils.getRandomItem(livingEnemies);
            shooter.Attack.attack(target);

            shooter = this.getFirstAlive(false);
            shooter.Attack.attack(target);
        }
     
    }

    //====================================================//
    //Last Brick actions
    //====================================================//

    responseToChildDeath(childCoordinateX: number, childCoordinateY: number): void {

        if (this.countLiving() === 1 && !this._lastBrickAlive) {
            this._lastBrickAlive = true;
            this._movementTween.stop();
            this._brick = this.getFirstAlive();
            this._brick.LastGroupMemberReaction.reactToTheSituation();
        }
        if (this.countLiving() === 0) this.emptyGroupAlert();
    }

    emptyGroupAlert(): void {
        this.z_game.BreakoutWorld.stageManager.EnemyManager.introduceBoss();
    }

    //====================================================//
    //Set group type
    //====================================================//

    setClassTypeToGold(): void
    { this.classType = GoldBrick; }

    setClassTypeToGreen(): void
    { this.classType = GreenBrick; }

    setClassTypeToTeal(): void
    { this.classType = TealBrick; }

    setClassTypeToBlue(): void
    { this.classType = BlueBrick; }

}


