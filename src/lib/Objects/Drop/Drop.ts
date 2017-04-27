//Behaviours
import { iCollidable } from '../Behaviour/iCollidable';
import { iProvidesBonus } from '../Behaviour/iProvidesBonus';

export abstract class Drop extends Phaser.Sprite implements iCollidable{

    /*=============================
    **Fields**
    =============================*/
    protected z_bonusValue: iProvidesBonus;
    protected z_dropSpeed: number = 0;
    protected z_pointValue: number = 0;
    protected z_dropItem: boolean = true;
    /*=============================
    **Constructors
    =============================*/

    constructor(game: Phaser.Game, x: number, y: number,
        key: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number)
    {
        super(game, x, y, key, frame);   
        this.initDrop();
        this.initAnimations();   
        this.setBonusValue();  
    }

    /*=============================
    **Properties**
    =============================*/
    //getters
    get BonusValue(): iProvidesBonus
    { return this.z_bonusValue; }

    get DropSpeed(): number
    { return this.z_dropSpeed; }

    get PointValue(): number
    { return this.z_pointValue; }

    get Dropitem(): boolean
    { return this.z_dropItem; }

    //setters
    set BonusValue(val: iProvidesBonus)
    { this.z_bonusValue = val; }

    set DropSpeed(val: number)
    { this.z_dropSpeed = val; }

    set PointValue(val: number)
    { this.z_pointValue = val; }

    set Dropitem(val: boolean)
    { this.z_dropItem = val; }

    /*=============================
    **Methods**
    =============================*/

    collide(collidedWithType: string, collidedAgainst?: iCollidable): void
    {
        this.dropCollision(collidedWithType, collidedAgainst);
    }

    killDrop(): void
    {
        if (this.animations.getAnimation('getMe'))
            this.animations.play('getMe');

        this.game.time.events.add(300, function()
            { this.kill(); }, this)
    }

    private initDrop(): void
    {
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
    }

    protected abstract initAnimations(): void;
    protected abstract setBonusValue(): void;
    protected abstract dropCollision(collidedWithType: string, collidedAgainst?: iCollidable): void;
}


