import { ListPicker as ListPickerDefinition, ItemsSource } from ".";
import { View, Property, CoercibleProperty } from "../core/view";
export * from "../core/view";
export declare class ListPickerBase extends View implements ListPickerDefinition {
    selectedIndex: number;
    items: any[] | ItemsSource;
    isItemsSource: boolean;
    textField: string;
    valueField: string;
    selectedValue: any;
    _getItemAsString(index: number): any;
    private parseItem;
    updateSelectedValue(index: any): void;
}
export declare const selectedIndexProperty: CoercibleProperty<ListPickerBase, number>;
export declare const itemsProperty: Property<ListPickerBase, any[] | ItemsSource>;
export declare const textFieldProperty: Property<ListPickerBase, string>;
export declare const valueFieldProperty: Property<ListPickerBase, string>;
export declare const selectedValueProperty: Property<ListPickerBase, string>;
//# sourceMappingURL=list-picker-common.d.ts.map