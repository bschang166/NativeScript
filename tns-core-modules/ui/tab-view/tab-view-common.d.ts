import { TabView as TabViewDefinition, TabViewItem as TabViewItemDefinition, SelectedIndexChangedEventData } from ".";
import { View, ViewBase, Style, Property, CssProperty, CoercibleProperty, Color, AddArrayFromBuilder, AddChildFromBuilder, EventData } from "../core/view";
export * from "../core/view";
import { TextTransform } from "../text-base";
export declare const traceCategory = "TabView";
export declare abstract class TabViewItemBase extends ViewBase implements TabViewItemDefinition, AddChildFromBuilder {
    private _title;
    private _view;
    private _iconSource;
    textTransform: TextTransform;
    _addChildFromBuilder(name: string, value: any): void;
    title: string;
    view: View;
    iconSource: string;
    eachChild(callback: (child: ViewBase) => boolean): void;
    loadView(view: ViewBase): void;
    abstract _update(): any;
}
export declare module knownCollections {
    const items = "items";
}
export declare class TabViewBase extends View implements TabViewDefinition, AddChildFromBuilder, AddArrayFromBuilder {
    static selectedIndexChangedEvent: string;
    items: TabViewItemDefinition[];
    selectedIndex: number;
    androidOffscreenTabLimit: number;
    androidTabsPosition: "top" | "bottom";
    iosIconRenderingMode: "automatic" | "alwaysOriginal" | "alwaysTemplate";
    androidSelectedTabHighlightColor: Color;
    tabTextFontSize: number;
    tabTextColor: Color;
    tabBackgroundColor: Color;
    selectedTabTextColor: Color;
    _addArrayFromBuilder(name: string, value: Array<any>): void;
    _addChildFromBuilder(name: string, value: any): void;
    readonly _selectedView: View;
    readonly _childrenCount: number;
    eachChild(callback: (child: ViewBase) => boolean): void;
    eachChildView(callback: (child: View) => boolean): void;
    onItemsChanged(oldItems: TabViewItemDefinition[], newItems: TabViewItemDefinition[]): void;
    onSelectedIndexChanged(oldIndex: number, newIndex: number): void;
}
export interface TabViewBase {
    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any): any;
    on(event: "selectedIndexChanged", callback: (args: SelectedIndexChangedEventData) => void, thisArg?: any): any;
}
export declare const selectedIndexProperty: CoercibleProperty<TabViewBase, number>;
export declare const itemsProperty: Property<TabViewBase, TabViewItemDefinition[]>;
export declare const iosIconRenderingModeProperty: Property<TabViewBase, "automatic" | "alwaysOriginal" | "alwaysTemplate">;
export declare const androidOffscreenTabLimitProperty: Property<TabViewBase, number>;
export declare const androidTabsPositionProperty: Property<TabViewBase, "top" | "bottom">;
export declare const tabTextFontSizeProperty: CssProperty<Style, number>;
export declare const tabTextColorProperty: CssProperty<Style, Color>;
export declare const tabBackgroundColorProperty: CssProperty<Style, Color>;
export declare const selectedTabTextColorProperty: CssProperty<Style, Color>;
export declare const androidSelectedTabHighlightColorProperty: CssProperty<Style, Color>;
//# sourceMappingURL=tab-view-common.d.ts.map