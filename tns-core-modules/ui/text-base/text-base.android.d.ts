import { TextTransform } from "./text-base";
import { TextBaseCommon } from "./text-base-common";
export * from "./text-base-common";
export declare class TextBase extends TextBaseCommon {
    nativeViewProtected: android.widget.TextView;
    private _defaultTransformationMethod;
    private _paintFlags;
    private _minHeight;
    private _maxHeight;
    private _minLines;
    private _maxLines;
    initNativeView(): void;
    resetNativeView(): void;
    _setNativeText(reset?: boolean): void;
}
export declare function getTransformedText(text: string, textTransform: TextTransform): string;
//# sourceMappingURL=text-base.android.d.ts.map