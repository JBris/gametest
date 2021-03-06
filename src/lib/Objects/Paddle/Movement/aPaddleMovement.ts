import { iMovable } from '../../Behaviour/iMovable';

import { Paddle } from '../Paddle';

export abstract class aPaddleMovement implements iMovable {

    /*=============================
    **Fields**
    =============================*/
    paddle: Paddle;
    offscreenBufferDistance: number;
    alphaIntensity: number;
    intialAlphaState: number;

    /*=============================
    **Constructors**
    =============================*/
    constructor(paddle: Paddle) {
        this.paddle = paddle;
        this.offscreenBufferDistance = 10;
        this.alphaIntensity = 0.5;
        this.intialAlphaState = 1;
    }

    /*=============================
    **Properties**
    =============================*/
    //getters


    //setters

    /*=============================
    **Methods**
    =============================*/
    move(): void {
        this.paddleMovement();
    }

    protected abstract paddleMovement():void;

}


