import { AndroidFrame as AndroidFrameDefinition, BackstackEntry, NavigationTransition } from ".";
import { Page } from "../page";
import { FrameBase, Observable } from "./frame-common";
export * from "./frame-common";
export declare let moduleLoaded: boolean;
export declare let attachStateChangeListener: android.view.View.OnAttachStateChangeListener;
export declare function reloadPage(): void;
export declare class Frame extends FrameBase {
    private _android;
    private _containerViewId;
    private _tearDownPending;
    private _attachedToWindow;
    _isBack: boolean;
    constructor();
    static defaultAnimatedNavigation: boolean;
    static defaultTransition: NavigationTransition;
    readonly containerViewId: number;
    readonly android: AndroidFrame;
    _onAttachedToWindow(): void;
    _onDetachedFromWindow(): void;
    protected _processNextNavigationEntry(): void;
    _onRootViewReset(): void;
    onUnloaded(): void;
    private disposeCurrentFragment;
    private createFragment;
    setCurrent(entry: BackstackEntry, isBack: boolean): void;
    onBackPressed(): boolean;
    _navigateCore(newEntry: BackstackEntry): void;
    _goBackCore(backstackEntry: BackstackEntry): void;
    _removeEntry(removed: BackstackEntry): void;
    createNativeView(): org.nativescript.widgets.ContentLayout;
    initNativeView(): void;
    disposeNativeView(): void;
    _popFromFrameStack(): void;
    _getNavBarVisible(page: Page): boolean;
    _saveFragmentsState(): void;
}
declare class AndroidFrame extends Observable implements AndroidFrameDefinition {
    rootViewGroup: android.view.ViewGroup;
    hasOwnActivity: boolean;
    frameId: any;
    private _showActionBar;
    private _owner;
    cachePagesOnNavigate: boolean;
    constructor(owner: Frame);
    showActionBar: boolean;
    readonly activity: android.app.Activity;
    readonly actionBar: android.app.ActionBar;
    readonly currentActivity: android.app.Activity;
    readonly owner: Frame;
    canGoBack(): boolean;
    fragmentForPage(entry: BackstackEntry): any;
}
export declare function setFragmentClass(clazz: any): void;
export declare function setActivityCallbacks(activity: android.app.Activity): void;
export declare function setFragmentCallbacks(fragment: android.app.Fragment): void;
//# sourceMappingURL=frame.android.d.ts.map