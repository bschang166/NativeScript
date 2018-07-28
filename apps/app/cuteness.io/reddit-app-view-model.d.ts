import { ImageSource } from "tns-core-modules/image-source";
import { VirtualArray } from "tns-core-modules/data/virtual-array";
import { Observable } from "tns-core-modules/data/observable";
import { Cache as ImageCache } from "tns-core-modules/ui/image-cache";
import { RedditViewModel } from "./reddit-item-view-model";
export declare var defaultThumbnailImageSource: ImageSource;
export declare var defaultNoThumbnailImageSource: ImageSource;
export declare var cache: ImageCache;
export declare class AppViewModel extends Observable {
    private _redditItems;
    readonly redditItems: VirtualArray<RedditViewModel>;
    private _isScrolling;
    isScrolling: boolean;
    readonly aboutText: string;
    readonly defaultThumbnailImageSource: ImageSource;
    readonly defaultNoThumbnailImageSource: ImageSource;
}
//# sourceMappingURL=reddit-app-view-model.d.ts.map