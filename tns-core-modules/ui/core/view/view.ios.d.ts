import { Point, View as ViewDefinition } from ".";
import { ViewCommon } from "./view-common";
import { Background } from "../../styling/background";
export * from "./view-common";
export declare class View extends ViewCommon {
    nativeViewProtected: UIView;
    viewController: UIViewController;
    private _isLaidOut;
    private _hasTransfrom;
    private _privateFlags;
    private _cachedFrame;
    private _suspendCATransaction;
    _nativeBackgroundState: "unset" | "invalid" | "drawn";
    readonly isLayoutRequired: boolean;
    readonly isLayoutRequested: boolean;
    requestLayout(): void;
    measure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    layout(left: number, top: number, right: number, bottom: number, setFrame?: boolean): void;
    private updateBackground;
    setMeasuredDimension(measuredWidth: number, measuredHeight: number): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    onLayout(left: number, top: number, right: number, bottom: number): void;
    _setNativeViewFrame(nativeView: UIView, frame: CGRect): void;
    layoutNativeView(left: number, top: number, right: number, bottom: number): void;
    _setLayoutFlags(left: number, top: number, right: number, bottom: number): void;
    focus(): boolean;
    getLocationInWindow(): Point;
    getLocationOnScreen(): Point;
    getLocationRelativeTo(otherView: ViewDefinition): Point;
    private _onSizeChanged;
    updateNativeTransform(): void;
    updateOriginPoint(originX: number, originY: number): void;
    _suspendPresentationLayerUpdates(): void;
    _resumePresentationLayerUpdates(): void;
    _isPresentationLayerUpdateSuspeneded(): number | true;
    protected _showNativeModalView(parent: View, context: any, closeCallback: Function, fullscreen?: boolean, animated?: boolean, stretched?: boolean): void;
    protected _hideNativeModalView(parent: View): void;
    _redrawNativeBackground(value: UIColor | Background): void;
    _setNativeClipToBounds(): void;
}
export declare class CustomLayoutView extends View {
    nativeViewProtected: UIView;
    constructor();
    readonly ios: UIView;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    _addViewToNativeVisualTree(child: View, atIndex: number): boolean;
    _removeViewFromNativeVisualTree(child: View): void;
    _getCurrentLayoutBounds(): {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
}
export declare namespace ios {
    function getParentWithViewController(view: View): View;
    function isContentScrollable(controller: UIViewController, owner: View): boolean;
    function updateAutoAdjustScrollInsets(controller: UIViewController, owner: View): void;
    function updateConstraints(controller: UIViewController, owner: View): void;
    function layoutView(controller: UIViewController, owner: View): void;
    class UILayoutViewController extends UIViewController {
        owner: WeakRef<View>;
        static initWithOwner(owner: WeakRef<View>): UILayoutViewController;
        viewWillLayoutSubviews(): void;
        viewDidLayoutSubviews(): void;
        viewWillAppear(animated: boolean): void;
        viewDidDisappear(animated: boolean): void;
    }
}
//# sourceMappingURL=view.ios.d.ts.map