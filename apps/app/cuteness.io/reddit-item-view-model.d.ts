import { Observable } from "tns-core-modules/data/observable";
import { ImageSource } from "tns-core-modules/image-source";
import { ItemData } from "./reddit-model";
export declare class RedditViewModel extends Observable {
    private _source;
    constructor(source: ItemData);
    readonly source: ItemData;
    private _isLoading;
    isLoading: boolean;
    readonly thumbnailImage: ImageSource;
    readonly imageSource: ImageSource;
}
//# sourceMappingURL=reddit-item-view-model.d.ts.map