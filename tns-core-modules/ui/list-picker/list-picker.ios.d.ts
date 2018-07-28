import { ListPickerBase } from "./list-picker-common";
export * from "./list-picker-common";
export declare class ListPicker extends ListPickerBase {
    private _ios;
    private _dataSource;
    private _delegate;
    constructor();
    onLoaded(): void;
    onUnloaded(): void;
    readonly ios: UIPickerView;
}
//# sourceMappingURL=list-picker.ios.d.ts.map