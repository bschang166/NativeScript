import { EventData } from "tns-core-modules/data/observable";
import { Observable } from "tns-core-modules/data/observable";
export declare class ListPickerJsonArrayModel extends Observable {
    items: {
        id: number;
        name: string;
        role: string;
    }[];
    selectedItem: string;
}
export declare function navigatingTo(args: EventData): void;
//# sourceMappingURL=list-picker-json-array.d.ts.map