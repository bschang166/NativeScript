import * as common from "./image-asset-common";
export declare class ImageAsset extends common.ImageAsset {
    private _ios;
    constructor(asset: string | PHAsset | UIImage);
    ios: PHAsset;
    getImageAsync(callback: (image: any, error: any) => void): void;
    private scaleImage;
}
//# sourceMappingURL=image-asset.ios.d.ts.map