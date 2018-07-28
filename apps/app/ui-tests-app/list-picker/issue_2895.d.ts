import { Observable } from "tns-core-modules/data/observable";
import { EventData } from "tns-core-modules/ui/core/view";
export declare function navigatingTo(args: EventData): void;
export declare class ListPickerView extends Observable {
    private _showListPicker;
    private _isVisisble;
    constructor();
    readonly options: Array<String>;
    showListPicker: string;
    onTap(): void;
}
//# sourceMappingURL=issue_2895.d.ts.map