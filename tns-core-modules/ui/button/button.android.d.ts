import { ButtonBase } from "./button-common";
export * from "./button-common";
export declare class Button extends ButtonBase {
    nativeViewProtected: android.widget.Button;
    private _stateListAnimator;
    private _highlightedHandler;
    createNativeView(): globalAndroid.widget.Button;
    initNativeView(): void;
    disposeNativeView(): void;
    resetNativeView(): void;
    _updateHandler(subscribe: boolean): void;
}
//# sourceMappingURL=button.android.d.ts.map