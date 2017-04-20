export interface iStunnable
{
    /*=============================
    **Fields**
    =============================*/
    stunDuration: number;//seconds
    isCurrentlyStunned?: boolean;
    alphaIntensity?: number;
    /*=============================
    **Properties**
    =============================*/

    /*=============================
    **Methods**
    =============================*/

    stunMe(): void;
    unStunMe?(): void;
}