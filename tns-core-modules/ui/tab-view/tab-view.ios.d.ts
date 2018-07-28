import { ViewBase } from "../core/view";
import { TabViewBase, TabViewItemBase } from "./tab-view-common";
export * from "./tab-view-common";
declare class UITabBarControllerImpl extends UITabBarController {
    private _owner;
    static initWithOwner(owner: WeakRef<TabView>): UITabBarControllerImpl;
    viewWillAppear(animated: boolean): void;
    viewDidDisappear(animated: boolean): void;
}
export declare class TabViewItem extends TabViewItemBase {
    private __controller;
    setViewController(controller: UIViewController, nativeView: UIView): void;
    disposeNativeView(): void;
    loadView(view: ViewBase): void;
    _update(): void;
}
export declare class TabView extends TabViewBase {
    viewController: UITabBarControllerImpl;
    _ios: UITabBarControllerImpl;
    private _delegate;
    private _moreNavigationControllerDelegate;
    private _iconsCache;
    constructor();
    onLoaded(): void;
    onUnloaded(): void;
    readonly ios: UITabBarController;
    layoutNativeView(left: number, top: number, right: number, bottom: number): void;
    _setNativeViewFrame(nativeView: UIView, frame: CGRect): void;
    onSelectedIndexChanged(oldIndex: number, newIndex: number): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    _onViewControllerShown(viewController: UIViewController): void;
    private _actionBarHiddenByTabView;
    _handleTwoNavigationBars(backToMoreWillBeVisible: boolean): void;
    private getViewController;
    private setViewControllers;
    private _getIconRenderingMode;
    _getIcon(iconSource: string): UIImage;
    private _updateIOSTabBarColorsAndFonts;
}
//# sourceMappingURL=tab-view.ios.d.ts.map