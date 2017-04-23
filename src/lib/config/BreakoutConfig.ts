import { Config } from './Config';

export class BreakoutConfig extends Config{

    /*=============================
    **Fields**
    =============================*/
    /*=============================
    **Constructors**
    =============================*/
    constructor(width?: number, height?: number, renderer?: number, aspect_ratio?: number, transparent?: boolean, antialias?: boolean,
        playerNumberOfLives?: number, playerMaximumSettableLives?: number, numberOfStages?: number, defaultFrameSize?: number, orientation?: number, newLife?: number) {

        super(width, height, renderer, aspect_ratio, transparent, antialias, playerNumberOfLives, numberOfStages, defaultFrameSize, orientation);

         if (!width) this.z_width = window.innerWidth * window.devicePixelRatio;
         if (!height) this.z_height = window.innerHeight * window.devicePixelRatio;
         if (!renderer)this.z_renderer = Phaser.AUTO;
         if (!aspect_ratio)this.z_aspect_ratio = this.z_width / this.z_height;
         if (!transparent)this.z_transparent = false;
         if(!antialias)this.z_antialias = false;
         if(!playerNumberOfLives)this.z_playerNumberOfLives = 5;
         if(!playerMaximumSettableLives)this.z_playerMaximumSettableLives = 9;
         if(!numberOfStages)this.z_numberOfStages = 5;
         if(!defaultFrameSize)this.z_frameSize = 64;
         if(!orientation)this.z_orientation = 0;
         if(!newLife)this.z_playerNewLife = 2500;
    }

    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

}