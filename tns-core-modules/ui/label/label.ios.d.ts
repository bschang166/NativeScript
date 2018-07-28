import { Label as LabelDefinition } from ".";
import { Background } from "../styling/background";
import { TextBase } from "../text-base";
export * from "../text-base";
export declare class Label extends TextBase implements LabelDefinition {
    nativeViewProtected: TNSLabel;
    private _fixedSize;
    constructor();
    readonly ios: TNSLabel;
    textWrap: boolean;
    _requestLayoutOnTextChanged(): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    private _measureNativeView;
    _redrawNativeBackground(value: UIColor | Background): void;
}
//# sourceMappingURL=label.ios.d.ts.map