import { Keyframes as KeyframesDefinition, UnparsedKeyframe as UnparsedKeyframeDefinition, KeyframeDeclaration as KeyframeDeclarationDefinition, KeyframeInfo as KeyframeInfoDefinition, KeyframeAnimationInfo as KeyframeAnimationInfoDefinition, KeyframeAnimation as KeyframeAnimationDefinition } from "./keyframe-animation";
import { View, Color } from "../core/view";
export declare class Keyframes implements KeyframesDefinition {
    name: string;
    keyframes: Array<UnparsedKeyframe>;
}
export declare class UnparsedKeyframe implements UnparsedKeyframeDefinition {
    values: Array<any>;
    declarations: Array<KeyframeDeclaration>;
}
export declare class KeyframeDeclaration implements KeyframeDeclarationDefinition {
    property: string;
    value: any;
}
export declare class KeyframeInfo implements KeyframeInfoDefinition {
    duration: number;
    declarations: Array<KeyframeDeclaration>;
    curve?: any;
}
export declare class KeyframeAnimationInfo implements KeyframeAnimationInfoDefinition {
    keyframes: Array<KeyframeInfo>;
    name?: string;
    duration?: number;
    delay?: number;
    iterations?: number;
    curve?: any;
    isForwards?: boolean;
    isReverse?: boolean;
}
interface Keyframe {
    backgroundColor?: Color;
    scale?: {
        x: number;
        y: number;
    };
    translate?: {
        x: number;
        y: number;
    };
    rotate?: number;
    opacity?: number;
    valueSource?: "keyframe" | "animation";
    duration?: number;
    curve?: any;
    forceLayer?: boolean;
}
export declare class KeyframeAnimation implements KeyframeAnimationDefinition {
    animations: Array<Keyframe>;
    delay: number;
    iterations: number;
    private _resolve;
    private _isPlaying;
    private _isForwards;
    private _nativeAnimations;
    private _target;
    static keyframeAnimationFromInfo(info: KeyframeAnimationInfo): KeyframeAnimation;
    private static parseKeyframe;
    readonly isPlaying: boolean;
    cancel(): void;
    play(view: View): Promise<void>;
    private animate;
    _resolveAnimationFinishedPromise(): void;
    _resetAnimations(): void;
    private _resetAnimationValues;
}
export {};
//# sourceMappingURL=keyframe-animation.d.ts.map