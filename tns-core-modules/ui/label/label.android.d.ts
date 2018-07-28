import { Label as LabelDefinition } from ".";
import { TextBase } from "../text-base";
export * from "../text-base";
export declare class Label extends TextBase implements LabelDefinition {
    nativeViewProtected: android.widget.TextView;
    textWrap: boolean;
    createNativeView(): globalAndroid.widget.TextView;
    initNativeView(): void;
}
//# sourceMappingURL=label.android.d.ts.map