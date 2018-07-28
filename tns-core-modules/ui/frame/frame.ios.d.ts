import { iOSFrame as iOSFrameDefinition, BackstackEntry, NavigationTransition } from ".";
import { Page } from "../page";
import { FrameBase } from "./frame-common";
export * from "./frame-common";
export declare class Frame extends FrameBase {
    viewController: UINavigationControllerImpl;
    _animatedDelegate: UINavigationControllerDelegate;
    private _ios;
    constructor();
    readonly ios: iOSFrame;
    setCurrent(entry: BackstackEntry, isBack: boolean): void;
    _navigateCore(backstackEntry: BackstackEntry): void;
    _goBackCore(backstackEntry: BackstackEntry): void;
    _updateActionBar(page?: Page, disableNavBarAnimation?: boolean): void;
    _getNavBarVisible(page: Page): boolean;
    static defaultAnimatedNavigation: boolean;
    static defaultTransition: NavigationTransition;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    layoutNativeView(left: number, top: number, right: number, bottom: number): void;
    _setNativeViewFrame(nativeView: UIView, frame: CGRect): void;
    _onNavigatingTo(backstackEntry: BackstackEntry, isBack: boolean): void;
}
declare class UINavigationControllerImpl extends UINavigationController {
    private _owner;
    static initWithOwner(owner: WeakRef<Frame>): UINavigationControllerImpl;
    readonly owner: Frame;
    viewWillAppear(animated: boolean): void;
    viewDidDisappear(animated: boolean): void;
    private animateWithDuration;
    pushViewControllerAnimated(viewController: UIViewController, animated: boolean): void;
    setViewControllersAnimated(viewControllers: NSArray<any>, animated: boolean): void;
    popViewControllerAnimated(animated: boolean): UIViewController;
    popToViewControllerAnimated(viewController: UIViewController, animated: boolean): NSArray<UIViewController>;
}
export declare function _getNativeCurve(transition: NavigationTransition): UIViewAnimationCurve;
declare class iOSFrame implements iOSFrameDefinition {
    private _controller;
    private _showNavigationBar;
    private _navBarVisibility;
    _disableNavBarAnimation: boolean;
    constructor(frame: Frame);
    readonly controller: UINavigationControllerImpl;
    showNavigationBar: boolean;
    navBarVisibility: "auto" | "never" | "always";
}
//# sourceMappingURL=frame.ios.d.ts.map