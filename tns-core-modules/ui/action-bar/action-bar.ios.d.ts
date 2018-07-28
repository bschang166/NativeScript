import { IOSActionItemSettings } from ".";
import { ActionItemBase, ActionBarBase } from "./action-bar-common";
export * from "./action-bar-common";
export declare class ActionItem extends ActionItemBase {
    private _ios;
    ios: IOSActionItemSettings;
}
export declare class NavigationButton extends ActionItem {
    _navigationItem: UINavigationItem;
    _onVisibilityChanged(visibility: string): void;
}
export declare class ActionBar extends ActionBarBase {
    readonly ios: UIView;
    createNativeView(): UIView;
    _addChildFromBuilder(name: string, value: any): void;
    readonly _getActualSize: {
        width: number;
        height: number;
    };
    layoutInternal(): void;
    update(): void;
    private populateMenuItems;
    private createBarButtonItem;
    private updateColors;
    _onTitlePropertyChanged(): void;
    private updateFlatness;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    onLayout(left: number, top: number, right: number, bottom: number): void;
    layoutNativeView(left: number, top: number, right: number, bottom: number): void;
    private readonly navBar;
}
//# sourceMappingURL=action-bar.ios.d.ts.map