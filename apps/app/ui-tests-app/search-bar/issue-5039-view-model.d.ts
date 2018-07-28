import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { SearchBar } from "tns-core-modules/ui/search-bar";
export declare class Issue5039ViewModel extends Observable {
    private _searchBar;
    private _items;
    items: ObservableArray<{}>;
    constructor(_searchBar: SearchBar);
    onSubmit(): void;
    clearSearch(): void;
    filter(value?: string): void;
}
//# sourceMappingURL=issue-5039-view-model.d.ts.map