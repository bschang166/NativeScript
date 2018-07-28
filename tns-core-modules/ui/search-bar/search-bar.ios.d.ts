import { SearchBarBase } from "./search-bar-common";
export * from "./search-bar-common";
export declare class SearchBar extends SearchBarBase {
    private _ios;
    private _delegate;
    private __textField;
    private __placeholderLabel;
    constructor();
    onLoaded(): void;
    onUnloaded(): void;
    dismissSoftInput(): void;
    readonly ios: UISearchBar;
    readonly _textField: UITextField;
    readonly _placeholderLabel: UILabel;
}
//# sourceMappingURL=search-bar.ios.d.ts.map