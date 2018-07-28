import * as definition from ".";
import * as observable from "../data/observable";
export declare class ImageAsset extends observable.Observable implements definition.ImageAsset {
    private _options;
    private _nativeImage;
    ios: PHAsset;
    android: string;
    constructor();
    options: definition.ImageAssetOptions;
    nativeImage: any;
    getImageAsync(callback: (image: any, error: Error) => void): void;
}
export declare function getAspectSafeDimensions(sourceWidth: any, sourceHeight: any, reqWidth: any, reqHeight: any): {
    width: number;
    height: number;
};
export declare function getRequestedImageSize(src: {
    width: number;
    height: number;
}, options: definition.ImageAssetOptions): {
    width: number;
    height: number;
};
//# sourceMappingURL=image-asset-common.d.ts.map