import { DockLayoutBase, View } from "./dock-layout-common";
export * from "./dock-layout-common";
export declare class DockLayout extends DockLayoutBase {
    onDockChanged(view: View, oldValue: "left" | "top" | "right" | "bottom", newValue: "left" | "top" | "right" | "bottom"): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    onLayout(left: number, top: number, right: number, bottom: number): void;
}
//# sourceMappingURL=dock-layout.ios.d.ts.map