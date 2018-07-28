import { ScrollViewBase } from "./scroll-view-common";
export * from "./scroll-view-common";
export declare class ScrollView extends ScrollViewBase {
    nativeViewProtected: org.nativescript.widgets.VerticalScrollView | org.nativescript.widgets.HorizontalScrollView;
    private _androidViewId;
    private handler;
    readonly horizontalOffset: number;
    readonly verticalOffset: number;
    readonly scrollableWidth: number;
    readonly scrollableHeight: number;
    scrollToVerticalOffset(value: number, animated: boolean): void;
    scrollToHorizontalOffset(value: number, animated: boolean): void;
    createNativeView(): org.nativescript.widgets.VerticalScrollView | org.nativescript.widgets.HorizontalScrollView;
    initNativeView(): void;
    _onOrientationChanged(): void;
    protected attachNative(): void;
    private _lastScrollX;
    private _lastScrollY;
    private _onScrollChanged;
    protected dettachNative(): void;
}
//# sourceMappingURL=scroll-view.android.d.ts.map