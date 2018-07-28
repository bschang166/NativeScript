import { Point, CustomLayoutView as CustomLayoutViewDefinition } from ".";
import { GestureTypes, GestureEventData } from "../../gestures";
import { ViewCommon, EventData } from "./view-common";
import { Background } from "../../styling/background";
export * from "./view-common";
export declare class View extends ViewCommon {
    static androidBackPressedEvent: string;
    _dialogFragment: android.app.DialogFragment;
    private _isClickable;
    private touchListenerIsSet;
    private touchListener;
    private layoutChangeListenerIsSet;
    private layoutChangeListener;
    private _manager;
    nativeViewProtected: android.view.View;
    observe(type: GestureTypes, callback: (args: GestureEventData) => void, thisArg?: any): void;
    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any): void;
    off(eventNames: string, callback?: any, thisArg?: any): void;
    _getFragmentManager(): android.app.FragmentManager;
    onLoaded(): void;
    onUnloaded(): void;
    onBackPressed(): boolean;
    private hasGestureObservers;
    initNativeView(): void;
    disposeNativeView(): void;
    private setOnTouchListener;
    private setOnLayoutChangeListener;
    readonly isLayoutRequired: boolean;
    readonly isLayoutValid: boolean;
    layoutNativeView(left: number, top: number, right: number, bottom: number): void;
    requestLayout(): void;
    measure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    layout(left: number, top: number, right: number, bottom: number): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    onLayout(left: number, top: number, right: number, bottom: number): void;
    _getCurrentLayoutBounds(): {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
    getMeasuredWidth(): number;
    getMeasuredHeight(): number;
    focus(): boolean;
    getLocationInWindow(): Point;
    getLocationOnScreen(): Point;
    getLocationRelativeTo(otherView: ViewCommon): Point;
    static resolveSizeAndState(size: number, specSize: number, specMode: number, childMeasuredState: number): number;
    protected _showNativeModalView(parent: View, context: any, closeCallback: Function, fullscreen?: boolean, animated?: boolean, stretched?: boolean): void;
    protected _hideNativeModalView(parent: View): void;
    _redrawNativeBackground(value: android.graphics.drawable.Drawable | Background): void;
}
export declare class CustomLayoutView extends View implements CustomLayoutViewDefinition {
    nativeViewProtected: android.view.ViewGroup;
    createNativeView(): org.nativescript.widgets.ContentLayout;
    _addViewToNativeVisualTree(child: ViewCommon, atIndex?: number): boolean;
    _updateNativeLayoutParams(child: View): void;
    _setChildMinWidthNative(child: View): void;
    _setChildMinHeightNative(child: View): void;
    _removeViewFromNativeVisualTree(child: ViewCommon): void;
}
//# sourceMappingURL=view.android.d.ts.map