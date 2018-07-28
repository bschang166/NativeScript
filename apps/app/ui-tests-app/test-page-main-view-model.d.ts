import { Observable } from "tns-core-modules/data/observable";
import { WrapLayout } from "tns-core-modules/ui/layouts/wrap-layout";
export declare class TestPageMainViewModel extends Observable {
    protected buttonsPanel: WrapLayout;
    private _examples;
    private _colors;
    static APP_NAME: string;
    basePath: string;
    examples: Map<string, string>;
    constructor(buttonsPanel: WrapLayout, _examples: Map<string, string>);
    protected selectExample(selectedExample: any): void;
    protected navigateToExample(exampleFullPath: string): void;
    protected loadExample(exampleName: string): void;
    private shouldLoadBtns;
    private loadButtons;
    private sortMap;
}
//# sourceMappingURL=test-page-main-view-model.d.ts.map