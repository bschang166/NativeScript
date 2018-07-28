import { ListView as ListViewDefinition, ItemsSource, ItemEventData, TemplatedItemsView } from ".";
import { CoercibleProperty, CssProperty, Style, View, Template, KeyedTemplate, Length, Property, Color, EventData } from "../core/view";
import { ChangedData } from "../../data/observable-array";
export * from "../core/view";
export declare module knownTemplates {
    const itemTemplate = "itemTemplate";
}
export declare module knownMultiTemplates {
    const itemTemplates = "itemTemplates";
}
export declare abstract class ListViewBase extends View implements ListViewDefinition, TemplatedItemsView {
    static itemLoadingEvent: string;
    static itemTapEvent: string;
    static loadMoreItemsEvent: string;
    static knownFunctions: string[];
    private _itemIdGenerator;
    private _itemTemplateSelector;
    private _itemTemplateSelectorBindable;
    _defaultTemplate: KeyedTemplate;
    _itemTemplatesInternal: KeyedTemplate[];
    _effectiveRowHeight: number;
    rowHeight: Length;
    iosEstimatedRowHeight: Length;
    items: any[] | ItemsSource;
    itemTemplate: string | Template;
    itemTemplates: string | Array<KeyedTemplate>;
    separatorColor: Color;
    itemTemplateSelector: string | ((item: any, index: number, items: any) => string);
    itemIdGenerator: (item: any, index: number, items: any) => number;
    refresh(): void;
    scrollToIndex(index: number): void;
    scrollToIndexAnimated(index: number): void;
    _getItemTemplate(index: number): KeyedTemplate;
    _prepareItem(item: View, index: number): void;
    private _getDataItem;
    _getDefaultItemContent(index: number): View;
    _onItemsChanged(args: ChangedData<any>): void;
    _onRowHeightPropertyChanged(oldValue: Length, newValue: Length): void;
    isItemAtIndexVisible(index: number): boolean;
    protected updateEffectiveRowHeight(): void;
}
export interface ListViewBase {
    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any): any;
    on(event: "itemLoading", callback: (args: ItemEventData) => void, thisArg?: any): any;
    on(event: "itemTap", callback: (args: ItemEventData) => void, thisArg?: any): any;
    on(event: "loadMoreItems", callback: (args: EventData) => void, thisArg?: any): any;
}
export declare const itemsProperty: Property<ListViewBase, any[] | ItemsSource>;
export declare const itemTemplateProperty: Property<ListViewBase, string | Template>;
export declare const itemTemplatesProperty: Property<ListViewBase, string | KeyedTemplate[]>;
export declare const rowHeightProperty: CoercibleProperty<ListViewBase, Length>;
export declare const iosEstimatedRowHeightProperty: Property<ListViewBase, Length>;
export declare const separatorColorProperty: CssProperty<Style, Color>;
//# sourceMappingURL=list-view-common.d.ts.map