import { Button } from "tns-core-modules/ui/button";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import * as def from "./layout-helper";
declare class NativeButton extends android.widget.Button {
    owner: def.MeasuredView;
    constructor(context: android.content.Context, owner: def.MeasuredView);
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
}
declare class NativeStackLayout extends org.nativescript.widgets.StackLayout {
    owner: def.MeasuredView;
    constructor(context: android.content.Context, owner: def.MeasuredView);
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
}
declare class NativeGridLayout extends org.nativescript.widgets.GridLayout {
    owner: def.MeasuredView;
    constructor(context: android.content.Context, owner: def.MeasuredView);
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
}
export declare class MyButton extends Button implements def.MyButton {
    nativeViewProtected: NativeButton;
    createNativeView(): NativeButton;
    initNativeView(): void;
    disposeNativeView(): void;
    measureCount: number;
    arrangeCount: number;
    widthMeasureSpec: number;
    heightMeasureSpec: number;
    readonly measureWidth: number;
    readonly measureHeight: number;
    readonly measured: boolean;
    readonly arranged: boolean;
    readonly layoutWidth: number;
    readonly layoutHeight: number;
    readonly layoutLeft: number;
    readonly layoutTop: number;
}
export declare class MyStackLayout extends StackLayout implements def.MyStackLayout {
    nativeViewProtected: NativeStackLayout;
    createNativeView(): NativeStackLayout;
    initNativeView(): void;
    disposeNativeView(): void;
    measureCount: number;
    arrangeCount: number;
    widthMeasureSpec: number;
    heightMeasureSpec: number;
    readonly measureWidth: number;
    readonly measureHeight: number;
    readonly measured: boolean;
    readonly arranged: boolean;
    readonly layoutWidth: number;
    readonly layoutHeight: number;
    readonly layoutLeft: number;
    readonly layoutTop: number;
}
export declare class MyGridLayout extends GridLayout implements def.MyGridLayout {
    nativeViewProtected: NativeGridLayout;
    createNativeView(): NativeGridLayout;
    initNativeView(): void;
    disposeNativeView(): void;
    measureCount: number;
    arrangeCount: number;
    widthMeasureSpec: number;
    heightMeasureSpec: number;
    readonly measureWidth: number;
    readonly measureHeight: number;
    readonly measured: boolean;
    readonly arranged: boolean;
    readonly layoutWidth: number;
    readonly layoutHeight: number;
    readonly layoutLeft: number;
    readonly layoutTop: number;
}
export declare function assertMeasure(view: def.MeasuredView, width: number, height: number, name?: string): void;
export declare function assertLayout(view: def.MeasuredView, left: number, top: number, width: number, height: number, name?: string): void;
export declare function dp(value: number): number;
export declare function dip(value: number): number;
export {};
//# sourceMappingURL=layout-helper.android.d.ts.map