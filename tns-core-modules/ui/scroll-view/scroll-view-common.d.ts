import { ScrollView as ScrollViewDefinition, Orientation, ScrollEventData } from ".";
import { ContentView, Property, EventData } from "../content-view";
export * from "../content-view";
export declare abstract class ScrollViewBase extends ContentView implements ScrollViewDefinition {
    private _scrollChangeCount;
    static scrollEvent: string;
    orientation: Orientation;
    scrollBarIndicatorVisible: boolean;
    addEventListener(arg: string, callback: any, thisArg?: any): void;
    removeEventListener(arg: string, callback: any, thisArg?: any): void;
    onLoaded(): void;
    onUnloaded(): void;
    private attach;
    private dettach;
    protected attachNative(): void;
    protected dettachNative(): void;
    readonly horizontalOffset: number;
    readonly verticalOffset: number;
    readonly scrollableWidth: number;
    readonly scrollableHeight: number;
    abstract scrollToVerticalOffset(value: number, animated: boolean): any;
    abstract scrollToHorizontalOffset(value: number, animated: boolean): any;
    abstract _onOrientationChanged(): any;
}
export interface ScrollViewBase {
    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any): any;
    on(event: "scroll", callback: (args: ScrollEventData) => void, thisArg?: any): any;
}
export declare const orientationProperty: Property<ScrollViewBase, import("tns-core-modules/ui/layouts/stack-layout/stack-layout").Orientation>;
export declare const scrollBarIndicatorVisibleProperty: Property<ScrollViewBase, boolean>;
//# sourceMappingURL=scroll-view-common.d.ts.map