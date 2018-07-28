import { EventData, Observable } from "tns-core-modules/data/observable";
import { WrapLayout } from "tns-core-modules/ui/layouts/wrap-layout";
export declare function pageLoaded(args: EventData): void;
export declare class MainPageViewModel extends Observable {
    private panel;
    private _examples;
    private _exampleName;
    private basePath;
    private colors;
    examples: Map<string, string>;
    constructor(panel: WrapLayout, _examples: Map<string, string>);
    exampleName: string;
    loadExample(exampleName: any): void;
    private shouldLoadBtns;
    private selectExample;
    private loadButtons;
}
//# sourceMappingURL=main-page.d.ts.map