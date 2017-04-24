export interface iHasShield
{
    /*=============================
    **Fields**
    =============================*/
    currentShieldValue: number;
    totalShieldValue: number;
    shieldDisabled: boolean;
    damageShield(shieldDamage: number, healthDamage: number): void;

}