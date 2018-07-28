import { SegmentedBar as SegmentedBarDefinition, SegmentedBarItem as SegmentedBarItemDefinition, SelectedIndexChangedEventData } from ".";
import { ViewBase, View, AddChildFromBuilder, AddArrayFromBuilder, Property, CoercibleProperty, InheritedCssProperty, Color, Style, EventData } from "../core/view";
export * from "../core/view";
export declare module knownCollections {
    var items: string;
}
export declare abstract class SegmentedBarItemBase extends ViewBase implements SegmentedBarItemDefinition {
    private _title;
    title: string;
    abstract _update(): any;
}
export declare abstract class SegmentedBarBase extends View implements SegmentedBarDefinition, AddChildFromBuilder, AddArrayFromBuilder {
    static selectedIndexChangedEvent: string;
    selectedIndex: number;
    items: Array<SegmentedBarItemDefinition>;
    selectedBackgroundColor: Color;
    _addArrayFromBuilder(name: string, value: Array<any>): void;
    _addChildFromBuilder(name: string, value: any): void;
    onItemsChanged(oldItems: SegmentedBarItemDefinition[], newItems: SegmentedBarItemDefinition[]): void;
    eachChild(callback: (child: ViewBase) => boolean): void;
}
export interface SegmentedBarBase {
    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any): any;
    on(event: "selectedIndexChanged", callback: (args: SelectedIndexChangedEventData) => void, thisArg?: any): any;
}
export declare const selectedIndexProperty: CoercibleProperty<SegmentedBarBase, number>;
export declare const itemsProperty: Property<SegmentedBarBase, SegmentedBarItemDefinition[]>;
export declare const selectedBackgroundColorProperty: InheritedCssProperty<Style, Color>;
//# sourceMappingURL=segmented-bar-common.d.ts.map