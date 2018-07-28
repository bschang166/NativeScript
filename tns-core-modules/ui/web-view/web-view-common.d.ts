import { WebView as WebViewDefinition, LoadEventData, NavigationType } from ".";
import { View, EventData } from "../core/view";
import { File, knownFolders, path } from "../../file-system";
export { File, knownFolders, path, NavigationType };
export * from "../core/view";
export declare const srcProperty: any;
export declare abstract class WebViewBase extends View implements WebViewDefinition {
    static loadStartedEvent: string;
    static loadFinishedEvent: string;
    src: string;
    _onLoadFinished(url: string, error?: string): void;
    _onLoadStarted(url: string, navigationType: NavigationType): void;
    abstract _loadUrl(src: string): void;
    abstract _loadData(src: string): void;
    abstract stopLoading(): void;
    readonly canGoBack: boolean;
    readonly canGoForward: boolean;
    abstract goBack(): void;
    abstract goForward(): void;
    abstract reload(): void;
    url: string;
}
export interface WebViewBase {
    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any): any;
    on(event: "loadFinished", callback: (args: LoadEventData) => void, thisArg?: any): any;
    on(event: "loadStarted", callback: (args: LoadEventData) => void, thisArg?: any): any;
}
//# sourceMappingURL=web-view-common.d.ts.map