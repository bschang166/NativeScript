import { SearchBarBase } from "./search-bar-common";
export * from "./search-bar-common";
export declare class SearchBar extends SearchBarBase {
    nativeViewProtected: android.support.v7.widget.SearchView;
    private _searchTextView;
    private _searchPlate;
    dismissSoftInput(): void;
    focus(): boolean;
    createNativeView(): globalAndroid.support.v7.widget.SearchView;
    initNativeView(): void;
    disposeNativeView(): void;
    private _getTextView;
    private _getSearchPlate;
}
//# sourceMappingURL=search-bar.android.d.ts.map