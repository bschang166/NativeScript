import { TextFieldBase } from "./text-field-common";
export * from "./text-field-common";
export declare class TextField extends TextFieldBase {
    private _ios;
    private _delegate;
    nativeViewProtected: UITextField;
    constructor();
    onLoaded(): void;
    onUnloaded(): void;
    readonly ios: UITextField;
    _updateAttributedPlaceholder(): void;
}
//# sourceMappingURL=text-field.ios.d.ts.map