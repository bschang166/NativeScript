import { Layout as LayoutDefinition } from "./layout";
import { LayoutBase } from "./layout-base";
export * from "./layout-base";
export declare class Layout extends LayoutBase implements LayoutDefinition {
    nativeViewProtected: android.view.ViewGroup;
    _measuredWidth: number;
    _measuredHeight: number;
    createNativeView(): globalAndroid.view.ViewGroup;
    initNativeView(): void;
    disposeNativeView(): void;
    measure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    layout(left: number, top: number, right: number, bottom: number): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    onLayout(left: number, top: number, right: number, bottom: number): void;
    setMeasuredDimension(measuredWidth: number, measuredHeight: number): void;
    getMeasuredWidth(): number;
    getMeasuredHeight(): number;
}
//# sourceMappingURL=layout.android.d.ts.map