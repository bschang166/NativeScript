import { ScrollViewBase } from "./scroll-view-common";
export * from "./scroll-view-common";
export declare class ScrollView extends ScrollViewBase {
    nativeViewProtected: UIScrollView;
    private _contentMeasuredWidth;
    private _contentMeasuredHeight;
    private _delegate;
    constructor();
    _setNativeClipToBounds(): void;
    protected attachNative(): void;
    protected dettachNative(): void;
    protected updateScrollBarVisibility(value: any): void;
    readonly horizontalOffset: number;
    readonly verticalOffset: number;
    readonly scrollableWidth: number;
    readonly scrollableHeight: number;
    scrollToVerticalOffset(value: number, animated: boolean): void;
    scrollToHorizontalOffset(value: number, animated: boolean): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    onLayout(left: number, top: number, right: number, bottom: number): void;
    _onOrientationChanged(): void;
}
//# sourceMappingURL=scroll-view.ios.d.ts.map