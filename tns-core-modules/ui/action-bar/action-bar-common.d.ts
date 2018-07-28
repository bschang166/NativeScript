import { ActionBar as ActionBarDefinition, ActionItems as ActionItemsDefinition, ActionItem as ActionItemDefinition, NavigationButton, IOSActionItemSettings, AndroidActionItemSettings, AndroidActionBarSettings } from ".";
export * from "../core/view";
import { View, ViewBase, Property } from "../core/view";
export declare module knownCollections {
    var actionItems: string;
}
export declare class ActionBarBase extends View implements ActionBarDefinition {
    private _actionItems;
    private _navigationButton;
    private _titleView;
    title: string;
    flat: boolean;
    navigationButton: NavigationButton;
    actionItems: ActionItems;
    titleView: View;
    readonly android: AndroidActionBarSettings;
    readonly _childrenCount: number;
    constructor();
    static onTitleChanged: any;
    update(): void;
    _onTitlePropertyChanged(): void;
    _addArrayFromBuilder(name: string, value: Array<any>): void;
    eachChildView(callback: (child: View) => boolean): void;
    eachChild(callback: (child: ViewBase) => boolean): void;
    _isEmpty(): boolean;
}
export declare class ActionItems implements ActionItemsDefinition {
    private _items;
    private _actionBar;
    constructor(actionBar: ActionBarDefinition);
    addItem(item: ActionItemDefinition): void;
    removeItem(item: ActionItemDefinition): void;
    getItems(): Array<ActionItemDefinition>;
    getVisibleItems(): Array<ActionItemDefinition>;
    getItemAt(index: number): ActionItemDefinition;
    setItems(items: Array<ActionItemDefinition>): void;
    private invalidate;
}
export declare class ActionItemBase extends ViewBase implements ActionItemDefinition {
    static tapEvent: string;
    private _actionBar;
    private _actionView;
    ios: IOSActionItemSettings;
    android: AndroidActionItemSettings;
    text: string;
    icon: string;
    visibility: string;
    actionView: View;
    actionBar: ActionBarDefinition;
    onLoaded(): void;
    _raiseTap(): void;
    _addChildFromBuilder(name: string, value: any): void;
    _onVisibilityChanged(visibility: string): void;
    eachChild(callback: (child: ViewBase) => boolean): void;
}
export declare function isVisible(item: ActionItemDefinition): boolean;
export declare const titleProperty: Property<ActionBarBase, string>;
export declare const textProperty: Property<ActionItemBase, string>;
export declare const iconProperty: Property<ActionItemBase, string>;
export declare const visibilityProperty: Property<ActionItemBase, string>;
export declare const flatProperty: Property<ActionBarBase, boolean>;
//# sourceMappingURL=action-bar-common.d.ts.map