import { AbsoluteLayoutBase, View, Length } from "./absolute-layout-common";
export * from "./absolute-layout-common";
export declare class AbsoluteLayout extends AbsoluteLayoutBase {
    onLeftChanged(view: View, oldValue: Length, newValue: Length): void;
    onTopChanged(view: View, oldValue: Length, newValue: Length): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    onLayout(left: number, top: number, right: number, bottom: number): void;
}
//# sourceMappingURL=absolute-layout.ios.d.ts.map