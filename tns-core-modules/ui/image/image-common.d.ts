import { Image as ImageDefinition, Stretch } from ".";
import { View, Property, InheritedCssProperty, Length, Style, Color } from "../core/view";
import { ImageAsset } from "../../image-asset";
import { ImageSource, fromAsset, fromNativeSource, fromUrl } from "../../image-source";
import { isDataURI, isFileOrResourcePath, RESOURCE_PREFIX } from "../../utils/utils";
export * from "../core/view";
export { ImageSource, ImageAsset, fromAsset, fromNativeSource, fromUrl, isDataURI, isFileOrResourcePath, RESOURCE_PREFIX };
export declare abstract class ImageBase extends View implements ImageDefinition {
    imageSource: ImageSource;
    src: string | ImageSource;
    isLoading: boolean;
    stretch: Stretch;
    loadMode: "sync" | "async";
    decodeWidth: Length;
    decodeHeight: Length;
    tintColor: Color;
    _createImageSourceFromSrc(value: string | ImageSource | ImageAsset): void;
}
export declare const imageSourceProperty: Property<ImageBase, ImageSource>;
export declare const srcProperty: Property<ImageBase, any>;
export declare const loadModeProperty: Property<ImageBase, "async" | "sync">;
export declare const isLoadingProperty: Property<ImageBase, boolean>;
export declare const stretchProperty: Property<ImageBase, Stretch>;
export declare const tintColorProperty: InheritedCssProperty<Style, Color>;
export declare const decodeHeightProperty: Property<ImageBase, Length>;
export declare const decodeWidthProperty: Property<ImageBase, Length>;
//# sourceMappingURL=image-common.d.ts.map