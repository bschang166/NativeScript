import * as transition from "./transition";
export declare class SlideTransition extends transition.Transition {
    private _direction;
    constructor(direction: string, duration: number, curve: any);
    createAndroidAnimator(transitionType: string): android.animation.Animator;
    toString(): string;
}
//# sourceMappingURL=slide-transition.android.d.ts.map