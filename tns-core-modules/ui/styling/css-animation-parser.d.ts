import { KeyframeAnimationInfo, KeyframeDeclaration, KeyframeInfo, UnparsedKeyframe } from "../animation/keyframe-animation";
export declare class CssAnimationParser {
    static keyframeAnimationsFromCSSDeclarations(declarations: Array<KeyframeDeclaration>): Array<KeyframeAnimationInfo>;
    static keyframesArrayFromCSS(keyframes: Array<UnparsedKeyframe>): Array<KeyframeInfo>;
}
export declare function parseKeyframeDeclarations(unparsedKeyframeDeclarations: Array<KeyframeDeclaration>): Array<KeyframeDeclaration>;
//# sourceMappingURL=css-animation-parser.d.ts.map