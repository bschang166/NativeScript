import { FlexboxLayoutBase, View } from "./flexbox-layout-common";
export * from "./flexbox-layout-common";
export declare class FlexboxLayout extends FlexboxLayoutBase {
    nativeViewProtected: org.nativescript.widgets.FlexboxLayout;
    constructor();
    createNativeView(): org.nativescript.widgets.FlexboxLayout;
    resetNativeView(): void;
    _updateNativeLayoutParams(child: View): void;
    _setChildMinWidthNative(child: View): void;
    _setChildMinHeightNative(child: View): void;
}
//# sourceMappingURL=flexbox-layout.android.d.ts.map