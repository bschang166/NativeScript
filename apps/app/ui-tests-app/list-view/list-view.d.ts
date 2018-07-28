import { EventData } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Item } from "./main-view-model";
export declare function selectItemTemplate(item: Item, index: number, items: ObservableArray<Item>): string;
export declare function pageLoaded(args: EventData): void;
export declare function onScroll(args: EventData): void;
export declare function onScrollToIndex(args: EventData): void;
export declare function onScrollToIndexAnimated(args: EventData): void;
export declare function onScrollReset(args: EventData): void;
//# sourceMappingURL=list-view.d.ts.map