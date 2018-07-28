import { EventData } from "tns-core-modules/data/observable";
import * as observable from "tns-core-modules/data/observable";
export declare function navigatingTo(args: EventData): void;
export declare class ActionItemPostitionView extends observable.Observable {
    private _values;
    private _count;
    private _text;
    constructor();
    text: string;
    onTap(): void;
    change(): void;
}
//# sourceMappingURL=action-item-position.d.ts.map