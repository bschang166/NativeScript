import { LayoutBase as LayoutBaseDefinition } from "./layout-base";
import { View, CustomLayoutView, Property, AddChildFromBuilder, Length } from "../core/view";
export * from "../core/view";
export declare class LayoutBaseCommon extends CustomLayoutView implements LayoutBaseDefinition, AddChildFromBuilder {
    private _subViews;
    _addChildFromBuilder(name: string, value: any): void;
    getChildrenCount(): number;
    readonly _childrenCount: number;
    getChildAt(index: number): View;
    getChildIndex(child: View): number;
    getChildById(id: string): import("tns-core-modules/ui/core/view-base/view-base").ViewBase;
    _registerLayoutChild(child: View): void;
    _unregisterLayoutChild(child: View): void;
    addChild(child: View): void;
    insertChild(child: View, atIndex: number): void;
    removeChild(child: View): void;
    removeChildren(): void;
    padding: string | Length;
    paddingTop: Length;
    paddingRight: Length;
    paddingBottom: Length;
    paddingLeft: Length;
    clipToBounds: boolean;
    _childIndexToNativeChildIndex(index?: number): number;
    eachChildView(callback: (child: View) => boolean): void;
    eachLayoutChild(callback: (child: View, isLast: boolean) => void): void;
}
export declare const clipToBoundsProperty: Property<LayoutBaseCommon, boolean>;
//# sourceMappingURL=layout-base-common.d.ts.map