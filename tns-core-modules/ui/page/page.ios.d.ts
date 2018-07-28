import { Frame } from "../frame";
import { PageBase, View } from "./page-common";
export * from "./page-common";
declare class UIViewControllerImpl extends UIViewController {
    private _owner;
    isBackstackSkipped: boolean;
    isBackstackCleared: boolean;
    static initWithOwner(owner: WeakRef<Page>): UIViewControllerImpl;
    viewWillAppear(animated: boolean): void;
    viewDidAppear(animated: boolean): void;
    viewWillDisappear(animated: boolean): void;
    viewDidDisappear(animated: boolean): void;
    viewWillLayoutSubviews(): void;
    viewDidLayoutSubviews(): void;
}
export declare class Page extends PageBase {
    nativeViewProtected: UIView;
    viewController: UIViewControllerImpl;
    private _ios;
    _presentedViewController: UIViewController;
    constructor();
    readonly ios: UIViewController;
    readonly frame: Frame;
    layoutNativeView(left: number, top: number, right: number, bottom: number): void;
    _setNativeViewFrame(nativeView: UIView, frame: CGRect): void;
    onLoaded(): void;
    updateStatusBar(): void;
    _updateStatusBarStyle(value?: string): void;
    _updateEnableSwipeBackNavigation(enabled: boolean): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    onLayout(left: number, top: number, right: number, bottom: number): void;
    _addViewToNativeVisualTree(child: View, atIndex: number): boolean;
    _removeViewFromNativeVisualTree(child: View): void;
}
//# sourceMappingURL=page.ios.d.ts.map