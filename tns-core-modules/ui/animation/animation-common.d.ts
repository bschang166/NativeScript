import { CubicBezierAnimationCurve as CubicBezierAnimationCurveDefinition, AnimationPromise as AnimationPromiseDefinition, Animation as AnimationBaseDefinition, AnimationDefinition } from ".";
import { View } from "../core/view";
import { Color } from "../../color";
import { isEnabled as traceEnabled, write as traceWrite, categories as traceCategories, messageType as traceType } from "../../trace";
export { Color, traceEnabled, traceWrite, traceCategories, traceType };
export { AnimationPromise } from ".";
export declare module Properties {
    var opacity: string;
    var backgroundColor: string;
    var translate: string;
    var rotate: string;
    var scale: string;
}
export interface PropertyAnimation {
    target: View;
    property: string;
    value: any;
    duration?: number;
    delay?: number;
    iterations?: number;
    curve?: any;
}
export declare class CubicBezierAnimationCurve implements CubicBezierAnimationCurveDefinition {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    constructor(x1: number, y1: number, x2: number, y2: number);
}
export declare abstract class AnimationBase implements AnimationBaseDefinition {
    _propertyAnimations: Array<PropertyAnimation>;
    _playSequentially: boolean;
    private _isPlaying;
    private _resolve;
    private _reject;
    constructor(animationDefinitions: Array<AnimationDefinition>, playSequentially?: boolean);
    abstract _resolveAnimationCurve(curve: any): any;
    protected _rejectAlreadyPlaying(): AnimationPromiseDefinition;
    play(): AnimationPromiseDefinition;
    private fixupAnimationPromise;
    cancel(): void;
    readonly isPlaying: boolean;
    _resolveAnimationFinishedPromise(): void;
    _rejectAnimationFinishedPromise(): void;
    private static _createPropertyAnimations;
    static _getAnimationInfo(animation: PropertyAnimation): string;
}
//# sourceMappingURL=animation-common.d.ts.map