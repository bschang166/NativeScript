import { ButtonBase } from "./button-common";
export * from "./button-common";
export declare class Button extends ButtonBase {
    nativeViewProtected: UIButton;
    private _tapHandler;
    private _stateChangedHandler;
    constructor();
    readonly ios: UIButton;
    onUnloaded(): void;
    _updateHandler(subscribe: boolean): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
}
//# sourceMappingURL=button.ios.d.ts.map