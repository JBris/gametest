export interface iHasHealth
{
    /*=============================
    **Fields**
    =============================*/
    currentHealthValue: number;
    totalHealthValue: number;
    damageHealth(healthDamage : number, shieldDamage: number): void;

}