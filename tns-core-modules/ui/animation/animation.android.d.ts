import { AnimationDefinition } from ".";
import { AnimationBase, CubicBezierAnimationCurve, AnimationPromise } from "./animation-common";
export * from "./animation-common";
interface AnimationDefinitionInternal extends AnimationDefinition {
    valueSource?: "animation" | "keyframe";
}
export declare function _resolveAnimationCurve(curve: string | CubicBezierAnimationCurve | android.view.animation.Interpolator | android.view.animation.LinearInterpolator): android.view.animation.Interpolator;
export declare class Animation extends AnimationBase {
    private _animatorListener;
    private _nativeAnimatorsArray;
    private _animatorSet;
    private _animators;
    private _propertyUpdateCallbacks;
    private _propertyResetCallbacks;
    private _valueSource;
    private _target;
    constructor(animationDefinitions: Array<AnimationDefinitionInternal>, playSequentially?: boolean);
    play(): AnimationPromise;
    cancel(): void;
    _resolveAnimationCurve(curve: string | CubicBezierAnimationCurve | android.view.animation.Interpolator): android.view.animation.Interpolator;
    private _onAndroidAnimationEnd;
    private _onAndroidAnimationCancel;
    private _createAnimators;
    private static _getAndroidRepeatCount;
}
//# sourceMappingURL=animation.android.d.ts.map