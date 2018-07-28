import { View, PageBase } from "./page-common";
export * from "./page-common";
export declare class Page extends PageBase {
    nativeViewProtected: org.nativescript.widgets.GridLayout;
    createNativeView(): org.nativescript.widgets.GridLayout;
    initNativeView(): void;
    _addViewToNativeVisualTree(child: View, atIndex?: number): boolean;
    onLoaded(): void;
    private updateActionBar;
}
//# sourceMappingURL=page.android.d.ts.map