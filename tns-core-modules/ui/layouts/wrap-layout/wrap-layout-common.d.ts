import { WrapLayout as WrapLayoutDefinition, Orientation } from ".";
import { LayoutBase, Property, Length } from "../layout-base";
export * from "../layout-base";
export declare class WrapLayoutBase extends LayoutBase implements WrapLayoutDefinition {
    orientation: Orientation;
    itemWidth: Length;
    itemHeight: Length;
    effectiveItemWidth: number;
    effectiveItemHeight: number;
}
export declare const itemWidthProperty: Property<WrapLayoutBase, Length>;
export declare const itemHeightProperty: Property<WrapLayoutBase, Length>;
export declare const orientationProperty: Property<WrapLayoutBase, import("tns-core-modules/ui/layouts/stack-layout/stack-layout").Orientation>;
//# sourceMappingURL=wrap-layout-common.d.ts.map