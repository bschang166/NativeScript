import { ImageSource, ImageAsset, ImageBase } from "./image-common";
export * from "./image-common";
export declare class Image extends ImageBase {
    nativeViewProtected: org.nativescript.widgets.ImageView;
    useCache: boolean;
    createNativeView(): org.nativescript.widgets.ImageView;
    initNativeView(): void;
    disposeNativeView(): void;
    resetNativeView(): void;
    _createImageSourceFromSrc(value: string | ImageSource | ImageAsset): void;
    private _calculateKeepAspectRatio;
}
//# sourceMappingURL=image.android.d.ts.map