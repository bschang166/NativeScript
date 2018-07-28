import { SegmentedBarItemBase, SegmentedBarBase } from "./segmented-bar-common";
export * from "./segmented-bar-common";
export declare class SegmentedBarItem extends SegmentedBarItemBase {
    _update(): void;
}
export declare class SegmentedBar extends SegmentedBarBase {
    private _ios;
    private _selectionHandler;
    constructor();
    readonly ios: UISegmentedControl;
}
//# sourceMappingURL=segmented-bar.ios.d.ts.map