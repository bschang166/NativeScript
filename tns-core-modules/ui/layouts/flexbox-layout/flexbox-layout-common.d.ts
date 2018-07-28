import { LayoutBase, View, Style, CssProperty } from "../layout-base";
export * from "../layout-base";
export declare type Basis = "auto" | number;
export declare const ORDER_DEFAULT = 1;
export declare const FLEX_GROW_DEFAULT = 0;
export declare const FLEX_SHRINK_DEFAULT = 1;
export declare type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export declare namespace FlexDirection {
    const ROW: "row";
    const ROW_REVERSE: "row-reverse";
    const COLUMN: "column";
    const COLUMN_REVERSE: "column-reverse";
    const isValid: (value: any) => value is import("tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout").FlexDirection;
    const parse: (value: any) => import("tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout").FlexDirection;
}
export declare type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
export declare namespace FlexWrap {
    const NOWRAP: "nowrap";
    const WRAP: "wrap";
    const WRAP_REVERSE: "wrap-reverse";
    const isValid: (value: any) => value is import("tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout").FlexWrap;
    const parse: (value: any) => import("tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout").FlexWrap;
}
export declare type JustifyContent = "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
export declare namespace JustifyContent {
    const FLEX_START: "flex-start";
    const FLEX_END: "flex-end";
    const CENTER: "center";
    const SPACE_BETWEEN: "space-between";
    const SPACE_AROUND: "space-around";
    const isValid: (value: any) => value is import("tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout").JustifyContent;
    const parse: (value: any) => import("tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout").JustifyContent;
}
export declare type FlexBasisPercent = number;
export declare namespace FlexBasisPercent {
    const DEFAULT: number;
}
export declare type AlignItems = "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
export declare namespace AlignItems {
    const FLEX_START: "flex-start";
    const FLEX_END: "flex-end";
    const CENTER: "center";
    const BASELINE: "baseline";
    const STRETCH: "stretch";
    const isValid: (value: any) => value is import("tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout").AlignItems;
    const parse: (value: any) => import("tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout").AlignItems;
}
export declare type AlignContent = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch";
export declare namespace AlignContent {
    const FLEX_START: "flex-start";
    const FLEX_END: "flex-end";
    const CENTER: "center";
    const SPACE_BETWEEN: "space-between";
    const SPACE_AROUND: "space-around";
    const STRETCH: "stretch";
    const isValid: (value: any) => value is import("tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout").AlignContent;
    const parse: (value: any) => import("tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout").AlignContent;
}
export declare type Order = number;
export declare namespace Order {
    function isValid(value: any): boolean;
    const parse: typeof parseInt;
}
export declare type FlexGrow = number;
export declare namespace FlexGrow {
    function isValid(value: any): boolean;
    const parse: typeof parseFloat;
}
export declare type FlexShrink = number;
export declare namespace FlexShrink {
    function isValid(value: any): boolean;
    const parse: typeof parseFloat;
}
export declare type FlexWrapBefore = boolean;
export declare namespace FlexWrapBefore {
    function isValid(value: any): boolean;
    function parse(value: string): FlexWrapBefore;
}
export declare type AlignSelf = "auto" | AlignItems;
export declare namespace AlignSelf {
    const AUTO: "auto";
    const FLEX_START: "flex-start";
    const FLEX_END: "flex-end";
    const CENTER: "center";
    const BASELINE: "baseline";
    const STRETCH: "stretch";
    const isValid: (value: any) => value is import("tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout").AlignSelf;
    const parse: (value: any) => import("tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout").AlignSelf;
}
export declare abstract class FlexboxLayoutBase extends LayoutBase {
    flexDirection: FlexDirection;
    flexWrap: FlexWrap;
    justifyContent: JustifyContent;
    alignItems: AlignItems;
    alignContent: AlignContent;
    static setOrder(view: View, order: number): void;
    static getOrder(view: View): number;
    static setFlexGrow(view: View, grow: number): void;
    static getFlexGrow(view: View): number;
    static setFlexShrink(view: View, shrink: number): void;
    static getFlexShrink(view: View): number;
    static setAlignSelf(view: View, align: AlignSelf): void;
    static getAlignSelf(view: View): AlignSelf;
    static setFlexWrapBefore(view: View, wrap: boolean): void;
    static getFlexWrapBefore(view: View): boolean;
}
export declare const flexDirectionProperty: CssProperty<Style, import("tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout").FlexDirection>;
export declare const flexWrapProperty: CssProperty<Style, import("tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout").FlexWrap>;
export declare const justifyContentProperty: CssProperty<Style, import("tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout").JustifyContent>;
export declare const alignItemsProperty: CssProperty<Style, import("tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout").AlignItems>;
export declare const alignContentProperty: CssProperty<Style, import("tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout").AlignContent>;
export declare const orderProperty: CssProperty<Style, number>;
export declare const flexGrowProperty: CssProperty<Style, number>;
export declare const flexShrinkProperty: CssProperty<Style, number>;
export declare const flexWrapBeforeProperty: CssProperty<Style, boolean>;
export declare const alignSelfProperty: CssProperty<Style, import("tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout").AlignSelf>;
//# sourceMappingURL=flexbox-layout-common.d.ts.map