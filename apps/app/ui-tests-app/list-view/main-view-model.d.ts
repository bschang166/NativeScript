import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array";
export declare class Item extends Observable {
    private _name;
    private _id;
    constructor(name: string, id: number);
    name: string;
    id: number;
    toString(): string;
}
export declare class ViewModel extends Observable {
    private _items;
    readonly items: ObservableArray<Item>;
}
//# sourceMappingURL=main-view-model.d.ts.map