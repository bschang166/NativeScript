import * as common from "./image-asset-common";
export declare class ImageAsset extends common.ImageAsset {
    private _android;
    constructor(asset: string);
    android: string;
    getImageAsync(callback: (image: any, error: any) => void): void;
}
//# sourceMappingURL=image-asset.android.d.ts.map