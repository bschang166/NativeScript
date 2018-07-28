import { Button } from "tns-core-modules/ui/button";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import * as def from "./layout-helper";
export declare class MyGridLayout extends GridLayout implements def.MyGridLayout {
    measureCount: number;
    arrangeCount: number;
    widthMeasureSpec: number;
    heightMeasureSpec: number;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    onLayout(left: number, top: number, right: number, bottom: number): void;
    readonly measured: boolean;
    readonly arranged: boolean;
    readonly measureWidth: number;
    readonly measureHeight: number;
    readonly layoutWidth: number;
    readonly layoutHeight: number;
    readonly layoutLeft: number;
    readonly layoutTop: number;
}
export declare class MyStackLayout extends StackLayout implements def.MyStackLayout {
    measureCount: number;
    arrangeCount: number;
    widthMeasureSpec: number;
    heightMeasureSpec: number;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    onLayout(left: number, top: number, right: number, bottom: number): void;
    readonly measured: boolean;
    readonly arranged: boolean;
    readonly measureWidth: number;
    readonly measureHeight: number;
    readonly layoutWidth: number;
    readonly layoutHeight: number;
    readonly layoutLeft: number;
    readonly layoutTop: number;
}
export declare class MyButton extends Button implements def.MyButton {
    measureCount: number;
    arrangeCount: number;
    widthMeasureSpec: number;
    heightMeasureSpec: number;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    onLayout(left: number, top: number, right: number, bottom: number): void;
    readonly measured: boolean;
    readonly arranged: boolean;
    readonly measureWidth: number;
    readonly measureHeight: number;
    readonly layoutWidth: number;
    readonly layoutHeight: number;
    readonly layoutLeft: number;
    readonly layoutTop: number;
}
export declare function assertMeasure(view: def.MeasuredView, width: number, height: number, name?: string): void;
export declare function assertLayout(view: def.MeasuredView, left: number, top: number, width: number, height: number, name?: string): void;
export declare function dp(value: number): number;
export declare function dip(value: number): number;
//# sourceMappingURL=layout-helper.ios.d.ts.map