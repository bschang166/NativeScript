import { ImageSource as ImageSourceDefinition } from ".";
import { ImageAsset } from "../image-asset";
import { isFileOrResourcePath } from "../utils/utils";
export { isFileOrResourcePath };
export declare class ImageSource implements ImageSourceDefinition {
    android: android.graphics.Bitmap;
    ios: UIImage;
    fromAsset(asset: ImageAsset): Promise<ImageSource>;
    loadFromResource(name: string): boolean;
    fromResource(name: string): Promise<boolean>;
    loadFromFile(path: string): boolean;
    fromFile(path: string): Promise<boolean>;
    loadFromData(data: any): boolean;
    fromData(data: any): Promise<boolean>;
    loadFromBase64(source: string): boolean;
    fromBase64(source: string): Promise<boolean>;
    setNativeSource(source: any): void;
    saveToFile(path: string, format: "png" | "jpeg" | "jpg", quality?: number): boolean;
    toBase64String(format: "png" | "jpeg" | "jpg", quality?: number): string;
    readonly height: number;
    readonly width: number;
    readonly rotationAngle: number;
}
export declare function fromAsset(asset: ImageAsset): Promise<ImageSource>;
export declare function fromResource(name: string): ImageSource;
export declare function fromFile(path: string): ImageSource;
export declare function fromData(data: any): ImageSource;
export declare function fromBase64(source: string): ImageSource;
export declare function fromNativeSource(source: any): ImageSource;
export declare function fromUrl(url: string): Promise<ImageSource>;
export declare function fromFileOrResource(path: string): ImageSource;
//# sourceMappingURL=image-source.ios.d.ts.map