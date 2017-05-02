//Boss
import { Boss } from '../Boss';

//Behaviours
import { iSpeaks } from '../../../Behaviour/iSpeaks';

export class SkullFaceDialogue implements iSpeaks {

    /*=============================
    **Fields**
    =============================*/
    protected z_boss: Boss;

    /*=============================
    **Constructors
    =============================*/

    constructor(boss: Boss) {
        this.z_boss = boss;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters

    //setters
  

    /*=============================
    **Methods**
    =============================*/
    speak(): void
    {
        if (this.z_boss.game.cache.getSound('noble-woman-laugh')) this.z_boss.game.sound.play('noble-woman-laugh');

        let bossText: Phaser.Text = this.z_boss.Game.BreakoutWorld.styleManager.positionTextCenter("Ho Ho Ho! Another Challenger?");
        bossText.addColor("#19cb65", 0);
        bossText.fontSize = "300%";
        this.z_boss.Game.BreakoutWorld.styleManager.fadeText(bossText, 3000);
    }

}


