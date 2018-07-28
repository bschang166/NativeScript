import { AndroidActionBarSettings as AndroidActionBarSettingsDefinition, AndroidActionItemSettings } from ".";
import { ActionItemBase, ActionBarBase, View } from "./action-bar-common";
export * from "./action-bar-common";
export declare class ActionItem extends ActionItemBase {
    private _androidPosition;
    private _itemId;
    constructor();
    android: AndroidActionItemSettings;
    _getItemId(): any;
}
export declare class AndroidActionBarSettings implements AndroidActionBarSettingsDefinition {
    private _actionBar;
    private _icon;
    private _iconVisibility;
    constructor(actionBar: ActionBar);
    icon: string;
    iconVisibility: "auto" | "never" | "always";
}
export declare class NavigationButton extends ActionItem {
}
export declare class ActionBar extends ActionBarBase {
    private _android;
    nativeViewProtected: android.support.v7.widget.Toolbar;
    constructor();
    readonly android: AndroidActionBarSettings;
    _addChildFromBuilder(name: string, value: any): void;
    createNativeView(): globalAndroid.support.v7.widget.Toolbar;
    initNativeView(): void;
    disposeNativeView(): void;
    onLoaded(): void;
    update(): void;
    _onAndroidItemSelected(itemId: number): boolean;
    _updateNavigationButton(): void;
    _updateIcon(): void;
    _updateTitleAndTitleView(): void;
    _addActionItems(): void;
    private static _setOnClickListener;
    _onTitlePropertyChanged(): void;
    _onIconPropertyChanged(): void;
    _addViewToNativeVisualTree(child: View, atIndex?: number): boolean;
    _removeViewFromNativeVisualTree(child: View): void;
}
//# sourceMappingURL=action-bar.android.d.ts.map