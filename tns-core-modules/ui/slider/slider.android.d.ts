import { SliderBase } from "./slider-common";
export * from "./slider-common";
interface OwnerSeekBar extends android.widget.SeekBar {
    owner: Slider;
}
export declare class Slider extends SliderBase {
    _supressNativeValue: boolean;
    nativeViewProtected: OwnerSeekBar;
    createNativeView(): globalAndroid.widget.SeekBar;
    initNativeView(): void;
    disposeNativeView(): void;
    resetNativeView(): void;
    private setNativeValuesSilently;
}
//# sourceMappingURL=slider.android.d.ts.map