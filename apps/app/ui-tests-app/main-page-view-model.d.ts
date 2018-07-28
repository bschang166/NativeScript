import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TestExample } from "./test-example-model";
import { TestPageMainViewModel } from "./test-page-main-view-model";
import { WrapLayout } from "tns-core-modules/ui/layouts/wrap-layout";
export declare class MainPageViewModel extends TestPageMainViewModel {
    private _exampleName;
    private _filteredListOfExamples;
    static ALL_EXAMPLES: ObservableArray<TestExample>;
    static _examplesDictionary: Map<string, TestExample>;
    constructor(buttonsPanel: WrapLayout, examples: Map<string, string>);
    exampleName: string;
    filteredListOfExamples: ObservableArray<TestExample>;
    static checkIfStringIsNullEmptyOrUndefined(value: string): boolean;
    static stringContains(value: string, searchString: string): boolean;
    loadExampleFromTextField(): void;
    loadExampleFromListView(example: any): void;
    private filterListView;
    private checkIfExampleAlreadyExists;
    private toggleExamplePanels;
    private loadFilteredListOfExamplesRecursive;
    private getFilteredExamplesContainer;
}
//# sourceMappingURL=main-page-view-model.d.ts.map